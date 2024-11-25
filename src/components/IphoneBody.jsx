

const IphoneBody = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-8 sm:gap-0 sm:flex-row justify-between px-16">
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
                1/4
            </p>
        </div>

        <div className="sm:w-[28%] relative">
            <img 
                className="absolute  rounded-[30px]"
                src="speaking-fluid-bg-1.svg"
                draggable="false"
            />
            <img 
                className="video translate-y-[30vw] sm:translate-y-[10vw] scale-[1.4] absolute bottom-0 "
                src="play-video-2.gif"
                draggable="false"
            />
            <img 
                className="mt-2 absolute sbg2 rounded-[50px]"
                src="speaking-fluid-bg-2.svg"
                draggable="false"
            />
            <img
                className="absolute translate-y-32 scale-x-[1.02]"
                id="iphone-button" 
                src="/iphone-buttons.svg" 
                draggable="false"
            />
            <img
                className="absolute"
                src="iPhone-Body-1.svg"
                draggable="false"
            />
            <img
                className="absolute"
                src="iPhone-Body-2.svg" 
                draggable="false"
            />
            <img
                className=""
                src="iPhone-Body-3.svg" 
                draggable="false"
            />
        </div>

        <div className="basis-1/4"></div>
    </div>
  )
}

export default IphoneBody