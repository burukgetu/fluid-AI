import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {

    useEffect(() => {

        gsap.fromTo(
            "#card_1",
            { x: window.innerWidth <= 480 ? "-130%" : "0%", 
              y: window.innerWidth <= 480 ? "-110%" : "20%" },
            { x: window.innerWidth <= 480 ? "-25vw" : "50%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_2",
            { x: window.innerWidth <= 480 ? "140vw%" : "500%", 
              y: window.innerWidth <= 480 ? "-100%" : "70%" },
            { x: window.innerWidth <= 480 ? "85vw" : "330%",
                opacity: 1,
                duration: 1,
                // delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_3",
            { x: window.innerWidth <= 480 ? "200%" : "500%", 
              y: window.innerWidth <= 480 ? "30%" : "120%" },
            { x: window.innerWidth <= 480 ? "150%" : "380%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_4",
            { x: window.innerWidth <= 480 ? "350%" : "900%", 
              y: window.innerWidth <= 480 ? "1100%" : "850%" },
            { x: window.innerWidth <= 480 ? "200%" : "750%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_5",
            { x: window.innerWidth <= 480 ? "450%" : "1100%", 
              y: window.innerWidth <= 480 ? "1250%" : "990%" },
            { x: window.innerWidth <= 480 ? "200%" : "850%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_6",
            { x: window.innerWidth <= 480 ? "200%" : "550%", 
              y: window.innerWidth <= 480 ? "270%" : "210%" },
            { x: window.innerWidth <= 480 ? "110%" : "330%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
          
          gsap.fromTo(
            "#card_7",
            { x: window.innerWidth <= 480 ? "-200%" : "-145%", 
              y: window.innerWidth <= 480 ? "1500%" : "1150%" },
            { x: window.innerWidth <= 480 ? "40%" : "190%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
          
          gsap.fromTo(
            "#card_8",
            { x: window.innerWidth <= 480 ? "-200%" : "-100%", 
              y: window.innerWidth <= 480 ? "450%" : "330%" },
            { x: window.innerWidth <= 480 ? "-40%" : "45%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
          
          gsap.fromTo(
            "#card_9",
            { x: window.innerWidth <= 480 ? "-150%" : "-140%", 
              y: window.innerWidth <= 480 ? "300%" : "220%" },
            { x: window.innerWidth <= 480 ? "-50%" : "-20%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
          
          gsap.fromTo(
            "#card_10",
            { x: window.innerWidth <= 480 ? "-150%" : "-150%", 
              y: window.innerWidth <= 480 ? "200%" : "300%" },
            { x: window.innerWidth <= 480 ? "-100%" : "-80%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: window.innerWidth <= 480 ? "top 40%" : "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );

    },[])
  return (
    <div className="card-container relative z-20 scale-[0.3] md:scale-[0.7]">
        <img className="absolute" id="card_1" src="Card-1.svg" alt=""/>
        <img className="absolute" id="card_2" src="card-to-do.svg" alt=""/>
        <img className="absolute" id="card_3" src="Kite-Event.svg" alt=""/>
        <img className="absolute" id="card_4" src="book-flight.svg" alt=""/>
        <img className="absolute" id="card_5" src="trip-idea.svg" alt=""/>
        <img className="absolute" id="card_6" src="Reservation.svg" alt=""/>
        <img className="absolute" id="card_7" src="cafe.svg" alt=""/>
        <img className="absolute" id="card_8" src="new-tickets-card.svg" alt=""/>
        <img className="absolute" id="card_9" src="Kite-Event.svg" alt=""/>
        <img className="absolute" id="card_10" src="card-to-do.svg" alt=""/>
    </div>
  )
}

export default Cards