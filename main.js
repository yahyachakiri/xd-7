let header = document.querySelector(".header");

let circle = document.querySelector(".circle"); 

let left = document.querySelector(".left");

let info = document.querySelectorAll(".info"); 
let image = document.querySelectorAll(".image img");
let details = document.querySelectorAll(".details");
let content = document.querySelectorAll(".info .content");
let arrow = document.querySelector(".fi-rr-angle-small-left");
let holder = document.querySelector(".down .holder");
image2 = document.querySelector(".img2");
let down = document.querySelector(".down");



info.forEach((e) => {
    e.addEventListener("click", (el) => {
        image[0].style.transform = 'translateX(-58vw)';
        info.forEach((ele) => {
            ele.style.transform = 'translate(-50%, -120%)';
            ele.style.top = '50%';
            ele.style.left = '50%';
            ele.style.transition = '.3s ease-in';
            setTimeout(() => {
                ele.style.display = 'none';
            }, 200);
        });
        
        details.forEach((detail) => {
            detail.style.bottom = "-5%";
            setTimeout(() => {
                detail.style.opacity = 0;
            }, 100);
            setTimeout(() => {
                detail.style.display = 'none';
            }, 200);
        });
        content.forEach((con) => {
            con.style.display = 'none';
        });
        arrow.style.top = "-20px";
        arrow.style.visibility = "visible";
        const mediaQuery = window.matchMedia('(min-width: 1162px)');
        if (mediaQuery.matches) {
            left.style.transform = 'translateX(-70%)';
            setTimeout(() => {
                left.style.opacity = 0;
            }, 100);
            setTimeout(() => {
                left.style.visibility = 'hidden';
            }, 200);
        }

        
        holder.style.display = "block";
        setTimeout(() => {
            holder.style.opacity = 1;
        }, 300);
        down.style.overflow = 'hidden';
        setTimeout(() => {
            image2.style.bottom = '0vh';
        }, 10);
        down.style.display = 'block';
        setTimeout(() => {
            down.style.overflow = 'initial';
        }, 500);
    });
});

function resetAnimation() {
    for (i = 0; i < info.length; i++) {
        info[i].style.top = info[i].dataset.top;
        info[i].style.left = info[i].dataset.left;
    }
    info.forEach((el) => { 
        el.style.transform = 'translate(0,0)';
        el.style.display = 'block';
        content.forEach((con) => {
            con.style.display = 'block';
        });
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.opacity = 1;
        }, 400);
    })
    arrow.style.top = "30px";
    setTimeout(() => {
        arrow.style.visibility = "hidden";
    }, 250);
    left.style.visibility = 'visible';
    left.style.opacity = 1;
    left.style.transform = 'translateX(0)';
    setTimeout(() => {
        holder.style.display = "none";
    }, 300);
    holder.style.opacity = 0;
    down.style.overflow = 'hidden';
    image2.style.bottom = image2.dataset.bottom;
    setTimeout(() => {
        down.style.display = 'none';
    }, 500);
    image[0].style.transform = 'translateX(0)';
    // details.forEach((detail) => {
        details[0].style.bottom = "50px";
        setTimeout(() => {
            details[0].style.opacity = 1;
        }, 100);
        details[0].style.display = 'flex';
    // });
}

let logo = document.querySelector(".logo");

logo.addEventListener("click", (e) => {
    resetAnimation();
});

arrow.addEventListener("click", (e) => {
    resetAnimation();
});