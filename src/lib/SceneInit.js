import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Container from './Container';

class SceneInit {
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

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.container = new Container(20, 20, 20, this.scene);

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

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    resetMaterials(){
        for (const object of this.container.mesh.children){
            if (object.name === 'ep'){
                if (object !== this.clicked){
                    object.material.color.set(0x000000);
                }
            }
        }
    }

    hoverMaterials(){
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.container.mesh.children);

        for (const object of intersects){
            if (object.object.name === 'ep'){
                object.object.material.color.set(0xFF00FF);
                break;

            }
        }
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
                console.log(object.object);

                if (object.object.name === 'ep'){
                    this.clicked = object.object
                    this.container.selectedEp = object.object.ep;
                    object.object.material.color.set(0xFF00FF);
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
}

export default SceneInit;