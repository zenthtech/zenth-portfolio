import React from 'react'

function Screen() {
  return (
    <div>
    {/* Desktop */}
    <div className="hidden  2xl:block ">
    <div className='flex justify-center items-center h-screen text-5xl'>
        lllllllllllllllll
        </div>
    </div>
    {/* Desktop */}

    {/* Laptop */}

    <div className="hidden 2xl:hidden lg:block">
 
    </div>
    {/* Laptop */}

    {/* Tab */}

    <div className="hidden  lg:hidden  md:block">
 
    </div>

    {/* Tab */}

    {/* Mobile */}

    <div className="md:hidden ">
        <div className='flex justify-center items-center h-screen text-5xl'>
       
        </div>

    </div>

    {/* Mobile */}
  </div>
  )
}

export default Screen
