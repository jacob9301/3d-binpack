import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Container from './Container';
import store from '../store';
import { setBoxPosition } from '../actions/boxActions';

class SceneObject {
    constructor(canvasRef) {
        this.canvasRef = canvasRef;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            65, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        
        this.camera.position.z = 50;

        this.container = new Container(20, 20, 20);
        this.scene.add(this.container.mesh);

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.raycaster = new THREE.Raycaster();

        //def without x and y values causes problems with hoverMaterials
        this.mouse = new THREE.Vector2(1,1);

        //for drag detection, prevent orbit controls from interfering with selection
        this.down = false;
        this.drag = false;

        this.clicked = null;

        window.addEventListener('pointermove', (event) => this.onPointerMove(event))

        window.addEventListener('mousedown', () => this.onMouseDown());
        window.addEventListener('mouseup', () => this.onMouseUp());

        window.addEventListener('resize', () => this.onWindowResize());
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.resetMaterials();
        this.hoverMaterials();

        this.renderer.render(this.scene, this.camera);
        this.controls.update();
    }

    resetMaterials(){
        for (const object of this.container.mesh.children){
            if (object.name === 'ep'){
                if (object !== this.clicked){
                    object.material.color.set(0x3E3E3E);
                }
            }
        }
    }

    hoverMaterials(){
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.container.mesh.children);

        for (const object of intersects){
            if (object.object.name === 'ep'){
                object.object.material.color.set(0xFFFFFF);
                break;

            }
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onPointerMove(event) {
        if (this.down) {
            this.drag = true;
        }

        const canvas = this.canvasRef.current;
        const canvasRect = canvas.getBoundingClientRect();

        this.mouse.x = ((event.clientX - canvasRect.left) / canvas.clientWidth)* 2 - 1;
        this.mouse.y = -((event.clientY - canvasRect.top) / canvas.clientHeight)* 2 + 1;
        
    }

    onMouseUp() {
        if (!this.drag) {
            this.raycaster.setFromCamera(this.mouse, this.camera);

            const intersects = this.raycaster.intersectObjects(this.container.mesh.children);

            for (const object of intersects) {

                if (object.object.name === 'ep'){
                    this.clicked = object.object
                    this.container.selectedEp = object.object.ep;
                    store.dispatch(setBoxPosition());
                    object.object.material.color.set(0xFFFFFF);
                    break;
                }
            }
        } else {
            this.drag = false
        }

        this.down = false;
    }

    onMouseDown() {
        this.down = true;
    }

    containerCleanUp() {

        this.container.spheresCleanUp();
        this.container.wallsCleanup();
        this.container.itemsCleanUp();

        this.scene.remove(this.container.mesh);

        this.container.mesh.material.forEach((material) => {
            material.dispose();
        });

        this.container.mesh.geometry.dispose();
    }

    updateContainer(dimensions) {
        this.containerCleanUp();

        this.container = new Container(dimensions.x, dimensions.y, dimensions.z);
        this.scene.add(this.container.mesh);
    }

    cleanUp() {
        window.removeEventListener('resize', () => this.onWindowResize());

        window.removeEventListener('pointermove', (event) => this.onPointerMove(event))

        window.removeEventListener('mousedown', () => this.onMouseDown());
        window.removeEventListener('mouseup', () => this.onMouseUp());

        this.containerCleanUp();

        this.controls.dispose();

        this.renderer.dispose();
        document.body.removeChild(this.renderer.domElement);
    }
}

export default SceneObject;