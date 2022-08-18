const divScreen = document.querySelector("#screen");
const btnCreateNumber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");

let n = 0;
let queue = [];
btnCreateNumber.onclick = () => {
  n += 1;
  queue.push(n); //入队
  spanNewNumber.innerText = n; //实现 取号后显示在当前号码的span里
  //   spanQueue.innerText = queue.toString();//这个方法也是可以的
  //   因为queue是个数组，所以需要序列化
  spanQueue.innerText = JSON.stringify(queue);
};
btnCallNumber.onclick = () => {
  let m = queue.shift(); //出队
  if (m === undefined) {
    alert("没有号了");
    return;
  }
  divScreen.innerText = `请${m}号就餐`;
  spanQueue.innerText = JSON.stringify(queue); //更新队列
};
