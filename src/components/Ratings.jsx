import React, { useState } from 'react'

const Ratings = ({ onRatingChange }) => {

    const [ratingClicked, setRatingClicked] = useState(null);

    const ratingNums = [1,2,3,4,5];

    const rateFunc = (rating) => {
        onRatingChange(rating);
        setRatingClicked(rating);
    }


  return (
    <div className='ratings w-full flex items-center justify-between'>
        {ratingNums.map((item, index) => (
          <div onClick={()=> rateFunc(item)} key={index} className={`${ratingClicked == item ? 'bg-[#fc7614] text-slate-100' : 'bg-[#252d37] text-slate-400'} flex items-center justify-center w-10 h-10 text-center rounded-full cursor-pointer hover:bg-[#fc7614] hover:text-slate-100 transition-all ease-in 2s`}>
            {item}
          </div>
        ))}
    </div>
  )
}

export default Ratings;