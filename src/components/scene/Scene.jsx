import { useRef, useEffect } from "react";
import * as THREE from 'three'
import SceneInit from "../../lib/SceneInit";


function Scene() {

    const canvasRef = useRef(null);

    useEffect(() => {
        const newScene = new SceneInit(canvasRef);
        newScene.animate();
    },[])

    return (
        <canvas id='scene' ref={canvasRef}></canvas>
    )
}

export default Scene;