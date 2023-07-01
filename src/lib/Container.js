import * as THREE from 'three';
import Item from './Item';

export default class Container {
    constructor(dimX, dimY, dimZ) {

        const geometry = new THREE.BoxGeometry(dimX,dimY,dimZ);

        this.centreOffset = new THREE.Vector3(-(dimX/2),-(dimY/2),-(dimZ/2));

        this.extremePoints = [];

        this.spheres = [];

        this.itemsInContainer = [];

        this.YX = 0;
        this.YZ = 1;
        this.XY = 2;
        this.XZ = 3;
        this.ZX = 4;
        this.ZY = 5;

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

        const origin = new THREE.Vector3(0,0,0);
        this.extremePoints.push(origin);

        this.xzWall = new Item(dimX,0,dimZ);
        this.xzWall.setPosition(origin, this.centreOffset);

        this.yzWall = new Item(0,dimY,dimZ);
        this.yzWall.setPosition(origin, this.centreOffset);

        this.xyWall = new Item(dimX,dimY,0);
        this.xyWall.setPosition(origin, this.centreOffset);

        this.selectedEp = origin;
    }

    getItemsWithWalls() {
        return [this.xzWall,this.yzWall,this.xyWall,...this.itemsInContainer]
    }

    spheresCleanUp() {
        for (let sphere of this.spheres) {
            this.mesh.remove(sphere); //the mesh is pushed to the spheres list not a sphere object (there is no sphere object litem item or container)
            sphere.material.dispose();
            sphere.geometry.dispose();
        }

        this.spheres = [];
    }

    wallsCleanup() {

        this.mesh.remove(this.xzWall.mesh);
        this.xzWall.dispose();

        this.mesh.remove(this.yzWall.mesh);
        this.yzWall.dispose();

        this.mesh.remove(this.xyWall.mesh);
        this.xyWall.dispose();
    }

    itemsCleanUp() {
        for (let item of this.itemsInContainer) {
            this.mesh.remove(item.mesh);
            item.dispose();
        }

        this.itemsInContainer = [];
    }

    updateExtremePointsSpheres() {

        this.spheresCleanUp();

        for (let ep of this.extremePoints){
            const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
            const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x3E3E3E});
            const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphereMesh.ep = ep;
            sphereMesh.position.copy(ep).add(this.centreOffset)
            sphereMesh.name = 'ep';

