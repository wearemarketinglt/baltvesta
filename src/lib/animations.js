import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function initializePreloader() {
    gsap.registerPlugin(ScrollTrigger);

    const topAnim = document.querySelector('.animatetopblock');
    const titleAnim = topAnim.querySelector('.title');
    const textAnim = topAnim.querySelector('.text');
    const imageAnim = topAnim.querySelector('.image-container-wrap');
    const videoAnim = imageAnim.querySelector('.image-container video');
    const videoBeforeAnim = imageAnim.querySelector('.image-container .before');
    const imageAnimImg = imageAnim.querySelector('.image-container-wrap img');
    const linesAnim = topAnim.querySelectorAll('.lines span');

    gsap.to(
        topAnim,
        {
            background: '#D8F1FC',
            duration: 0.5,
        }
    ).then(() => {
        // Animation for titleAnim after topAnim animation is complete
        gsap.to(
            titleAnim,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }
        );

        // Animation for textAnim after titleAnim animation is complete
        gsap.to(
            textAnim,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }, '-=0.25'
        );

        gsap.to(
            videoAnim,
            {
                opacity: 1,
                transform: 'translateY(0)',
            }, '-=0.25'
        )

        gsap.to(
            imageAnimImg,
            {
                opacity: 1,
                transform: 'translateX(-18.3%) translateY(36.6%)',
            }, '-=0.25'
        )
        gsap.to(
            videoBeforeAnim,
            {
                opacity: 1,
                transform: 'translateX(9.21%) translateY(9.5%)',
            }, '-=0.25'
        )
        linesAnim.forEach((line, index) => {
            gsap.to(
                line,
                {
                    transform: 'scaleY(1)',
                    duration: 0.8,
                    delay: index * 0.2,
                }
            );
        });
    });
}

export function initializePreloaderAbout() {
    gsap.registerPlugin(ScrollTrigger);

    const topAnim = document.querySelector('.animatetopblockabout');
    const titleAnim = topAnim.querySelector('h1');
    const textAnim = topAnim.querySelector('p');
    const imageAnim = topAnim.querySelector('.image img');
    const imageBeforeAnim = topAnim.querySelector('.image .before');
    const linesAnim = topAnim.querySelectorAll('.lines span');

    gsap.to(
        topAnim,
        {
            background: '#D8F1FC',
            duration: 0.5,
        }
    ).then(() => {
        // Animation for titleAnim after topAnim animation is complete
        gsap.to(
            titleAnim,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }
        );

        // Animation for textAnim after titleAnim animation is complete
        gsap.to(
            textAnim,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }, '-=0.25'
        );

        gsap.to(
            imageAnim,
            {
                opacity: 1,
                transform: 'translateY(0)',
            }, '-=0.25'
        )

        gsap.to(
            imageBeforeAnim,
            {
                opacity: 1,
                transform: 'translateX(-50%) translateY(-33px)',
            }   , '-=0'
        )
        // gsap.to(
        //     videoBeforeAnim,
        //     {
        //         opacity: 1,
        //         transform: 'translateX(9.21%) translateY(9.5%)',
        //     }, '-=0.25'
        // )
        linesAnim.forEach((line, index) => {
            gsap.to(
                line,
                {
                    transform: 'scaleY(1)',
                    duration: 0.8,
                    delay: index * 0.2,
                }
            );
        });
    });

}

export function initializeGsapTextScrollAnimation() {

    gsap.registerPlugin(ScrollTrigger);

    let trigger = document.querySelector('.sticky-container'); // Make sure to set this to the appropriate element

    const stickyElement = document.querySelectorAll('.sticky');
    stickyElement.forEach(value => {
        const elementHeight = value.offsetHeight;
        value.style.top = `calc(50% - ${elementHeight / 2}px)`;

        const subTitle = value.querySelector('.subtitle');
        gsap.fromTo(subTitle, {
                'will-change': 'opacity',
                opacity: 0
            },
            {
                ease: 'none',
                opacity: 1,
                scrollTrigger: {
                    trigger: trigger,
                    start: 'top center',
                    end: 'top+=10px center',
                    scrub: true,
                    markers: false
                }
            });
    });

    const fx16Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect16]')];

    fx16Titles.forEach(title => {
        const text = title.innerText;
        const words = text.split(' ');

        title.innerHTML = '';

        words.forEach((word, wordIndex) => {
            if (wordIndex > 0) {
                title.innerHTML += ' '; // Add space between words
            }

            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word'); // Add class "word" to the wordSpan
            wordSpan.style.display = 'inline-block';

            const chars = word.split('');
            chars.forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.classList.add('char'); // Add class "char" to the charSpan
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
            });

            title.appendChild(wordSpan);
        });

        gsap.fromTo(title.querySelectorAll('.char'), {
                'will-change': 'opacity',
                opacity: 0
            },
            {
                ease: 'none',
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: trigger,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                    markers: false
                }
            });
    });

};

export function initializeLeis() {
    const lenis = new Lenis({
        duration: 2,
        wheelMultiplier: 0.75,
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
};