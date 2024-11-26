import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Logo = () => {

  useEffect(() => {
    gsap.to(".logo", {
      y: window.innerWidth <= 480 ? 250 : 430,
      scale: window.innerWidth <= 480 ? 0.3 : 0.15,
      scrollTrigger: {
        trigger: ".container", 
        start: "top top", 
        end: "bottom center",
        scrub: 9,
      },
    })

    ScrollTrigger.create({
      trigger: ".container", // Element to trigger the scroll
      start: "top top", // When the top of .container reaches the top of the viewport
      onEnter: () => { // Trigger when the element enters the viewport
        gsap.to(window, {
          scrollTo: { y: "+=450" }, // Scroll down by 200px (adjust as needed)
          duration: 4, // Scroll duration
          ease: "power2.out", // Smooth easing for the scroll
        });
      },
    });
  },[])

  return (
    <div className="container border-blue-600 flex justify-center items-center h-screen w-full">
        <img className="logo z-20 w-[70vw]" src="/logo-1.svg"/>
    </div>
  )
}

export default Logo