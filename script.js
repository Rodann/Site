window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.back-to-top');
    scroll.classList.toggle("active", window.scrollY > 1300)
})
