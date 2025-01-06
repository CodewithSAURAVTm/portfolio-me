const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    })

    sr.reveal('.home-content')
    sr.reveal('.home-img',{delay:200})
    sr.reveal('.about-content',{origin:'right'})
    sr.reveal('.about-img',{origin:'left'})
    sr.reveal('.project',{origin:'left'})
    sr.reveal('.education',{origin:'right'})
    sr.reveal('.services',{interval:200})
    sr.reveal('.contact',{interval:200})