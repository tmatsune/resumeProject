import React from "react";
import { useEffect, useRef } from "react";


function useDragger(parentNode: string, id: string, window: string) {

    const clicked = useRef<boolean>(false);
    const coords = useRef<{startX: number,startY: number,lastX: number,lastY: number}>({ startX: 0, startY: 0,lastX: 0,lastY: 0})

    useEffect(() => {

        const target = document.getElementById(id)
        const wind = document.getElementById(window)
        const winds = document.getElementById(parentNode)

        if(!target){
            throw new Error("Element with given id doesn't exist");
        }
        if(!wind){
            throw new Error("Container does not exist");
        }

        const onMouseDown = (e: MouseEvent) => {
            clicked.current = true;
            coords.current.startX = e.clientX
            coords.current.startY = e.clientY
        }
        const onMouseUp = (e: MouseEvent) => {
            clicked.current = false;
            coords.current.lastX = wind.offsetLeft
            coords.current.lastY = wind.offsetTop
        }

        const onMouseMove = (e:MouseEvent) => {
            if(!clicked.current){
                return 
            }
            const nextY = e.clientY - coords.current.startY + coords.current.lastY
            const nextX = e.clientX - coords.current.startX + coords.current.lastX

            wind.style.top = `${nextY}px`
            wind.style.left = `${nextX}px`
        }

        target.addEventListener('mousedown', onMouseDown);
        target.addEventListener('mouseup', onMouseUp);
        wind.addEventListener('mouseup', onMouseUp);
        wind.addEventListener('mousedown', onMouseDown);
        wind.addEventListener('mousemove', onMouseMove);
        wind.addEventListener('mouseleave', onMouseUp);

        const cleanup = () => {
            target.removeEventListener('mousedown', onMouseDown);
            target.removeEventListener('mouseup', onMouseUp);
            wind.addEventListener('mouseup', onMouseUp);
            wind.addEventListener('mousedown', onMouseDown);
            wind.removeEventListener('mousemove', onMouseMove);
            wind.removeEventListener('mouseleave', onMouseUp);
        }

    return cleanup;
    }, [id])

}
export default useDragger;