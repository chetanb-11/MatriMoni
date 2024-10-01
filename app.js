const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelectorAll('.page-3 h2').forEach(item => {
    item.addEventListener('mouseover', function() {
        document.querySelector('.page-3').style.backgroundImage = this.getAttribute('data-bg');
    });

    item.addEventListener('mouseout', function() {
        document.querySelector('.page-3').style.backgroundImage = ''; // Set to default or empty
    });
});