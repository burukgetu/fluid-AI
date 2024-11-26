

const IphoneBodyFour = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-8 sm:gap-0 sm:flex-row-reverse justify-between px-16">
        <div className="w-[85vw] items-center sm:w-[30%] flex flex-col sm:pt-[5vw] md:pt-[10vw] lg:pt-[15vw] justify-between 
         md:gap-[5vw] gap-3">
            <div className="flex flex-col gap-4 sm:gap-6">
                <h1 className="text-[6.5vw] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-start
                leading-[1] sm:leading-tight md:leading-tight lg:leading-8">
                    Fluid AI: Simplify, Organize, and Achieve More
                </h1>

                <p className="sm:text-[1.5vw] text-center sm:text-start opacity-50">
                In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.
                </p>
            </div>

            <p className="w-full opacity-50 text-lg sm:text-sm lg:text-xl text-center sm:text-start">
                4/4
            </p>
        </div>

        <div className="sm:w-[28%] relative">
            <img 
                className="absolute w-full z-0 rounded-[50px] rounded-br-[150px]"
                src="speaking-fluid-bg-1.svg"
                draggable="false"
            />
            <img 
                className="absolute w-full bottom-0 z-20"
                src="home-icon.png"
            />
            <div className="absolute w-full h-full z-10 overflow-x-hidden overflow-y-visible scrollbar-hidden">
                <img
                    className="mt-2 w-[98%] rounded-lg"
                    src="Explore.png"
                    // draggable="false"
                />
            </div>
            <img
                className="absolute translate-y-24 z-0 scale-x-[1.02]"
                id="iphone-button" 
                src="/iphone-buttons.svg" 
                draggable="false"
            />
            <img
                className="absolute z-20"
                src="iPhone-Body-1.svg"
                draggable="false"
            />
            <img
                className="absolute z-20"
                src="iPhone-Body-2.svg" 
                draggable="false"
            />
            <img
                className="z-20"
                src="iPhone-Body-3.svg" 
                draggable="false"
            />
           
        </div>

        <div className="basis-1/3"></div>
    </div>
  )
}

export default IphoneBodyFour