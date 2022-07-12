import React from 'react'
import { ChatBubble, FavoriteBorder, Person, Videocam } from '@material-ui/icons';

const Chatright = () => {
  return (
    <div className='flex-2 bg-gray-50 px-4'>
    <div className='pt-4 w-[100%]'>
      <div className="flex bg-white border-lightgrey rounded-xl items-center w-full ml-[10px] p-[10px]">
        <input type='text' className="border-none input outline-none" placeholder="Search" />
      </div>
      <div className="flex justify-center p-4">
        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-20 sm:w-26 h-20 sm:h-26 rounded-full" />
      </div>
      <div className=" flex-col leading-tight">
        <div className="text-2xl mt-1 flex justify-center">
          <span className="text-blue-600 mr-3">Anderson Vanhron</span>
        </div>
        <span className="text-lg text-gray-600">Junior Developer</span>
      </div>
    </div>
    <div className='flex py-10   '>
      <div className='flex-1 border-r-2  h-20 flex items-center justify-center'>
        <ChatBubble className='text-blue-600 rounded-full  bg-blue-300' />
      </div>
      <div className='flex-1 h-20 flex items-center justify-center'>
        <Videocam className='text-blue-600 rounded-full   bg-blue-300  ' />
      </div>

    </div>
    <div className='flex-col '>
      <div className='flex justify-start py-4'>  <Person /> View Friends </div>
      <div className='flex justify-start'> <FavoriteBorder />  Add To Favorite </div>
    </div>
    <div className='py-4 flex justify-start'>
      Attachment
    </div>
    <div className='flex  '>
      <div className='flex-1 h-14 w-14 bg-blue-200 rounded-md mr-2 text-blue-500 flex items-center justify-center'>PDF</div>
      <div className='flex-1 h-14 w-14 bg-blue-200 rounded-md mr-2 text-blue-500 flex items-center justify-center'>Video</div>
      <div className='flex-1 h-14 w-14 bg-blue-200 rounded-md mr-2 text-blue-500 flex items-center justify-center'>MP3</div>
      <div className='flex-1 h-14 w-14 bg-blue-200 rounded-md mr-2 text-blue-500 flex items-center justify-center'>Images</div>
    </div>
    <div className=' flex justify-center py-7'>
      <button className='border-2 text-sm border-blue-600 rounded-xl h-8 w-[75px]'>View All</button>
    </div>
  </div>
  )
}

export default Chatright