window.addEventListener('DOMContentLoaded',function(){
    //bu ichiga yozilgan script codlar hamma html fayllarni ochib bo’gandan keyin ishlaydi    
    let close = document.getElementById('close-btn');
    let aside = document.getElementById('aside');
        close.addEventListener('click', ()=>{
            aside.style.display = 'none';
        })
     })
    