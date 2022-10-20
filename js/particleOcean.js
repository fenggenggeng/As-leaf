const particleOceanStart = () => {
  const stats = new Stats()
  stats.showPanel(1) // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.dom)

  const SEPARATION = 20; const AMOUNTX = 50; const AMOUNTY = 50
  let container
  let camera, scene, renderer
  let particles; let particle; let count = 0
  let mouseX2 = 0
  let mouseY2 = 0
  let windowHalfX
  let windowHalfY

  const init = () => {
    container = document.getElementById("particleOcean")

    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 10000)
    camera.position.z = 100
    camera.position.y = 60
    camera.position.x = 10

    scene = new THREE.Scene()

    particles = []
    const PI2 = Math.PI * 1

    const material = new THREE.SpriteMaterial({
      color: '#B6CBFF',
      depthWrite: false,
      map: new THREE.CanvasTexture(sprite),
      transparent: true,
      // opacity: 0.7,
      blending: THREE.AdditiveBlending
    })

    let i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        particle = particles[i++] = new THREE.Sprite(material)
        particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2)
        particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2)
        scene.add(particle)
      }
    }
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    // 设置透明度
    renderer.setClearAlpha(0)
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)
    windowHalfX = container.clientWidth / 2
    windowHalfY = container.clientHeight / 2

    container.addEventListener('mousemove', onDocumentMouseMove, false)
    container.addEventListener('touchstart', onDocumentTouchStart, false)
    container.addEventListener('touchmove', onDocumentTouchMove, false)
    window.addEventListener('resize', onWindowResize, false)
  }
  // 创建精灵
  const generateSprite = (color) => {
    let canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    let context = canvas.getContext('2d');
    let gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
    gradient.addColorStop(0, 'rgba(' + color + ',1)');
    gradient.addColorStop(0.4, 'rgba(' + color + ',1)');
    gradient.addColorStop(0.4, 'rgba(' + color + ',1)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas;
  };
  let sprite = generateSprite('182, 203, 255') // 存储精灵材质

  const onWindowResize = () => {
    windowHalfX = container.clientWidth / 2
    windowHalfY = container.clientHeight / 2
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  }
  let xx = 0
  const onDocumentMouseMove = (event) => {
    mouseX2 = event.clientX - windowHalfX
    mouseY2 = event.clientY - windowHalfY
    xx = mouseX2 / 270;
  }

  const onDocumentTouchStart = (event) => {
    if (event.touches.length === 1) {
      event.preventDefault()
      mouseX2 = event.touches[0].pageX - windowHalfX
      mouseY2 = event.touches[0].pageY - windowHalfY
    }
  }

  const onDocumentTouchMove = (event) => {
    if (event.touches.length === 1) {
      event.preventDefault()
      mouseX2 = event.touches[0].pageX - windowHalfX
      mouseY2 = event.touches[0].pageY - windowHalfY
    }
  }

  const animate = () => {
    stats.begin()
    stats.end()
    requestAnimationFrame(animate)
    render()
  }

  const render = () => {

    camera.position.x += (mouseX2 * 0.1 - camera.position.x) * 0.05
    // console.log(xx);
    // camera.position.x += xx
    // camera.position.y = (-mouseY2 * 0.01 - camera.position.y) * 0.05
    camera.lookAt(scene.position)

    let i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        particle = particles[i++]
        particle.position.y = (Math.sin((ix + count) * 0.3) * 4) + (Math.sin((iy + count) * 0.5) * 4)
        particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 2) * 2 + (Math.sin((iy + count) * 0.5) + 2) * 2
      }
    }

    renderer.render(scene, camera)
    count += 0.1
  }

  // 初始化
  init()
  animate()
}