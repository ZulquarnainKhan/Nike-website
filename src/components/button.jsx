import React from 'react'

const Button = ({label, iconURL, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none
     ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}`: 'bg-coral-red  text-white border-coral-red'} rounded-full w-full `}>
        {label}
        {iconURL && <img src={iconURL} className="ml-2 rounded-full w-5 h-5" /> }
                     
    </button>
  )
}

export default Button