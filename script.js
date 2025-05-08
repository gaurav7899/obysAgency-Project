function loaderAnimation() {
  let t1 = gsap.timeline();
  t1.from(".line h1", {
    y: 150,
    stagger: 0.25, //show line by line
    duration: 0.6,
    delay: 0.5,
  });

  t1.from(".line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5timer = document.querySelector(".line1-part1 h5");
      let grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 30);
    },
  });
  t1.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  t1.to(".loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3,
  });

  t1.from(".page1", {
    y: 1500,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    ease: Power4,
  });
  t1.to(".loader", {
    display: "none",
  });
  // nav
  t1.from(".nav",{
    opacity:0,
  });
  // page 2 h1
  t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:0.2,
  });
}


// cursor
function cursorAnimation(){
  document.addEventListener("mousemove",function(dets){
    gsap.to(".crsr",{
      left:dets.x,
      top:dets.y,
    })
  })
  
  Shery.makeMagnet(".nav-part2 h4");
}
loaderAnimation();
cursorAnimation();