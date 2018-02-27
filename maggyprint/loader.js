window.addEventListener("load", function () {
    "use strict";
    
    var w = 600, h = 450;
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);
    var view = document.getElementById("view");
    view.appendChild(renderer.domElement);
    
    var camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
    camera.position.set(0, 0, 50);
    var controls = new THREE.TrackballControls(camera, view);
    
    var scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xffffff));
    

    var light1 = new THREE.DirectionalLight(0xffffff);
    light1.position.set(0, 100, 100);
    scene.add(light1);
    
    var light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(0, -100, -100);
    scene.add(light2);
    
    var mat = new THREE.MeshPhongMaterial({
        color: 0xffffff, ambient: 0x000000, specular: 0x030303,
    });



// change colors

    var get_green = document.getElementById("green");
    get_green.addEventListener("click", function(){
        mat.color.setHex( 0x168614 );
        //mat.specular.setHex( 0x030303 );
        mat.shininess = 30;
        mat.ambient.setHex( 0x000000 );
     }, false);

    var get_blue = document.getElementById("blue");
    get_blue.addEventListener("click", function(){
        mat.color.setHex( 0x0961E7 );
        //mat.specular.setHex( 0x030303 );
        mat.shininess = 30;
        mat.ambient.setHex( 0x000000 );
     }, false);

    var get_black = document.getElementById("black");
    get_black.addEventListener("click", function(){
        mat.color.setHex( 0x000000 );
        //mat.specular.setHex( 0x030303 );
        mat.shininess = 30;
        mat.ambient.setHex( 0x000000 );
     }, false);

    var get_white = document.getElementById("white");
    get_white.addEventListener("click", function(){
        mat.color.setHex( 0xffffff );
        //mat.specular.setHex( 0xdadada );
        mat.shininess = 30;
        mat.ambient.setHex( 0x373737 );
     }, false);

    var get_yellow = document.getElementById("yellow");
    get_yellow.addEventListener("click", function(){
        mat.color.setHex( 0xFBFB38 );
        //mat.specular.setHex( 0x030303 );
        mat.shininess = 30;
        mat.ambient.setHex( 0x000000 );
     }, false);

    var get_orange = document.getElementById("orange");
    get_orange.addEventListener("click", function(){
        mat.color.setHex( 0xFA6C25 );
        //mat.specular.setHex( 0x030303 );
        mat.shininess = 30;
        mat.ambient.setHex( 0x000000 );
     }, false);

    var get_purple = document.getElementById("purple");
    get_purple.addEventListener("click", function(){
        mat.color.setHex( 0x6625FA );
        //mat.specular.setHex( 0x030303 );
        mat.shininess = 30;
        mat.ambient.setHex( 0x000000 );
     }, false);

    var get_silver = document.getElementById("silver");
    get_silver.addEventListener("click", function(){
        mat.color.setHex( 0xdadada );
        //mat.specular.setHex( 0x030303 );
        mat.shininess = 200;
        mat.ambient.setHex( 0x000000 );
     }, false);
   
    var get_golden = document.getElementById("golden");
    get_golden.addEventListener("click", function(){
        mat.color.setHex( 0xFADA25 );
        //mat.specular.setHex( 0x030303 );
        mat.shininess = 200;
        mat.ambient.setHex( 0x000000 );
     }, false);











    var obj = new THREE.Mesh(new THREE.Geometry(), mat);
    scene.add(obj);
    
    var loop = function loop() {
        requestAnimationFrame(loop);
        //obj.rotation.z += 0.05;
        controls.update();
        renderer.clear();
        renderer.render(scene, camera);
    };
    loop();

    // file load
    var openFile = function (file) {
        var reader = new FileReader();
        reader.addEventListener("load", function (ev) {
            var buffer = ev.target.result;
            var geom = loadStl(buffer);
            scene.remove(obj);
            obj = new THREE.Mesh(geom, mat);
            scene.add(obj);
        }, false);
        reader.readAsArrayBuffer(file);
    };

    // file input button
    var input = document.getElementById("file");
    input.addEventListener("change", function (ev) {
        var file = ev.target.files[0];
        openFile(file);
    }, false);
    
    // dnd
    view.addEventListener("dragover", function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }, false);
    view.addEventListener("drop", function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        var file = ev.dataTransfer.files[0];
        openFile(file);
    }, false);
}, false);