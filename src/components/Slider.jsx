import { useState } from "react";


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  // Data for slides
  const slides = [
    {
      imgSrc: "slider-img-1.png",
      paragraph1:
        "Fluid has Internet access, so you can get up-to-date information from it.",
      paragraph2: "Time for work",
    },
    {
      imgSrc: "slider-img-2.png",
      paragraph1: 'You can use Fluid as an assistant to save time - and save your sanity.',
      paragraph2: "Time for family",
    },
    {
      imgSrc: "slider-img-3.png",
      paragraph1: "Fluid easily integrates with your friends' calendars",
      paragraph2: "Time for friends",
    },
  ];

  // Change to the next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Change to the previous slide
  const handleBack = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
        <div className="text-[8vw] w-[85%] sm:text-[3.3vw] sm:w-[50vw] ml-[2vw] py-4 leading-8 sm:leading-tight">
            Fluid AI was born out of a desire to simplify and streamline 
            modern life
        </div>

        <div className="relative h-[70vh] sm:h-screen lg:h-[120vh] overflow-hidden">
            <div className="h-[70vh] sm:h-screen lg:h-[120vh] w-full flex justify-center 
            items-center gap-[295px] sm:gap-[450px] lg:gap-[520px] absolute">
                <button className="bg-white p-2 z-20 sm:p-3 bg-opacity-20 rounded-full -scale-100 cursor-pointer"
                  onClick={handleBack}
                >
                    <img src="arrow-Icon-2.svg" alt=""/>
                </button>

                <button className="bg-white p-2 z-20 sm:p-3 bg-opacity-20 rounded-full" onClick={handleNext}>
                    <img className="" src="arrow-Icon-2.svg" alt=""/>
                </button>
            </div>

            <div className={`absolute h-full flex justify-center items-center z-10
                ${currentSlide === 2 ? "w-[65vw] sm:w-full md:pl-[5vw] lg:pl-0" : "w-[70vw] sm:w-[93vw] xl:w-[90vw] lg:w-[90%]"}`}>
                <div className="flex flex-col gap-40 sm:gap-60 lg:gap-72 sm:pt-4">
                    <p className="text-sm sm:text-lg w-40 sm:w-60 leading-tight">
                        {slides[currentSlide].paragraph1}
                    </p>
                    <p className="text-2xl sm:text-6xl">
                        {slides[currentSlide].paragraph2}
                    </p>
                </div>
            </div>

            <div className="w-full h-[70vh] sm:h-screen lg:h-[120vh]">
                <img
                    className="w-full h-full object-cover"
                    src={slides[currentSlide].imgSrc}
                    alt="Slider"
                />
            </div>
        </div>
    </div>
  )
}

export default Slider