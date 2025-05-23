import React from 'react'

function Screen() {
  return (
    <div>
    {/* Desktop */}
    <div className="hidden  2xl:block ">

    </div>
    {/* Desktop */}

    {/* Laptop */}

    <div className="hidden 2xl:hidden lg:block">
  
    </div>
    {/* Laptop */}

    {/* Tab */}

    <div className="hidden 2xl:hidden lg:hidden  md:block">

    </div>

    {/* Tab */}

    {/* Mobile */}

    <div className="md:hidden ">
   
    </div>

    {/* Mobile */}
  </div>
  )
}

export default Screen
