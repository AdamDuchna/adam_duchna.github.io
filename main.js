import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';

window.onscroll = function(){changeColor()}


function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

function changeColor(){
  var about = document.getElementById("about");
  var projects = document.getElementById("projects");
  var cv = document.getElementById("cv");
  var contact = document.getElementById("contact");
  var fillers = document.querySelectorAll(".filler");
  if( ( document.body.scrollTop || document.documentElement.scrollTop ) == 0)
    fillers.forEach(filler=>{filler.style.backgroundImage = "linear-gradient(#16db93,#16db93)"});
  if(isScrolledIntoView(about))
    fillers.forEach(filler=>{ filler.style.backgroundImage = "linear-gradient(#ffd500,#ffd500)"});
  if(isScrolledIntoView(projects))
    fillers.forEach(filler=>{ filler.style.backgroundImage =  "linear-gradient(#ea3546,#ea3546)"})
  if(isScrolledIntoView(cv))
    fillers.forEach(filler=>{ filler.style.backgroundImage =  "linear-gradient(#fb5607,#fb5607)"})
  if(isScrolledIntoView(contact))
    fillers.forEach(filler=>{ filler.style.backgroundImage =  "linear-gradient(#4c4cfc,#4c4cfc)"})
}

function moveCamera(){
  console.log(camera.position.x, camera.position.y )
  camera.position.x = Math.round(window.scrollY/window.innerHeight * 120)
  camera.position.y =  Math.round(window.scrollY/window.innerHeight * 120)
}


function parametricShuriken(){
  const points = [];
  for( var t=0; t<=1; t+=0.01){
    var x = 4*Math.PI + 4*Math.PI*(Math.cos(2*Math.PI*15*t) - Math.cos(2*Math.PI))
    var y = Math.cos(4*Math.PI) - 4*Math.PI*(Math.sin(2*Math.PI*40*t) - Math.sin(2*Math.PI))
    var z = 10*Math.sin(x)
    points.push( new THREE.Vector3(x,y,z))
  }
  const material = new THREE.LineBasicMaterial({color: 0xfb5607});
  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const line = new THREE.Line( geometry, material );
  line.scale.multiply( new THREE.Vector3(2,2,2))
  return line;
}
function parametricCircle(){
  const points = [];
for( var t=0; t<300; t+=0.1){
  var x = -35*Math.cos(t)+65*Math.cos(-0.35*t);
  var y = -35*Math.sin(t)+65*Math.sin(-0.35*t);
  var z = t/2;
  points.push( new THREE.Vector3(x,y,z))
}
const material = new THREE.LineBasicMaterial({color: 0xffd500});
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );
line.scale.multiply( new THREE.Vector3(0.2,0.2,0.2))
return line;
}

function calculateAttractor(posX,posY){
  const sigma=10;
  const beta=28;
  const rho=8/3;

  var x = posX;
  var y = posY;
  var z = Math.random();

  const points = [];

  for (var i = 0; i < 30000; i++) {
      const dt = 0.004;
      const dx = (sigma * (y - x)) * dt;
      const dy = (x * (beta - z) - y) * dt;
      const dz = (x * y - rho * z) * dt;
      
      x = x + dx;
      y = y + dy;
      z = z + dz;
  
      points.push( new THREE.Vector3(x -6,y-6,z))
  }

  const material = new THREE.LineBasicMaterial({color: 0x16db93});
  const geometry = new THREE.BufferGeometry().setFromPoints( points );
	geometry.setDrawRange( 0, 2 );
  const line = new THREE.Line( geometry, material );

  return line
}

function parametricCurve(){
const points = [];
for( var t=0; t<Math.PI*4; t+=0.01){
  var x = t - 1.6* Math.sin(24*t);
  var y = t - 1.6* Math.sin(25*t);
  var z = t/10
  points.push( new THREE.Vector3(x,y,z))
}
const material = new THREE.LineBasicMaterial({color: 0xea3546});
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );
line.scale.multiply( new THREE.Vector3(4.0,4.0,20.0))
return line;
}

function butteflyCurve(){
  const points = [];
  for(var t=0; t<Math.PI*4; t+=0.01){
    var x = Math.sin(t) * ((Math.exp(Math.cos(t))) - (2 * Math.cos(4 * t)) - (Math.pow(Math.sin(t / 12), 5)));
    var y = Math.cos(t) * ((Math.exp(Math.cos(t))) - (2 * Math.cos(4 * t)) - (Math.pow(Math.sin(t / 12), 5)));
    var z = Math.sign(x)*2*Math.sin(x)
    points.push(new THREE.Vector3(x,y,z))
  }
const material = new THREE.LineBasicMaterial({color: 0x4c4cfc});
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );
line.scale.multiply( new THREE.Vector3(4.0,4.0,4.0))
return line;
}

const MAX_POINTS = 30000;
var drawCount = 10;
var lines=[];
function animate() {
	requestAnimationFrame( animate );
  for( var j =0; j < lines.length; j++){
    lines[j].geometry.setDrawRange( drawCount-1, drawCount );
    lines[j].rotation.x += 0.001;
    lines[j].rotation.y += 0.001;
  }
  line5.rotation.y += 0.002;
  line6.rotation.x += 0.002;
  line6.rotation.z += 0.001;
  line7.rotation.x -= 0.001;
  line7.rotation.y -= 0.0005;
  line8.rotation.y += 0.01;
  line9.rotation.z += 0.005;
  line10.rotation.y += 0.005;
  line8.geometry.setDrawRange(0, drawCount)
  line9.geometry.setDrawRange(0, drawCount)
  window.addEventListener("scroll",moveCamera)
  window.addEventListener("resize",onWindowResize)
	drawCount = ( drawCount + 1 ) % MAX_POINTS;
  renderer.render(scene,camera)
}

function onWindowResize() {

  var width = window.innerWidth;
	var height = window.innerHeight;
  camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize( width, height );


}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#background')});

renderer.render(scene,camera);


const line = calculateAttractor(10,10);
const line2 = calculateAttractor(12,12);
const line3 = calculateAttractor(14,14);
const line4 = calculateAttractor(16,16);
const line5 = parametricCurve();
const line6 = parametricCurve();
const line7 = parametricCurve();
const line8 = butteflyCurve();
const line9= parametricCircle();
const line10 = parametricShuriken();
line9.position.set(260,240,20);
line5.position.set(490,480,20);
line6.position.set(480,460,10);
line7.position.set(520,490,10);
line10.position.set(750,720,20)
line8.position.set(975,960,20);


scene.add(line2);
scene.add(line);
scene.add(line3);
scene.add(line4);
scene.add(line5);
scene.add(line6);
scene.add(line7);
scene.add(line8);
scene.add(line9);
scene.add(line10);
line5.rotation.z = 0.35
line5.rotation.x = -0.6

lines.push(line,line2,line3,line4);

camera.position.x = 4;
camera.position.y = 4;
camera.position.z=40;

window.addEventListener( 'resize', onWindowResize );

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);

animate();