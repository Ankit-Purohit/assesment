let body=document.getElementById("root");
//array is used for storing co-ordinate of points. 
let storingCordinate=[];
body.addEventListener('click',(e)=>{
    console.log(e);
    if(storingCordinate.length==0){
        storingCordinate.push({x:e.clientX,y:e.clientY});    
        createDote(e.clientX,e.clientY);
    }
    else if(storingCordinate.length==1){
        storingCordinate.push({x:e.clientX,y:e.clientY}); 
        createDote(e.clientX,e.clientY);
        createLine(storingCordinate[0].x,storingCordinate[0].y,storingCordinate[1].x,storingCordinate[1].y);
    }
    else if(storingCordinate.length==2){
        storingCordinate.push({x:e.clientX,y:e.clientY}); 
        createDote(e.clientX,e.clientY);
        createLine(storingCordinate[1].x,storingCordinate[1].y,storingCordinate[2].x,storingCordinate[2].y);
    }
    else if(storingCordinate.length==3){
        storingCordinate.push({x:e.clientX,y:e.clientY}); 
        createDote(e.clientX,e.clientY);
        createLine(storingCordinate[0].x,storingCordinate[0].y,storingCordinate[3].x,storingCordinate[3].y);
        createLine(storingCordinate[2].x,storingCordinate[2].y,storingCordinate[3].x,storingCordinate[3].y);
        storingCordinate=[];
    }
});
function createDote(x,y){
    let dot=document.createElement('div');
    dot.classList.add('dots');
    dot.style.left=`${x}px`;
    dot.style.top=`${y}px`;
    body.appendChild(dot);
}
function createLine(x1,y1,x2,y2){
    console.log(x1,y1,x2,y2);
    console.log(storingCordinate);
    //distance between two points
    let lineWidth = Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));
    //slope
    //tan(theta)=(y2-y2)/(x2-x1);
    //(theta)=atan((y2-y1)/(x2-x1));
    let slope=Math.atan(((y2-y1)/(x2-x1)));
    let line=document.createElement('div');
    line.classList.add('lines');
    line.style.width=`${lineWidth}px`;
    line.style.transform=`rotate(${slope}rad)`;
    let midX=(x1+x2)/2;
    let midY=(y1+y2)/2;
    line.style.left=`${midX-(lineWidth)/2}px`;
    line.style.top=`${midY}px`
    line.style.transform=`rotate(${slope}rad)`;
    body.appendChild(line);
}