/* milk */

const milkSlides = document.querySelectorAll(".process__contentText.milk")
const milkBackward = document.querySelector(".process__contentBackward.milk")
const milkForward = document.querySelector(".process__contentForward.milk")

const milkDotContainer = document.querySelector(".process__contentDotContainer.milk")
const milkDots = milkDotContainer.children

let milkSlideIndex = 0;

milkBackward.addEventListener("click", () => {
    
    if (milkSlideIndex > 0) { 
        milkShowSlide(milkSlideIndex - 1)
    } else if (milkSlideIndex == ( 0 )) {
        milkShowSlide( milkSlides.length - 1 )
    }

})

milkForward.addEventListener("click", () => {
    if (milkSlideIndex < (milkSlides.length - 1)) { 
        milkShowSlide(milkSlideIndex + 1)
    } else if (milkSlideIndex == ( milkSlides.length - 1)) {
        milkShowSlide(0)
    }
})

function milkShowSlide(n) {

    milkDots[milkSlideIndex].classList.remove("active");
    milkSlides[milkSlideIndex].classList.replace("displayFlex", "displayNone")

    milkSlideIndex = n

    milkDots[milkSlideIndex].classList.add("active");
    milkSlides[milkSlideIndex].classList.replace("displayNone", "displayFlex")

}

/* environment */

const environmentSlides = document.querySelectorAll(".process__contentText.environment")
const environmentBackward = document.querySelector(".process__contentBackward.environment")
const environmentForward = document.querySelector(".process__contentForward.environment")

const environmentDotContainer = document.querySelector(".process__contentDotContainer.environment")
const environmentDots = environmentDotContainer.children

let environmentSlideIndex = 0;

environmentBackward.addEventListener("click", () => {
    
    if (environmentSlideIndex > 0) { 
        environmentShowSlide(environmentSlideIndex - 1)
    } else if (environmentSlideIndex == ( 0 )) {
        environmentShowSlide( environmentSlides.length - 1 )
    }

})

environmentForward.addEventListener("click", () => {
    if (environmentSlideIndex < (environmentSlides.length - 1)) { 
        environmentShowSlide(environmentSlideIndex + 1)
    } else if (environmentSlideIndex == ( environmentSlides.length - 1)) {
        environmentShowSlide(0)
    }
})

function environmentShowSlide(n) {

    environmentDots[environmentSlideIndex].classList.remove("active");
    environmentSlides[environmentSlideIndex].classList.replace("displayFlex", "displayNone")

    environmentSlideIndex = n

    environmentDots[environmentSlideIndex].classList.add("active");
    environmentSlides[environmentSlideIndex].classList.replace("displayNone", "displayFlex")

}

/* ingredients */

const ingredientsSlides = document.querySelectorAll(".process__contentText.ingredients")
const ingredientsBackward = document.querySelector(".process__contentBackward.ingredients")
const ingredientsForward = document.querySelector(".process__contentForward.ingredients")

const ingredientsDotContainer = document.querySelector(".process__contentDotContainer.ingredients")
const ingredientsDots = ingredientsDotContainer.children

let ingredientsSlideIndex = 0;

ingredientsBackward.addEventListener("click", () => {
    
    if (ingredientsSlideIndex > 0) { 
        ingredientsShowSlide(ingredientsSlideIndex - 1)
    } else if (ingredientsSlideIndexSlideIndex == ( 0 )) {
        ingredientsShowSlide( ingredientsSlides.length - 1 )
    }

})

ingredientsForward.addEventListener("click", () => {
    if (ingredientsSlideIndex < (ingredientsSlides.length - 1)) { 
        ingredientsShowSlide(ingredientsSlideIndex + 1)
    } else if (ingredientsSlideIndex == ( ingredientsSlides.length - 1)) {
        ingredientsShowSlide(0)
    }
})

