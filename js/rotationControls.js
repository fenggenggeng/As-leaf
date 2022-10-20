/*
    鼠标移动控制模型旋转思想：
    当按下鼠标时及时当前鼠标的水平坐标clientX1，在鼠标移动的过程中不断触发onMouseMove事件，
    不停的记录鼠标的当前坐标clientX2，由当前坐标减去记录的上一个水平坐标，
    并且将当前的坐标赋给上一个坐标clientX1，计算两个坐标的之间的差clientX2-clientX1，
    将得到的差值除以一个常量（这个常量可以根据自己的需要调整），得到旋转的角度
*/
let mouseX, mouseY, mouseDown, rotationTime

function onMouseDown(event) {
  event.preventDefault();
  mouseDown = true;
  mouseX = event.clientX;//触发事件时的鼠标指针的水平坐标
  mouseY = event.clientY;//触发事件时的鼠标指针的水平坐标
  earthDom.addEventListener('mousemove', onMouseMove, false);

  isAutomaticRotation = false // 停止自转
  clearTimeout(rotationTime)
  rotationTime = null
}

function onMouseup(event) {
  mouseDown = false;

  earthDom.removeEventListener("mousemove", onMouseMove);

  if (!rotationTime) {
    rotationTime = setTimeout(() => {
      isAutomaticRotation = true
      clearTimeout(rotationTime)
      rotationTime = null
    }, 600);
  }

}

function onMouseMove(event) {
  if (!mouseDown) return

  let deltaX = event.clientX - mouseX;
  let deltaY = event.clientY - mouseY;

  mouseX = event.clientX;
  mouseY = event.clientY;

  rotateScene(deltaX, deltaY);
}

//设置模型旋转速度，可以根据自己的需要调整
function rotateScene(deltaX, deltaY) {
  //设置旋转方向和移动方向相反，所以加了个负号
  //deg 设置模型旋转的弧度
  let degX = deltaX / 270;
  let degY = deltaY / 270;

  earthBox.rotation.x += degY;
  earthBox.rotation.y += degX;
}