"use client";

import { useRef } from 'react';

const Accordion = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null); // Create a reference for the content div

  return (
    
    <div className="w-full max-w-[100%] xl:max-w-[85%] lg:max-w-[85%] 2xl:max-w-[85%] mx-auto ">
      <div className="border-b border-gray-200">
        {/* Accordion header */}
        <button
          className="w-full flex justify-between items-center py-4 px-2 text-left    focus:outline-none"
          onClick={onToggle}
        >
          <span className={`text-base lg:text-lg xl:text-lg 2xl:text-lg font-T1 font-semibold  ${isOpen?"text-[#008080]":"text-gray-700"}`} >{title}</span>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Accordion content */}
        <div
          ref={contentRef}
          className="transition-all duration-500 ease-out overflow-hidden"
          style={{
            maxHeight: isOpen
              ? contentRef.current?.scrollHeight + 'px'
              : '0px', // Calculate height based on content height

            // paddingTop: isOpen ? '0px' : '0px',
            // paddingBottom: isOpen ? '0px' : '0px',
          }}
        >
          <div className="p-5 ">
            <p className='font-T2 tracking-wide text-gray-600 text-sm lg:text-base xl:text-base 2xl:text-base'>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
