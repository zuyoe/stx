window.onload = function () {
    // ** FADE OUT FUNCTION **
    // fadeOut( element : document.querySelctor(대상) )
    function fadeOut(el) {
        // 대상.style.투명도 = 불투명
        el.style.opacity = 1;
        (function fade() {
            // 대상.style.투명도 -= 0.1 감소
            if ((el.style.opacity -= 0.1) < 0) {
                el.style.display = "none";
            } else {
                // 웹브라우저 프레임갱신
                requestAnimationFrame(fade);
            }
        })();
    }

    // ** FADE IN FUNCTION **
    // fadeIn( element : document.querySelctor(대상) )
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += 0.1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    // 모달창
    let body = document.querySelector("body");
    let modal = document.querySelector(".modal");
    modal.addEventListener("click", function () {
        // modal.style.display = "none";
        // fadeOut(modal);
        anime({
            targets: ".modal",
            delay: 200,
            duration: 500,
            opacity: 0,
            easing: "easeInOutQuad",
            complete: function () {
                modal.style.display = "none";
                body.classList.add("active");
            },
        });
    });
};
