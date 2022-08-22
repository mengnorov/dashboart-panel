window.addEventListener('DOMContentLoaded',function(){
    //bu ichiga yozilgan script codlar hamma html fayllarni ochib bo’gandan keyin ishlaydi    
    const sideMenu = document.querySelector('aside');
    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = this.document.querySelector('#close-btn');
    const themeToggler = this.document.querySelector('.theme-toggler')

    //show sidebar
    menuBtn.addEventListener('click', () =>{
        sideMenu.style.display = 'block';
    });


    //close sidebar
    closeBtn.addEventListener('click', () =>{
        sideMenu.style.display = 'none';
    })


    //change theme
    themeToggler.addEventListener('click',() => {
        this.document.body.classList.toggle('dark-theme-variables');
        document.body.style.backgroundColor = 'black'
    })
     })
    