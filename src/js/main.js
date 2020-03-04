let navHeaderBtn = Array.from(document.getElementsByClassName("nav_head"));
let navNumbersBtn = Array.from(document.getElementsByClassName("head_p"));
let sectionBoxes = Array.from(document.getElementsByClassName("section_box"));
let countSlide = 0;


for (let i = 0; i < navHeaderBtn.length; i++) {
    navHeaderBtn[i].setAttribute("data-number_btn", i);
    sectionBoxes[i].setAttribute("data-number_section", i);
    navHeaderBtn[i].style.animationDelay = i / 15 + "s";
    navNumbersBtn[i].style.animationDelay = i / 10 + 0.5 + "s"
}


setTimeout(function () {
    sectionBoxes[0].classList.add("section_active");
}, 300);
setTimeout(function () {
    navHeaderBtn[0].classList.add("activeEl");
}, 1000);


////  game cards  ////
function cards_item_first(countSlide) {
    let cards = Array.from(document.getElementsByClassName("card"));
    let countDelay = 1.1;

    if (countSlide == 0){
        cards.map((el)=>{
            el.style.transitionDelay = countDelay+"s";
            countDelay = countDelay - 0.1;
            // el.classList.add("deactiveCards");
            el.classList.add("activeCards");
            el.style.bottom = -15+"px";

            el.addEventListener("mouseover", function () {
                el.style.transitionDelay = 0+"s";
                el.style.bottom = 15+"px"
            });
            el.addEventListener("mouseout", function () {
                el.style.transitionDelay = 0+"s";
                el.style.bottom = -15+"px"
            })
        })
    } else if (countSlide != 0){
        cards.map((el)=>{
            el.style.transitionDelay = 0+"s";
            el.classList.remove("activeCards");
            el.classList.add("deactiveCards");
            el.style.bottom = 170+"px"

        })
    }


}

cards_item_first(countSlide);


function activeElements() {
    for (let i = 0; i < navHeaderBtn.length; i++) {
        navHeaderBtn[i].classList.remove("activeEl");
        sectionBoxes[i].classList.remove("section_active");
        navHeaderBtn[countSlide].classList.add("activeEl");
        sectionBoxes[countSlide].classList.add("section_active");
    }
}


function changeSlideOnClick() {
    navHeaderBtn.map((el) => {
        el.addEventListener("mouseover", function () {
            countSlide = +el.dataset.number_btn;
            activeElements();
            cards_item_first(countSlide)
        });
    });
}


function chahgeOnWheel() {
    document.onwheel = function (e) {
        let speed = e.deltaY;
        (speed > 0) ? countSlide = countSlide + 1 : countSlide = countSlide;
        (speed < 0) ? countSlide = countSlide - 1 : countSlide = countSlide;
        (countSlide >= navHeaderBtn.length) ? countSlide = 0 : countSlide = countSlide;
        (countSlide == -1) ? countSlide = navHeaderBtn.length - 1 : countSlide = countSlide;
        activeElements();
        cards_item_first(countSlide);
    };
}

changeSlideOnClick();
chahgeOnWheel();

