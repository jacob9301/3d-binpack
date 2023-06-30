import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Container from './Container';

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

        window.addEventListener('resize', () => this.onWindowResize());
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.renderer.render(this.scene, this.camera);
        this.controls.update();
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    containerCleanUp() {
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

        this.containerCleanUp();

        this.controls.dispose();

        this.renderer.dispose();
        document.body.removeChild(this.renderer.domElement);
    }
}

export default SceneObject;