import React from 'react'

const Chatleft = () => {
  return (
    <div className='flex-3 pt-4 bg-gray-50'>
      <div className="col-span-1 border-solid border-1 rounded">
        <div className="my-3 mx-3 pt-4">
          <div className="relative flex items-center space-x-4">
            <div className="">
              <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-blue-600 mr-3">Anderson Vanhron</span>
              </div>
              <span className="text-lg text-gray-600">Junior Developer</span>
            </div>
          </div>
        </div>
        <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-xl items-center ml-[10px] p-[5px]">
          <input type='text' className="border-none input outline-none" placeholder="Search" />
        </div>
        <ul className="overflow-auto" >
          <li>
            <a className="hover:bg-gray-500 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" href=''>
              <div className="w-full pb-2">
                <div className="flex justify-between">
                  <span className="block ml-2 font-semibold text-base ">Jhon C</span>
                </div>
              </div>
            </a>
            <a className=" hover:bg-gray-500 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
              <div className="w-full pb-2">
                <div className="flex justify-between">
                  <span className="block ml-2 font-semibold text-base  ">Eduard</span>
                </div>
              </div>
            </a>
            <a className="hover:bg-gray-500 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none ">
              <div className="w-full pb-2">
                <div className="flex justify-between">
                  <span className="block ml-2 font-semibold text-base  ">Celia</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Chatleft