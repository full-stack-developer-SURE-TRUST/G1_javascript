let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(c){
        const style = c.currentTarget.classList;
    
        if(style.contains("decrease")){
            count--;
        }else if (style.contains("increase")){
            count++;
        }else{
            count=0;
        }
        //  change the color of value
        if (count>0){
            value.style.color ="green";
        }else if (count < 0){
            value.style.color ="red"; 
        }else{
            value.style.color ="blue";
        }

        value.textContent = count;
    });
});

