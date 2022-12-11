const div = document.querySelector("div");
const day = new Date().getDay();

if(day == 5){
    div.setAttribute('class', 'alert');  
}else{
    div.style.display = 'none';
}