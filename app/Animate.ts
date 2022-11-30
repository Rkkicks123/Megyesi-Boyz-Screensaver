//Imports:

import {drawRect,drawRect2,drawRect3,drawRect4,drawRect5,drawRect6} from './pictures'



//Structure:

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
let imageElement = document.querySelector('#roku');


//Assigning Variables:

let x= 50;
  
let y= 0;

let axis= 1200;
  
let height= -100;

let ax= 600;
  
let ht= 0;

let a= 1000;
  
let h= -100;

let b = 200;

let c= 0;

let d = 800;

let e= -100;

//Animate:
export function animate (){
  
//Stop from going forever:
  if (x>canvas.width) {
    x=0;
  };

  if (y>canvas.height) {
     y=0;
  };
  if (axis>canvas.width) {
    axis=0;
  };

  if (height>canvas.height) {
     height=0;
  };
  if (ax>canvas.width) {
    ax=0;
  };

  if (ht>canvas.height) {
     ht=0;
  };
  if (a>canvas.width) {
    a=0;
  };
    if (h>canvas.height) {
    h=0;
  };

  if (b>canvas.width) {
     b=0;
  };
  if (c>canvas.height) {
     c=0;
  };

   if (d>canvas.width) {
     d=0;
  };
  if (e>canvas.height) {
     e=0;
  };
  
  //Speed:
  x=x+0
  y=y+0.5
  axis=axis+0
  height=height+0.7
  ax=ax+0
  ht=ht+0.8
  a=a+0
  h=h+0.9
  b=b+0
  c=c+0.6
  d=d+0
  e=e+0.5

  //draing part:
  
  ctx.clearRect(0,0,canvas.width,canvas.height)
  //ctx.rotate(Math.PI*42/180)
  drawRect(x,y);
  drawRect2(axis,height);
  drawRect3(ax,ht);
  drawRect4(a,h);
  drawRect5(b,c);
  drawRect6(d,e);
  window.requestAnimationFrame(animate)
  

};










//let background = HTMLCanvasElement
//function changeBackground(element, hexcode){
 // element.style.backgroundColor = hexcode;
//}
//window.setInterval(changeBackground(background,'#dd0300'), 2000)