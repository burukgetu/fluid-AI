import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {

    useEffect(() => {

        gsap.fromTo(
            "#card_1",
            { x: "-110%", y: "20%" },
            { x: "50%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_2",
            { x: "500%", y: "70%" },
            { x: "330%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_3",
            { x: "500%", y: "120%" },
            { x: "380%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_4",
            { x: "900%", y: "850%" },
            { x: "750%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_5",
            { x: "1100%", y: "990%" },
            { x: "850%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
        
          gsap.fromTo(
            "#card_6",
            { x: "550%", y: "210%" },
            { x: "330%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
          
          gsap.fromTo(
            "#card_7",
            { x: "-145%", y: "1150%" },
            { x: "190%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
          
          gsap.fromTo(
            "#card_8",
            { x: "-100%", y: "330%" },
            { x: "45%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
          
          gsap.fromTo(
            "#card_9",
            { x: "-140%", y: "220%" },
            { x: "-20%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
                  toggleActions: "play none none none"
                } 
            }
          );
          
          gsap.fromTo(
            "#card_10",
            { x: "-150%", y: "300%" },
            { x: "-80%",
                opacity: 1,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                  trigger: ".card-container",
                  start: "top 15%",
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