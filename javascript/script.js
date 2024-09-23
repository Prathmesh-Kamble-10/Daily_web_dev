
    flag=0;
        function clickable(){
            
            let t = document.getElementById("text");
            if(flag ==0){
            t.textContent="Hello Python";
            t.style.backgroundColor ="black";
            t.style.color="white";
            flag=1;
            }
            else{
                t.textContent="Hello JAVA Script";
                t.style.backgroundColor ="black";
                t.style.color="white";
                flag=0;
            }
        }
