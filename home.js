
var crsr=document.querySelector("#cursor")
 var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // dets variable name dryails
crsr.style.left=dets.x+"px"
crsr.style.top=dets.y+"px"
})

var crsr=document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
blur.style.left=dets.x+-250 + "px"
blur.style.top=dets.y+ -250 +"px"
})

gsap.to(".navbar"
,{ backgroundColor:"#000",
duration:0.5,
height:"110px",
delay:1,
scrollTrigger:{
    trigger:".navbar",
    scroller:"body",
    // markers:"true",
    start:"top -10%",
    end:"top -11%",
scrub:2,
}
    })
    // gsap.to("#main",{
    //     backgroundColor:"#000",
    //     scrollTrigger:{
    //         trigger:"#main",
    //         scroller:"body",
    //         start:"top 30%",
    //         end:"top -80%",
    //         scrub:2,
    //     }

    // })