let flag = 0;

function bulb(){
    let body = document.getElementById("body");
    if(flag==0){
        document.getElementById("text").textContent="Off";
        body.style.backgroundColor="yellow";
        flag = 1;
    }
    else{
        document.getElementById("text").textContent="On";
        body.style.backgroundColor="white";
        flag=0;
    }
}