function homePageAnimation() {
    gsap.set('.slide_marquee', { scale: 5 })

    var tm = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1

        },
    })

    tm.to('.video_div', {
        '--clip': '0%',
        ease: Power2,
    }, ('a'))
    tm.to('.slide_marquee', {
        scale: 1,
        ease: Power2,
    }, ('a'))
    tm.to('.lhs', {
        xPercent: 15,
        stagger: .03,
        ease: Power2,
    }, ('b'))
    tm.to('.rhs', {
        xPercent: -10,
        stagger: .03,
        ease: Power2,
    }, ('b'))
}

function realPageAnimation() {
    gsap.to('.slide', {
        scrollTrigger: {
            trigger: '.real',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 5
        },
        xPercent: -300,
        ease: Power4,

    })
}


function teamPageAnimation() {
    document.querySelectorAll('.team_list').forEach(elem => {

        elem.addEventListener('mousemove', function (dets) {
            gsap.to(this.querySelector('.picture'), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power4,
                duration: 0.5,
            })
        })
        elem.addEventListener('mouseenter', function (dets) {
            this.querySelector('.picture img')

            this.querySelector('.blue_layer').style.height = '100%'
            this.querySelector('.blue_layer').style.transition = 'ease .5s'
            this.querySelector('h2').style.color = 'white'
            this.querySelector('h3').style.color = 'white'
            this.querySelector('h1').style.opacity = '0.2'


        })
        elem.addEventListener('mouseleave', function (dets) {
            this.querySelector('.blue_layer').style.height = '0%'
            this.querySelector('.blue_layer').style.transition = 'ease .5s'
            this.querySelector('h2').style.color = 'black'
            this.querySelector('h3').style.color = 'black'

            gsap.to(this.querySelector('.picture'), {
                opacity: 0,
                ease: Power4,
                duration: 0.5,
            })
        })


    });
}

function paraOneAnimation() {
    let clutter = '';
    let paraText = document.querySelector('.para_text1')
    paraText.textContent.split("")
        .forEach(elem => {
            if (elem === "") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${elem}</span>`
        })
    paraText.innerHTML = clutter;
    gsap.set('.para_text1 span', { opacity: .1 })
    gsap.to('.para_text1 span', {
        scrollTrigger: {
            trigger: '.paragraph_part1',
            start: 'top 60%',
            end: 'bottom 90%',
            scrub: 1
        },
        color: '#2E4BEF',
        opacity: 1,
        stagger: .03,
        ease: Power4,
    })

}

function paraTwoAnimation() {
    let clutter = '';
    let paraText = document.querySelector('.para_text2')
    paraText.textContent.split("")
        .forEach(elem => {
            if (elem === "") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${elem}</span>`
        })
    paraText.innerHTML = clutter;
    gsap.set('.para_text2 span', { opacity: .1 })
    gsap.to('.para_text2 span', {
        scrollTrigger: {
            trigger: '.paragraph_part2',
            start: 'top 60%',
            end: 'bottom 90%',
            scrub: 1
        },
        color: '#74519B',
        opacity: 1,
        stagger: .03,
        ease: Power4,
    })

}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();

}

function capsuleAnimation() {
    gsap.to('.capsule2', {
        scrollTrigger: {
            trigger: '.capsules',
            start: 'top 70%',
            end: 'bottom bottom',
            scrub: 1
        },
        y: 0,
        ease: Power4

    })
}

function themeAnimation() {
    document.querySelectorAll('.section')
        .forEach(element => {
            console.log(element.dataset.color)
            ScrollTrigger.create({
                trigger: element,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: function () { document.body.setAttribute('theme', element.dataset.color) },
                onEnterBack: function () { document.body.setAttribute('theme', element.dataset.color) }
            })
        });
}

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault()
})

function footerAnimation() {
    gsap.to('.significo', {
        scrollTrigger: {
            trigger:'.footer_content',
            start:'top 15%',
            end:'bottom bottom',
            scrub:1
        },
        y: 0,
        ease: Power4
    })
}

loco()
homePageAnimation()
realPageAnimation()
teamPageAnimation()
paraOneAnimation()
paraTwoAnimation()
capsuleAnimation()
themeAnimation()
footerAnimation()
