const menu = document.querySelector('#menu');

const sidebar=document.querySelector('.bar');

menu.addEventListener('click',function(){

    sidebar.classList.toggle("show-sidebar");
} );
