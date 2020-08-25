
//Slider


const main = () => {

    //Parámetros
    let slideIndex = 1;
    let interval = 6000;
    let timer = null;

    const initBullets = () => {
        const slides = document.querySelectorAll('.slide');
        const bulletWrapper = document.querySelector('.bullets_wrapper');
        for (let index = 1; index <= slides.length; index++) {
            let dot = document.createElement('span');
            const active = index === 1 ? 'active' : '';
            dot.innerHTML = '<a class="handleSlide" data-slide="' + index + '" href="#"><div class="bullet ' + active + '"></div></a>';
            bulletWrapper.append(dot)
        }
    }

    const changeSlide = slideActual => {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            if (slide.dataset.slide == slideActual) {
                slide.classList.add('active');
                slideIndex = slide.dataset.slide
            } else {
                slide.classList.remove('active');
            }
        });
    }

    const changleBullet = bulletActual => {
        const bulletsCircles = document.querySelectorAll('.bullet');
        bulletsCircles.forEach(circle => {
            if (circle.parentNode.dataset.slide == bulletActual) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    const moverSlide = () => {
        const slides = document.querySelectorAll('.slide');
        if (slideIndex >= slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        changeSlide(slideIndex);
        changleBullet(slideIndex)
    }

    const handleBulletsClick = () => {
        const bullets = document.querySelectorAll('.handleSlide');
        bullets.forEach(bullet => {
            bullet.addEventListener('click', (e) => {
                e.preventDefault();
                window.clearInterval(timer);
                timer = setInterval(() => moverSlide(), interval);
                changeSlide(bullet.dataset.slide)
                changleBullet(bullet.dataset.slide)
            })
        });
    }

    const sliderMain = () => {
        initBullets();
        changeSlide(slideIndex);
        timer = setInterval(() => moverSlide(), interval);
        handleBulletsClick();
    }

    sliderMain();

}

main();