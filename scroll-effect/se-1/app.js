

document.getElementById('switch-btn').onclick=function(){
    let container_y= document.getElementById('container-scroll-y');
    let container_x= document.getElementById('container-scroll-x');

    container_x.classList.toggle('d-none');
    container_y.classList.toggle('d-none');

    if(container_x.classList.contains('d-none')){
        this.innerText="Scrolling Y";
        console.log('Scrolling Y');
    }
    else{
        this.innerText="Scrolling X";
        console.log('Scrolling X');
    }
}