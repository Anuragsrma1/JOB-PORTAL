import React from 'react'

const LatestJobCards = () => {
  return (
    <div>
        <div className="bg-white shadow-lg p-5 rounded-lg">
            <div className="flex gap-4">
            <img
                src="https://cdn.pixabay.com/photo/2015/09/18/18/44/business-948796_960_720.jpg"
                alt=""
                className="h-20 w-20 rounded-full"
            />
            <div>
                <h1 className="text-xl font-bold">Software Engineer</h1>
                <p className="text-gray-500">Google</p>
            </div>
            </div>
            <div className="my-5">
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                explicabo dolorum, quos, quidem, iure quibusdam doloribus
                repudiandae voluptates quod autem quae.
            </p>
            </div>
            <div className="flex justify-between">
            <div>
                <p className="text-[#6A38C2]">Full Time</p>
            </div>
            <div>
                <p className="text-[#6A38C2]">Remote</p>
            </div>
            <div>
                <p className="text-[#6A38C2]">1 day ago</p>
            </div>
            </div>
            </div>
    </div>
  )
}

export default LatestJobCards
