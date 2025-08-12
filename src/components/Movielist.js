import Moviecard from './Moviecard';

const Movielist = ({title,data,type}) => {

   
 return (

    <div className='p-4 md:m-4'>
        <h1 className='text-white font-semibold md:text-3xl'>{title}</h1>
    <div className=' flex overflow-auto'>
    <div className='flex gap-3'>
         {
            data?.map((val)=>{
            return (
               <Moviecard poster={val?.poster_path} id={val?.id} key={val.id} fulldata={val} type={type}/>
               )
            })
         }
    </div>
    </div>
    
    </div>
  )

    
}

export default Movielist;