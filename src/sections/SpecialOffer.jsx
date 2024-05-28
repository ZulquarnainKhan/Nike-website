import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img src={offer} alt="offer" width={773} className='h-[687px] object-contain w-full ' />
      </div>
      <div className="flex flex-1 flex-col ">
      {/* <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p> */}
        <h2 className="font-palanquin text-4xl capitalise font-bold lg:max-w-lg "> 
          <span
           className="text-coral-red">Special</span> Offer  
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elivate your experience, providing with unmatched quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to details and excellence ensures your satisfaction.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="learn more" backgroundColor="bg-white" borderColor="border-slate-grey" textColor="text-slate-grey" ></Button>

        </div>
      </div>
    </section>
  )
}

export default SpecialOffer