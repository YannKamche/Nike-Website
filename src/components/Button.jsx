const Button = ({label, iconURL, backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex 
    justify-center
    items-center 
    gap-2 
    px-7 
    py-4
    border
    font-montserrat
    text-lg
    leading-none
    rounded-full
    scale-100
    hover:scale-105 
    transition
    ease-in
    duration-150
    
    ${
      backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : "bg-coral-red text-white border-coral-red" 
    }`}>
      {label}
    {iconURL &&  <img
        src={iconURL} 
        alt="arrow-right-icon" 
        className="w-5 h-5 ml-2 rounded-full hover:translate-x-2 transition-all ease-in"
        />}
     
    </button>
  )
}

export default Button
