let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/saileach.png') {
      myImage.setAttribute('src', 'images/saileach2.png');
    } else {
      myImage.setAttribute('src', 'images/saileach.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
  	setUserName ();
  } else {
  	localStorage.setItem('name', myName);
  	myHeading.textContent = '你的战术是现代的，构思却相当古老，' + myName + '，你到底是什么人';
  }
 }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '你的战术是现代的，构思却相当古老，' + storedName + '，你到底是什么人';
}

myButton.onclick = function() {
   setUserName();
}