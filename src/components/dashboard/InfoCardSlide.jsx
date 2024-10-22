import { MdEdit } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";

function InfoCardSlide({item}) {

    const handleEdit = () => {
        console.log('edit')
    }
    const handleMore = () => {
        console.log('more')
    }
  return (
    <div className='flex flex-row gap-2 justify-between bg-gray-100 p-3 rounded-lg mb-2'>
        <div className='flex flex-col gap-y-2'>
            <span className='font-semibold'>{item.text}</span>
            <span className='text-sm text-gray-500'>{item.time}</span>
        </div>
        <div className='flex gap-x-2 mt-4'>
            <MdEdit className='text-2xl cursor-pointer' onClick={() => {handleEdit()}}/>
            <MdOutlineMoreHoriz className='text-2xl cursor-pointer' onClick={() => {handleMore()}}/>
        </div>
    </div>
  )
}

export default InfoCardSlide