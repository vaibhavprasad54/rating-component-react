import React from 'react'
import receiptImg from "../assets/illustration-thank-you.svg"

const ThankYou = ({ rating }) => {
  return (
    <div className="card bg-gradient-to-t from-[#161b22] to-[#242c35] w-[23rem] max-w-[23rem] px-6 py-7 rounded-[22px] flex flex-col items-center justify-center">
        <div className="image">
            <img src={receiptImg} className='w-[135px] pt-3 pb-7' alt="" />
        </div>
        <div className="selection-text pb-4">
            <p className='text-[#e98a46ca] font-semibold text-sm bg-[#28303a] rounded-[17px] px-5 py-1 pt-[6px]'>You selected {rating} out of 5</p>
        </div>
        <div className="main-text text-center">
            <h2 className='text-2xl text-slate-100 font-semibold py-2'>Thank You!</h2>
            <p className='text-[14px] text-gray-400 pb-4'>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
            </p>
        </div>
    </div>
  )
}

export default ThankYou