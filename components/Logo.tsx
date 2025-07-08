const Logo = () => {
  return(
    <a className="group flex items-center">
      <div 
        className="
          w-6 
          h-px 
          bg-emerald-800 
          mr-2 
          group-hover:w-8 
          transition-all 
          duration-300
        "
      />
      <span 
        className="
          text-lg 
          font-medium 
          uppercase 
          tracking-widest">
            WAYING
      </span>
    </a>
  )
}

export default Logo;