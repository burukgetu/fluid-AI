

const Footer = () => {
  return (
    <div className="w-[90vw] sm:w-full flex flex-col gap-6 sm:flex-row justify-between py-16 px-12">
        <div className="flex flex-col gap-6">
            <img className="w-40" src="logo-1.svg" alt="" />
            <p className="opacity-50">2024 Fluid AI</p>
        </div>
        <div className="w-full sm:w-60 opacity-50 flex justify-between">
            <div className="flex flex-col gap-3">
                <p>Our Features</p>
                <p>Areas</p>
                <p>FAQs</p>
                <p>The Waitlist</p>
                <p>Contact us</p>
            </div>
            <div className="flex flex-col gap-3">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer