import * as THREE from 'three';

export default class Container {
    constructor(dimX, dimY, dimZ) {

        const geometry = new THREE.BoxGeometry(dimX,dimY,dimZ);

        this.centreOffset = new THREE.Vector3(-(dimX/2),-(dimY/2),-(dimZ/2));

        this.itemsInContainer = [];

        geometry.clearGroups();

        //mapping materials to walls of container
        geometry.addGroup(0,6,0);
        geometry.addGroup(6,6,0);
        geometry.addGroup(12,6,1);
        geometry.addGroup(18,6,1);
        geometry.addGroup(24,6,2);
        geometry.addGroup(30,6,2);


        const materials = [
            new THREE.MeshBasicMaterial({ 
                color: 0x008080, //red
                opacity: 0,
                transparent: false,
                side: THREE.BackSide
            }), // front face
            new THREE.MeshBasicMaterial({ 
                color: 0x8E4585, //green
                opacity: 0,
                transparent: false,
                side: THREE.BackSide 
            }), // back face
            new THREE.MeshBasicMaterial({ 
                color: 0xFFDB58, //blue
                opacity: 0,
                transparent: false,
                side: THREE.BackSide
            }) // left face
        ];

        this.mesh = new THREE.Mesh(geometry, materials);

        this.mesh.name = 'container';
    }
}