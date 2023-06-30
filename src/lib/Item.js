import * as THREE from 'three';

export default class Item {
    constructor(dimX, dimY, dimZ) {

        this.dimX = dimX;
        this.dimY = dimY;
        this.dimZ = dimZ;

        this.centreOffset = new THREE.Vector3(dimX/2,dimY/2,dimZ/2);

        this.position = new THREE.Vector3(0,0,0);

        const boxGeometry = new THREE.BoxGeometry(dimX, dimY, dimZ);
        const boxMaterial = new THREE.MeshBasicMaterial({
            color: 0x00FFFF,
            opacity: 1,
            transparent: true
        });

        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

        boxMesh.name = 'item'

        const wireframeGeometry = new THREE.WireframeGeometry(boxGeometry);
        const wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0xFF00FF
            
        })

        const wireframeMesh = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

        this.mesh = new THREE.Group();
        this.mesh.name = 'group item'
        this.mesh.add(boxMesh);
        this.mesh.add(wireframeMesh);
    }

    setPosition(vect, offset) {
        this.position = vect;

        this.mesh.position.copy(vect).add(this.centreOffset).add(offset);
    }

    getFace(face) {
        let p1, p2, p3, p4;
        //switch values based on attributes of the container class
        switch(face) {
            //XY face
            case 0:
            case 2:
                p1 = [this.position.x, this.position.y];
                p2 = [this.position.x+this.dimX, this.position.y];
                p3 = [this.position.x, this.position.y+this.dimY];
                p4 = [this.position.x+this.dimX, this.position.y+this.dimY];
                break;
            
            //XZ face
            case 3:
            case 4:
                p1 = [this.position.x, this.position.z];
                p2 = [this.position.x+this.dimX, this.position.z];
                p3 = [this.position.x, this.position.z+this.dimZ];
                p4 = [this.position.x+this.dimX, this.position.z+this.dimZ];
                break;

            //YZ face
            case 1:
            case 5:
                p1 = [this.position.y, this.position.z];
                p2 = [this.position.y+this.dimY, this.position.z];
                p3 = [this.position.y, this.position.z+this.dimZ];
                p4 = [ this.position.y+this.dimY, this.position.z+this.dimZ];
                break;

            default:
                //to-do: what should this return
        }
    }

    dispose() {
        for (let i = 0; i < 2; i++) {
            this.mesh.children[i].geometry.dispose();
            this.mesh.children[i].material.dispose();
        }
    }
}