function ingredientsShowSlide(n) {

    ingredientsDots[ingredientsSlideIndex].classList.remove("active");
    ingredientsSlides[ingredientsSlideIndex].classList.replace("displayFlex", "displayNone")

    ingredientsSlideIndex = n

    ingredientsDots[ingredientsSlideIndex].classList.add("active");
    ingredientsSlides[ingredientsSlideIndex].classList.replace("displayNone", "displayFlex")

}

/* ice */

const iceSlides = document.querySelectorAll(".process__contentText.ice")
const iceBackward = document.querySelector(".process__contentBackward.ice")
const iceForward = document.querySelector(".process__contentForward.ice")

const iceDotContainer = document.querySelector(".process__contentDotContainer.ice")
const iceDots = iceDotContainer.children

let iceSlideIndex = 0;

iceBackward.addEventListener("click", () => {
    
    if (iceSlideIndex > 0) { 
        iceShowSlide(iceSlideIndex - 1)
    } else if (iceSlideIndex == ( 0 )) {
        iceShowSlide( iceSlides.length - 1 )
    }

})

iceForward.addEventListener("click", () => {
    if (iceSlideIndex < (iceSlides.length - 1)) { 
        iceShowSlide(iceSlideIndex + 1)
    } else if (iceSlideIndex == ( iceSlides.length - 1)) {
        iceShowSlide(0)
    }
})

function iceShowSlide(n) {

    iceDots[iceSlideIndex].classList.remove("active");
    iceSlides[iceSlideIndex].classList.replace("displayFlex", "displayNone")

    iceSlideIndex = n

    iceDots[iceSlideIndex].classList.add("active");
    iceSlides[iceSlideIndex].classList.replace("displayNone", "displayFlex")

}

/* local */

const localSlides = document.querySelectorAll(".process__contentText.local")
const localBackward = document.querySelector(".process__contentBackward.local")
const localForward = document.querySelector(".process__contentForward.local")

const localDotContainer = document.querySelector(".process__contentDotContainer.local")
const localDots = localDotContainer.children

let localSlideIndex = 0;

localBackward.addEventListener("click", () => {
    
    if (localSlideIndex > 0) { 
        localShowSlide(localSlideIndex - 1)
    } else if (localSlideIndex == ( 0 )) {
        localShowSlide( localSlides.length - 1 )
    }

})

localForward.addEventListener("click", () => {
    if (localSlideIndex < (localSlides.length - 1)) { 
        localShowSlide(localSlideIndex + 1)
    } else if (localSlideIndex == ( localSlides.length - 1)) {
        localShowSlide(0)
    }
})

function localShowSlide(n) {

    localDots[localSlideIndex].classList.remove("active");
    localSlides[localSlideIndex].classList.replace("displayFlex", "displayNone")

    localSlideIndex = n

    localDots[localSlideIndex].classList.add("active");
    localSlides[localSlideIndex].classList.replace("displayNone", "displayFlex")

}

/* cones */

const conesSlides = document.querySelectorAll(".process__contentText.cones")
const conesBackward = document.querySelector(".process__contentBackward.cones")
const conesForward = document.querySelector(".process__contentForward.cones")

const conesDotContainer = document.querySelector(".process__contentDotContainer.cones")
const conesDots = conesDotContainer.children

let conesSlideIndex = 0;

conesBackward.addEventListener("click", () => {
    
    if (conesSlideIndex > 0) { 
        conesShowSlide(conesSlideIndex - 1)
    } else if (conesSlideIndex == ( 0 )) {
        conesShowSlide( conesSlides.length - 1 )
    }

})

conesForward.addEventListener("click", () => {
    if (conesSlideIndex < (conesSlides.length - 1)) { 
        conesShowSlide(conesSlideIndex + 1)
    } else if (conesSlideIndex == ( conesSlides.length - 1)) {
        conesShowSlide(0)
    }
})

function conesShowSlide(n) {

    conesDots[conesSlideIndex].classList.remove("active");
    conesSlides[conesSlideIndex].classList.replace("displayFlex", "displayNone")

    conesSlideIndex = n

    conesDots[conesSlideIndex].classList.add("active");
    conesSlides[conesSlideIndex].classList.replace("displayNone", "displayFlex")

}

$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});