

const Videotitle = ({title,about}) => {

  const bstyle="px-5 md:px-6 md:p-1 hover:bg-gray-300 text-[15px] font-bold rounded  bg-white  md:py-2  md:text-lg";

  return (
  
    <div className='py-[550px] md:py-56 md:px-8 flex flex-col gap-8 absolute w-screen'>
      <h1 className="hidden md:inline-block md:text-5xl text-white ">{title}</h1>



        <div className="flex justify-center gap-6 md:justify-start">
        <span className=" md:hidden text-white">＋ My List </span>
        <button className={bstyle}>▶︎ PLAY </button>
    
        <button className={bstyle} style={ {backgroundColor: 'grey',color:'white'}}>ⓘMore Info</button>
      </div>

      <h1 className="text-gray-200 hidden md:inline-block text-xs md:text-xl w-[70%]">{about}</h1>
    </div>
    
  )
}

export default Videotitle