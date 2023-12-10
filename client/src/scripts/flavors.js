window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let width;

window.onresize = function () {
    width = window.innerWidth;
}


/* header images event */

const header = document.querySelector('.flavors__header');
const blurred = document.querySelector('.blurr');

let initialPos = 0;

let backgroundPosition = 0;
let backgroundOpacity = 0;

window.addEventListener("scroll", () => {

    if (backgroundPosition == -273) {
        backgroundPosition = -273
    }
    if (backgroundPosition == 0) {
        backgroundPosition = 0
    } 

    let currentPos = document.documentElement.scrollTop;
    let scrolledDown = currentPos - initialPos >= 0

    if ( scrolledDown && backgroundPosition >= -275 ) {
        backgroundPosition -= 1.5;
    } else if ( !scrolledDown && backgroundPosition <= 0 ) {
        backgroundPosition += 1.5;
    }

    if ( scrolledDown && backgroundOpacity <= 10 ){
        backgroundOpacity += 0.3;
    } else if ( !scrolledDown && backgroundOpacity >= 0 ) {
        backgroundOpacity -= 0.3;
    }

    if ( currentPos == 0) {
        backgroundOpacity = 0;
        backgroundPosition == 0;
    } else if ( currentPos >= 550) {
        backgroundOpacity = 10;
    }


    header.style.backgroundPosition = `center ${backgroundPosition}px`
    blurred.style.backdropFilter = `blur(${backgroundOpacity}px)`

    initialPos = currentPos;

})


/* flavor card events */

const flavors = document.querySelectorAll(".flavor");

// flavors.forEach(flavor => {
//     flavor.addEventListener('mouseover', () => {
//         flavor.style.cursor = "pointer"
//         flavor.style.borderRadius = "0px"
//         flavor.style.transform = "scale(1.03)"
//     })

//     flavor.addEventListener('mouseout', () => {
//         flavor.style.borderRadius = "12px"
//         flavor.style.transform = "scale(1)"
//     })
// })

flavors.forEach(flavor => {
   flavor.addEventListener('click', () => {

    const flavorInfo = document.querySelector(`.flavor__info.${flavor.id.slice(0, -3)}`);
    const flavorInfoStyles = window.getComputedStyle(flavorInfo);

    if (flavorInfoStyles.display == "none") {
        flavorInfo.style.display = "block";
        flavorInfo.style.height = "500px";
        // if ( width >= 768) {
        //     flavorInfo.style.width = "95%";
        // } else if ( width >= 480 && width < 768 ){
        //     flavorInfo.style.width = "70%";
        // } else if ( width >= 0 && width < 480 ) {
        //     flavorInfo.style.width = "60%";
        // }
        flavor.style.borderRadius = "0px";
        flavor.style.transform = "scale(1.03)"
        flavor.style.boxShadow = "0px 1px 4px 0.2px rgba(0,0,0,0.40)"
        flavorInfo.style.animation = "openInfo 0.5s linear 0s 1";

    } else {

        setTimeout(() => {
            flavorInfo.style.display = "none";
            // flavor.style.borderRadius = "12px"
        }, 350)
        flavorInfo.style.height = "0px";
        flavor.style.transform = "scale(1)"
        flavor.style.boxShadow = "0.5px -0.5px 4px 0.5px rgba(0,0,0,0.40)"
        // flavorInfo.style.animation = "closeInfo 0.2s linear 0s 1";

    }

   }) 

    // flavor.addEventListener('mouseover', () => {
    //     flavor.style.cursor = "pointer"
    //     flavor.style.borderRadius = "0px"
    //     flavor.style.transform = "scale(1.03)"
    // })

    // flavor.addEventListener('mouseout', () => {
    //     flavor.style.borderRadius = "12px"
    // })
    }

);

$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});