            this.mesh.add(sphereMesh);
            this.spheres.push(sphereMesh);
        }


    }

    addItem(dimensions){
        const item = new Item(dimensions.x, dimensions.y, dimensions.z);
        item.setPosition(this.selectedEp, this.centreOffset);
        this.itemsInContainer.push(item);
        this.mesh.add(item.mesh);

        this.updateExtremePoints(item);
    }

    canTakeProjection(newItem, item, face) {
        switch(face){
            case this.YX:
                return ((newItem.position.x >= (item.position.x+item.dimX)) && 
                ((newItem.position.y+newItem.dimY) < (item.position.y+item.dimY)) && 
                (newItem.position.z < (item.position.z+item.dimZ)));
            
            case this.YZ:
                return ((newItem.position.z >= (item.position.z+item.dimZ)) && 
                ((newItem.position.y+newItem.dimY) < (item.position.y+item.dimY)) && 
                (newItem.position.x < (item.position.x+item.dimX)));
            
            case this.XY:
                return ((newItem.position.y >= (item.position.y+item.dimY)) && 
                ((newItem.position.x+newItem.dimX) < (item.position.X+item.dimX)) && 
                (newItem.position.z < (item.position.z+item.dimZ)));
            
            case this.XZ:
                return ((newItem.position.z >= (item.position.z+item.dimZ)) && 
                ((newItem.position.x+newItem.dimX) < (item.position.x+item.dimX)) && 
                (newItem.position.y < (item.position.y+item.dimY)));
            
            case this.ZX:
                return ((newItem.position.x >= (item.position.x+item.dimX)) && 
                ((newItem.position.z+newItem.dimZ) < (item.position.z+item.dimZ)) && 
                (newItem.position.y < (item.position.y+item.dimY)));
            
            case this.ZY:
                return ((newItem.position.y >= (item.position.y+item.dimY)) && 
                ((newItem.position.z+newItem.dimZ) < (item.position.z+item.dimZ)) && 
                (newItem.position.x < (item.position.x+item.dimX)));
            
            default:
                return false;

        }
    }

    updateExtremePoints(itemToAdd){
        let maxBound = [-1,-1,-1,-1,-1,-1];

        console.log(itemToAdd.position.y)

        let epYX = new THREE.Vector3(itemToAdd.position.x, itemToAdd.position.y+itemToAdd.dimY, itemToAdd.position.z);
        let epYZ = new THREE.Vector3(itemToAdd.position.x, itemToAdd.position.y+itemToAdd.dimY, itemToAdd.position.z);
        
        let epXY = new THREE.Vector3(itemToAdd.position.x+itemToAdd.dimX, itemToAdd.position.y, itemToAdd.position.z);
        let epXZ = new THREE.Vector3(itemToAdd.position.x+itemToAdd.dimX, itemToAdd.position.y, itemToAdd.position.z);

        let epZX = new THREE.Vector3(itemToAdd.position.x, itemToAdd.position.y, itemToAdd.position.z+itemToAdd.dimZ);
        let epZY = new THREE.Vector3(itemToAdd.position.x, itemToAdd.position.y, itemToAdd.position.z+itemToAdd.dimZ);

        let newExtremePoints = [epYX,epYZ,epXY,epXZ,epZX,epZY];

        const itemsWithWalls = this.getItemsWithWalls();
        for (let item of itemsWithWalls) {
            let projectedX = item.position.x+item.dimX;
            let projectedY = item.position.y+item.dimY;
            let projectedZ = item.position.z+item.dimZ;

            if ((this.canTakeProjection(itemToAdd, item, this.YX)) && (projectedX > maxBound[this.YX])) {
                let ep = new THREE.Vector3(projectedX, itemToAdd.position.y+itemToAdd.dimY, itemToAdd.position.z);
                newExtremePoints[this.YX] = ep;
                maxBound[this.YX] = projectedX;
            }

            if ((this.canTakeProjection(itemToAdd, item, this.YZ)) && (projectedZ > maxBound[this.YZ])) {
                let ep = new THREE.Vector3(itemToAdd.position.x, itemToAdd.position.y+itemToAdd.dimY, projectedZ);
                newExtremePoints[this.YZ] = ep;
                maxBound[this.YZ] = projectedZ;
            }

            if ((this.canTakeProjection(itemToAdd, item, this.XY)) && (projectedY > maxBound[this.XY])) {
                let ep = new THREE.Vector3(itemToAdd.position.x+itemToAdd.dimX, projectedY, itemToAdd.position.z);
                newExtremePoints[this.XY] = ep;
                maxBound[this.XY] = projectedY;
            }

            if ((this.canTakeProjection(itemToAdd, item, this.XZ)) && (projectedZ > maxBound[this.XZ])) {
                let ep = new THREE.Vector3(itemToAdd.position.x+itemToAdd.dimX, itemToAdd.position.y, projectedZ);
                newExtremePoints[this.XZ] = ep;
                maxBound[this.XZ] = projectedZ;
            }

            if ((this.canTakeProjection(itemToAdd, item, this.ZX)) && (projectedX > maxBound[this.ZX])) {
                let ep = new THREE.Vector3(projectedX, itemToAdd.position.y, itemToAdd.position.z+itemToAdd.dimZ);
                newExtremePoints[this.ZX] = ep;
                maxBound[this.ZX] = projectedX;
            }

            if ((this.canTakeProjection(itemToAdd, item, this.ZY)) && (projectedY > maxBound[this.ZY])) {
                let ep = new THREE.Vector3(itemToAdd.position.y, projectedY, itemToAdd.position.z+itemToAdd.dimZ);
                newExtremePoints[this.ZY] = ep;
                maxBound[this.ZY] = projectedY;
            }
        }

        for (let newEp of newExtremePoints) {
            let duplicate = false;

            for (let ep of this.extremePoints) {
                duplicate = newEp.equals(ep);
                if (duplicate) {break;}
            }

            if(!duplicate) {
                this.extremePoints.push(newEp);
            }
        }

        //test this
        this.extremePoints.sort((a,b) => {
            let diff = a.z - b.z;

            if (diff < 0) {return -1;}

            else if (diff === 0) {
                let diff2 = a.y - b.y;
                
                if (diff2 < 0) {return -1;}

                else if (diff2 === 0) {
                    let diff3 = a.x - b.x;

                    if (diff3 < 0) {return -1;}

                    else if (diff3 == 0) {return 0;}

                    else {return 1;}
                }

                else {return 1;}

            }

            else {return 1;}
        });

        console.log(this.extremePoints);
        this.updateExtremePointsSpheres()
    }
}