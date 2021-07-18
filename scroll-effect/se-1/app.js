let container_y= document.getElementById('container-scroll-y');
let container_x= document.getElementById('container-scroll-x');

document.getElementById('switch-btn').onclick=function(){
    container_x.classList.toggle('d-none');
    container_y.classList.toggle('d-none');

    if(container_x.classList.contains('d-none')){
        this.innerText="Scroll Y";
        console.log('Scroll Y');
    }
    else{
        this.innerText="Scroll X";
        console.log('Scroll X');
    }
}