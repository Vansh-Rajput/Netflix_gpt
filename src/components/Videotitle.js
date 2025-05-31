

const Videotitle = ({title,about}) => {

  const bstyle=" hover:bg-gray-300  font-bold py-2 px-5 rounded  bg-white ";

  return (
    <div className='my-56 mx-8 flex flex-col gap-8 absolute '>
      <h1 className="text-6xl text-white">{title}</h1>



        <div className="flex gap-10 ">
        <button className={bstyle}>▶︎ PLAY</button>
    
        <button className={bstyle} style={ {backgroundColor: 'grey',color:'white'}}>ⓘ More Info</button>
      </div>

      <h1 className="text-gray-200 text-xl w-[700px]">{about}</h1>
    </div>
  )
}

export default Videotitle