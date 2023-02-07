
/* Toggle */
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

/* Modal Open*/
document.querySelectorAll('.imgBx img').forEach(image =>{
    image.onclick = () =>{
          document.querySelector('.popup-image').style.display = 'block';
          document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

/* Close Modal */
document.querySelector('.popup-image span').onclick = () =>{
        document.querySelector('.popup-image').style.display = 'none';
}
