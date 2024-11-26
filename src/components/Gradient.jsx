import { useEffect } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Cards from "./Cards";

gsap.registerPlugin(ScrollTrigger)

const Gradient = () => {

  useEffect(() => {
    gsap.to(".unlock", {
      y: window.innerWidth <= 480 ? -100 : -200,
      x: window.innerWidth <= 780 ? 0 : -20,
      scrollTrigger: {
        trigger: ".grad-container", // Trigger animation on scroll
        start: "top 50%", // When the top of .grad-container hits the middle of the viewport
        // end: "bottom top", // Stop when the bottom of .grad-container hits the top of the viewport
        // scrub: 1, // Makes the animation follow the scroll
        once: true
      },
    });
  },[])

  return (
    <div className="grad-container scale-[2] md:scale-[1.3]">
        <div className="h-full overflow-hidden">
            <div className="unlock absolute w-full z-20 h-full flex items-center justify-center">
                <p className="absolute text-3xl  md:text-6xl w-[40vw] text-center">Unlock Seamless Efficiency</p>
                <button className="mt-48 md:mt-56 bg-white text-xs md:text-sm text-black py-2 md:py-3 px-5 md:px-8 rounded-full shadow-[0_0_15px_2px_rgba(255,255,255,0.7)] hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out">
                    Join waitlist
                </button>
            </div>
        </div>
            <Cards/>
            <img className="scale-[1.5] md:scale-[1] translate-x-16 -z-10" src="/the-gradient.png" alt="" />
    </div>
  )
}

export default Gradient