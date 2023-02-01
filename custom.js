document.querySelectorAll(".small-img").forEach((image) => {

image.addEventListener ('click', () => {
    
    var src = image.getAttribute('src');

    document.querySelector('.big-img').src = src;

});

});