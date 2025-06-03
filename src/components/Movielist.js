import Moviecard from './Moviecard';

const Movielist = ({title,data}) => {

   
 return (

    <div className='p-4 md:p-8'>
        <h1 className='text-white font-semibold md:text-3xl'>{title}</h1>
    <div className=' flex overflow-auto'>
    <div className='flex gap-3'>
         {
            data?.map((val)=>{
            return (
               <Moviecard poster={val?.poster_path} key={val.id}/>
               )
            })
         }
    </div>
    </div>
    
    </div>
  )

    
}

export default Movielist;