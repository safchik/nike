
const Hero = () => {
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 ma[-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p>Our Summer Collection</p>
                <h1>
                    <span>The New Arrival</span>
                    <br />
                    <span>Nike</span>
                    Shoes
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                    Discover stylish Nike arrivals, quality comfort, and innovation for
                    your active life.
                </p>
            </div>
        </section>
    )
}

export default Hero