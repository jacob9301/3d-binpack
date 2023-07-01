import { useRef, useEffect } from "react";
import SceneObject from "../../lib/SceneObject";
import { useDispatch, useSelector } from 'react-redux';
import { containerUpdateHandled } from "../../actions/containerActions";
import { resetBox } from "../../actions/boxActions";


function Scene() {

    const canvasRef = useRef(null);

    const boxToBeAdded = useSelector(state => state.box.added);
    const boxDimensions = useSelector(state => state.box.dimensions);
    const containerHasupdate = useSelector(state => state.container.hasUpdate);
    const containerDimensions = useSelector(state => state.container.dimensions);
    const dispatch = useDispatch();

    const sceneRef = useRef(null);

    useEffect(() => {
        if (boxToBeAdded) {
            sceneRef.current.container.addItem(boxDimensions);
            dispatch(resetBox());
        }

    },[boxToBeAdded])

    useEffect(() => {
        if (containerHasupdate) {
            sceneRef.current.updateContainer(containerDimensions);
            dispatch(containerUpdateHandled());
        }
    },[containerHasupdate])

    useEffect(() => {
        
        const scene = new SceneObject(canvasRef);
        scene.animate();
        scene.container.updateExtremePointsSpheres();

        sceneRef.current = scene;

        return () => {
            scene.cleanUp();
        }
    },[])

    return (
        <canvas id='scene' ref={canvasRef}></canvas>
    )
}

export default Scene;