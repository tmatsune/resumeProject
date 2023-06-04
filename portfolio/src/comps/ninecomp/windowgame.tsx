
import { statSync } from "fs";
import "./windowgame.css"
import { useState, useEffect, useRef } from "react";
import useDragger from "../../context/useDragger";

const pong = require('../../sound/pong.mp3')
const score = require('../../sound/score.mp3')

type Toggle = {
    toggle: () => void;
}

const effect = new Audio(pong)
const scoreEff = new Audio(score)
function WindowGame({toggle}: Toggle) {

    const [start, setStart] = useState(false)

    function startGame() {
        if(!start) {
            setStart(true)
        }
    }
    // Inoput Handler
    type UserInputs = {
        keyinputs: string[];
    }
    const inputHanlder: UserInputs = {
        keyinputs: []
    }
    window.addEventListener('keydown', e => {
        if ( (e.key === 'ArrowUp' 
            || e.key === 'ArrowDown'
            || e.key === 'ArrowLeft'
            || e.key === 'ArrowRight')
            && inputHanlder.keyinputs.indexOf(e.key) === -1
        ) {
            inputHanlder.keyinputs.push(e.key);
            console.log(inputHanlder.keyinputs)
        }
    })
    window.addEventListener('keyup', e => {
        if ( e.key === "ArrowUp"
            || e.key === "ArrowDown"     
            || e.key === 'ArrowLeft'
            || e.key === "ArrowRight"
            ) {  
            inputHanlder.keyinputs.splice(inputHanlder.keyinputs.indexOf(e.key), 1)
        }
    })

    // GameItems    
    // background
    type Background = {
        h: number;
        w: number;
        color: string;
        x: number;
        y: number
    }

    const bg: Background = {
        h: 420,
        w: 620,
        color: 'black',
        x: 30,
        y: 40,
    }
    const DrawBackground = (ctx:CanvasRenderingContext2D, bg: Background, canvas: HTMLCanvasElement) => {
        ctx.beginPath()
        ctx.fillStyle = bg.color
        ctx.fillRect(bg.x, bg.y, canvas.width, canvas.height)
        ctx.stroke()
    }
    // paddle
    type Paddle = {
        x: number;
        y: number;
        w: number;
        h: number;
        color: string;
        speed: number;
        score: number;
    }
    const userPaddle: Paddle = {
        x: 620,
        y: 300,
        w: 10,
        h: 50,
        color: 'white',
        speed: 4,
        score: 0
    }
    const compPaddle: Paddle = {
        x: 50,
        y: 260,
        w: 10,
        h: 50,
        color: 'white',
        speed: 1.4,
        score: 0
    }
    function drawPaddle(ctx: CanvasRenderingContext2D, paddle: Paddle){
        ctx.beginPath();
        ctx.fillStyle = paddle.color;
        ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h)
        ctx.stroke();
    }
    function movePaddle(canvas: HTMLCanvasElement, paddle: Paddle, inputs: UserInputs) {
        if ( inputs.keyinputs.indexOf('ArrowUp') > -1){
            paddle.y += -paddle.speed
        }
        if ( inputs.keyinputs.indexOf('ArrowDown') > -1) {
            paddle.y += paddle.speed
        }
        if ( paddle.y > canvas.height - 58 ) {
            paddle.y = canvas.height - 58
        }
        if (paddle.y < 46) {
            paddle.y = 46
        }
    }

    function moveCompPaddle(canvas: HTMLCanvasElement, paddle: Paddle, ball: Ball) {
        if (ball.y > paddle.y) {
            paddle.y += paddle.speed
        }
        if (ball.y < paddle.y) {
            paddle.y += -paddle.speed
        }
        if ( paddle.y > canvas.height - 58 ) {
            paddle.y = canvas.height - 58
        }
        if (paddle.y < 46) {
            paddle.y = 46
        }
    }

    // ball 
    type Ball = {
        h: number;
        w: number;
        x: number;
        y: number;
        color: string;
        xspeed: number
        yspeed: number
    }
    const ball: Ball = {
        h: 10,
        w: 10,
        x: 300,
        y: 240,
        color: 'white',
        xspeed: 3.2,
        yspeed: 1.6,
    }

    function drawBall(ctx:CanvasRenderingContext2D, ball: Ball) {
        ctx.beginPath();
        ctx.fillStyle = ball.color;
        ctx.fillRect(ball.x, ball.y, ball.w, ball.h);
        ctx.stroke();
    }

    function moveBall (canvas: HTMLCanvasElement, ball: Ball, paddle: Paddle, compPaddle: Paddle) {
        ball.x += ball.xspeed
        ball.y += ball.yspeed

        //detect hitbox of user
        if (ball.w + ball.x > paddle.x &&
            ball.y + ball.h >= paddle.y &&
            ball.y <= paddle.h + paddle.y) { 

            ball.xspeed = -ball.xspeed
            effect.play()
        }
        //detect hitbox of comp
        if (ball.x < compPaddle.x + paddle.w &&
            ball.y + ball.h >= compPaddle.y &&
            ball.y <= paddle.h + compPaddle.y) { 

            effect.play()
            ball.xspeed = 3.2
        }
        if (ball.y > canvas.height - 20) {
            ball.yspeed = -ball.yspeed
        }
        if (ball.y < 46) {
            ball.yspeed = 1.6
        }
        if (ball.x > canvas.width - 4) {
            resetBall(ball, paddle, compPaddle)
        }
        if ( ball.x < 28 ) {
            resetBall(ball, paddle, compPaddle)
        }

    }
    const resetBall = (ball: Ball, paddle: Paddle, compPaddle: Paddle) => {
        scoreEff.play()
        if (ball.x > 100) {
            ball.xspeed = -3.2;
            paddle.score += 1;
        }
        else {
            ball.xspeed = -ball.xspeed;
            compPaddle.score += 1;
        }
        ball.x = 340

    }
    //score
    const drawScore = (ctx: CanvasRenderingContext2D, paddle: Paddle, compPaddle: Paddle) => {
        ctx.font = "60px Arial";
        const userScore: string = paddle.score.toString()
        ctx.fillText(userScore, 220, 100);

        ctx.font = "60px Arial";
        const compScore: string = compPaddle.score.toString()
        ctx.fillText(compScore, 420, 100);

    }

    const canvasRef = useRef<null|HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if ( canvas && ctx ) {
            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                DrawBackground(ctx, bg, canvas);
                if( start ){
                    drawBall(ctx, ball)
                    moveBall(canvas, ball, userPaddle, compPaddle)

                    drawPaddle(ctx, userPaddle)
                    drawPaddle(ctx, compPaddle)

                    movePaddle(canvas, userPaddle, inputHanlder)
                    moveCompPaddle(canvas, compPaddle, ball)

                    drawScore(ctx, userPaddle, compPaddle)
                }
                requestAnimationFrame(draw)
            }
            requestAnimationFrame(draw);
        }
    }, [start])
    
    function endGame () {
        ball.xspeed = 0
        ball.yspeed = 0
        setStart(false)
    }
    function Exit() {
        ball.xspeed = 0
        ball.yspeed = 0
        setStart(false)
        toggle()
    }

    useDragger('nine', 'GnineTop', 'windowgame')

    return (
        <div id="windowgame">
            <div id="GnineTop">
                <h1>Pong Game</h1>
                <button id="exitBtn" onClick={Exit}>X</button>
            </div>
            <canvas ref={canvasRef} height={440} width={658} id='gameCanvas'></canvas>
            <button onClick={startGame} id="gameBtn">Start</button>
            <button onClick={endGame} id="gameBtn">Reset</button>
        </div>
    )
}
export default WindowGame;