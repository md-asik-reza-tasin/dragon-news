import side from '../assets/bg.png';

export default function SideImage (){
    return (
        <div className='mt-5 mx-2 relative'>
          <img src={side} alt="" />
          <div className='absolute inset-0 flex items-center justify-center'>
            <p className='text-white text-xl font-bold px-4 py-2 rounded-md'>Dragon News</p>
          </div>
        </div>
    )
}