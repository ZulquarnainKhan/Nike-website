import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between max-lg:flex-col items-center gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
      {/* <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p> */}
        <h2 className="font-palanquin text-4xl capitalise font-bold lg:max-w-lg "> 
          We Provide You <span
           className="text-coral-red">Super</span> <span  
            
           className="text-coral-red">Quality</span> Shoes  
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elivate your experience, providing with unmatched quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to details and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />

        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" className="w-[570px] h-[522px]"/>
      </div>

    </section>
  )
}

export default SuperQuality