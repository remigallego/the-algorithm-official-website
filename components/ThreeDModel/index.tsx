import React, { FunctionComponent, useEffect } from "react";
import * as THREE from "three";
import { SVGLoader } from "./SVGLoader";

const ThreeDModel: FunctionComponent = () => {
  useEffect(() => {
    const innerWidth = 150;
    const innerHeight = 80;
    // --- Init threejs scene
    // ----------------------

    const scene = new THREE.Scene();
    const ratio = innerWidth / innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(innerWidth, innerHeight);

    const camera = new THREE.PerspectiveCamera(80, ratio, 0.01, 1000);
    camera.position.z = 400;

    //@ts-ignore
    document.getElementById("threed").appendChild(renderer.domElement);

    // Resize and update camera
    /*  window.addEventListener("resize", function (e) {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(innerWidth, innerHeight);
    }); */

    // Axes helper
    /*   const axesHelper = new THREE.AxesHelper(500);
    scene.add(axesHelper); */

    // --- Main part, load and parse SVG
    // ---------------------------------

    const svgMarkup = document.getElementById("logo")?.outerHTML;

    // SVG Loader is not a part of the main three.js bundle
    // We need to load it separately, it is included in this pen's Settings > JavaScript
    // https://threejs.org/docs/#examples/en/loaders/SVGLoader
    const loader = new SVGLoader();
    //@ts-ignore
    const svgData = loader.parse(svgMarkup);

    // Group we'll use for all SVG paths
    const svgGroup = new THREE.Group();
    // When importing SVGs paths are inverted on Y axis
    // it happens in the process of mapping from 2d to 3d coordinate system
    svgGroup.scale.y *= -1;

    const material = new THREE.MeshNormalMaterial();
    // Loop through all of the parsed paths
    //@ts-ignore
    svgData.paths.forEach((path, i) => {
      const shapes = path.toShapes(true);

      // Each path has array of shapes
      //@ts-ignore
      shapes.forEach((shape, j) => {
        // Finally we can take each shape and extrude it
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 20,
          bevelEnabled: false,
        });

        // Create a mesh and add it to the group
        const mesh = new THREE.Mesh(geometry, material);

        svgGroup.add(mesh);
      });
    });

    // Meshes we got are all relative to themselves
    // meaning they have position set to (0, 0, 0)
    // which makes centering them in the group easy

    // Get group's size
    const box = new THREE.Box3().setFromObject(svgGroup);
    const size = new THREE.Vector3();
    box.getSize(size);

    const yOffset = size.y / -1.6;
    const xOffset = size.x / -2;

    // Offset all of group's elements, to center them
    svgGroup.children.forEach((item) => {
      item.position.x = xOffset;
      item.position.y = yOffset;
    });

    // Finally we add svg group to the scene
    scene.add(svgGroup);

    function animate() {
      renderer.render(scene, camera);

      // Rotate out group
      svgGroup.rotation.y += 0.005;

      requestAnimationFrame(animate);
    }

    renderer.render(scene, camera);

    animate();

    //@ts-ignore
    document.getElementById("threed").ondragstart = (e) => {
      //@ts-ignore
      e.dataTransfer.setDragImage(new Image(), 0, 0);
      //@ts-ignore
      e.dataTransfer.effectAllowed = "copyMove";
    };
    //@ts-ignore
    document.getElementById("threed").ondragleave = (e) => {
      e.preventDefault();
    };

    //@ts-ignore
    document.getElementById("threed").ondrag = (e) => {
      const _mouseX = (e.clientX / innerWidth) * 2 - 1;
      const _mouseY = (e.clientY / innerHeight) * 2 - 1;
      console.log("2");

      svgGroup.rotation.y += _mouseX / 300;
      svgGroup.rotation.x += _mouseY / 300;
      e.preventDefault();
    };

    //@ts-ignore
    window.onmousemove = (event) => {
      requestAnimationFrame(() => renderer.render(scene, camera));

      /* svgGroup.rotation.y += _mouseX;
      svgGroup.rotation.x = _mouseY; */
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
    };
  }, []);

  return (
    <>
      <div id="threed" draggable={true} onDragOver={console.log} />
      <style jsx>{`
        #threed {
          height: 80px;
          cursor: grabbing;
        }
        #threed:active {
          cursor: grabbing;
        }
      `}</style>
    </>
  );
};

export default ThreeDModel;
