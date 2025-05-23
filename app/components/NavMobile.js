
"use client"; 

import React from 'react'


function NavMobile() {
    const navigationData = [
        {
            name: 'Home',
            href: '/',
        },
    
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Service',
            href: '/service',
        },
        {
            name: 'Internship',
            href: '/internship',
        },
        {
          name: 'Career',
          href: '/career',
      },

      {
        name: 'Contact',
        href: '/contact',
    },

      
    ];
        

    
      return (
       <ul className='flex flex-col px-6 pt-4 pb-4 gap-y-4'>
        {navigationData.map((item,Index) => {
            return (
                <li key={Index}>
                    <a className=' text-white font-medium' href={item.href}>
                        {item.name}
                    </a>
                </li>
                
            )
        })}

     {/* <button className="before:ease relative h-12 w-[120px] mt-2 overflow-hidden border rounded-md border-black before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white  hover:before:-rotate-180">
      <span className="relative z-10">Let's talk</span>
    </button> */}
   
       </ul>
      )
}

export default NavMobile
