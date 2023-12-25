function setup() {
  createCanvas(windowWidth, windowHeight);
  vecX=[];
  vecY = [];
  lineX = [];
  lineY = [];
  vecXpos = 0;
  vecYpos = 0;
  

}

function draw() {
  background(0);
  
  stroke(200,130,12)
  strokeWeight(5)

  if(vecXpos!=0 && vecYpos!=0 && lineX.length > 1){
    line(windowWidth/2,windowHeight/2, vecXpos, vecYpos); 
    fill(255)
    noStroke()
    let resultant = sqrt(pow(windowWidth/2-vecXpos,2)+pow(windowHeight/2-vecYpos,2))
    text('Resultant = ' + (round(resultant/50,1)).toString()+' Newton(s)',10,40) 
  }
  else {
  fill(255);
  noStroke();
  text('Resultant = Create two vectors first!' ,10,40);
  }
  
  for (let i = 0; i<lineX.length;i++){
    stroke(25,255,30);
    strokeWeight(2);
    line(windowWidth/2,windowHeight/2,lineX[i], lineY[i])
    strokeWeight(3);
    point(lineX[i], lineY[i]);
  }
  stroke("white")
  strokeWeight(5)
  point(windowWidth/2,windowHeight/2);
  stroke(255,0,0);
  fill(255,0,0)
  strokeWeight(10);
  
  rect(windowWidth-100,windowHeight-100,80,80)
  noStroke()
  fill(0)
  textSize(22)
  text('Refresh',windowWidth-95,windowHeight-50)
  
  // result = new Resultant(vecXpos, vecYpos);
  // result.draw();
}

function mouseClicked(){
  stroke("white");
  strokeWeight(5);
  append(vecX, mouseX-windowWidth/2);
  append(vecY, mouseY-windowHeight/2);
  vecXpos = +arraysum(vecX)+windowWidth/2;
  vecYpos = arraysum(vecY)+windowHeight/2;
  // line(windowWidth/2,windowHeight/2, vecXpos, vecYpos);
  // // stroke(random(255),random(255),random(255));
  // strokeWeight(2);
  // line(windowWidth/2,windowHeight/2,mouseX, mouseY);
  append(lineX, mouseX)
  append(lineY, mouseY)
  // strokeWeight(3);
  // point(mouseX,mouseY)
  console.log(vecXpos);
  console.log(vecYpos)
  // refresh();
    if((mouseX>windowWidth-100 && mouseX<windowWidth-20) && (mouseY > windowHeight - 100 && mouseY<windowHeight-20) ){
    clear();
    clearStorage();
    createCanvas(windowWidth, windowHeight);
    background(0);
    vecX=[];
    vecY = [];
    lineX = [];
    lineY = [];
    vecXpos = 0;
    vecYpos = 0;  
    }
  return false;
}

function arraysum(arr){
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  console.log(sum);
  return sum;
}

// function refresh(){
//   if((mouseX>windowWidth-100 && mouseX<windowWidth-20) && (mouseY > windowHeight - 100 && mouseY<windowHeight-20) ){
//     clear();
//     clearStorage();
//     createCanvas(windowWidth, windowHeight);
//     background(0);
//     vecX=[];
//     vecY = [];
//     let vecXpos = 0;
//     let vecYpos = 0;
//   }
// }
