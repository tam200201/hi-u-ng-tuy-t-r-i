//khởi tạo biến cần dùng
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var container;
var particle;
var camera;
var scene;
var renderer;
var mouseX = 0;
var mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var particle = [];
var particleImage = new Image();
particleImage.src = "image/snow.png";

function snowEffectBind() {
  container = $(".snowEffect");

  camera = new THREE.PerspectveCamera(
    75,
    SCREEN_WIDTH / SCREEN_HEIGHT,
    1,
    10000
  );
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.add(camera);
  renderer = new THREE.CanvasRenderer();
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
}
