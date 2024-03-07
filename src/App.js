import { useState } from 'react';
import './App.css';
import star from "./assets/icon-star.svg"
import Ratings from './components/Ratings';
import ThankYou from './components/ThankYou';

function App() {

  const [rating, SetRating] = useState("");
  const [saveRating, setSaveRating] = useState(false);

  const getRatingsFromChild = (rating) => {
    console.log("Rating:", rating);
    SetRating(rating);
  }

  const submitRating = () => {
    setSaveRating(true);
  }

  return (
    <div className="main w-full h-screen bg-[#121417] flex items-center justify-center">
      {!saveRating ? (
        <div className="card mx-2 sm:mx-0 bg-gradient-to-t from-[#171c23] to-[#222a33] w-[23rem] max-w-[23rem] px-7 py-6 rounded-[22px] flex flex-col items-start justify-center">
        <div className="icon mb-2 mt-2">
          <img src={star} alt="" className='w-7 h-7 p-[8px] bg-[#2b3540] rounded-full' />
        </div>
        <div className="content">
          <h2 className='text-2xl font-semibold text-slate-200 pt-4 pb-3'>How did we do ?</h2>
          <p className='leading-5 text-[14px] text-gray-400 pb-3'>
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
          </p>
        </div>
        <div className="ratings w-full flex items-center justify-start mt-3">
          <Ratings onRatingChange={getRatingsFromChild} />
        </div>
        <button disabled={rating == ""} onClick={submitRating} className="submitBtn text-sm tracking-wider font-semibold w-full rounded-3xl bg-[#fc7614] hover:bg-slate-100 hover:text-[#fc7614] mt-7 text-slate-200 text-center pb-[8px] pt-[12px] mb-[6px] cursor-pointer">
          SUBMIT
        </button>
      </div>
      ) : (
      <ThankYou rating={rating} />
      )}

    </div>
  );
}

export default App;
