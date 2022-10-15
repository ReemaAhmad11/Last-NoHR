import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const ModalCorrect = ({open, onClose}) => {

  const [date, setDate] = useState();
  
  if(!open) return null;

  return(
    <>
    <div className='overlay'>
      <div className='modal-container'>
        <div className='modal-right'>
        <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
        <div className='content'>
          <h2 className='correct'>طلب تصحيح بصمة</h2>
          <div className='line-horizantal'></div>
           <div className='demi-background'>
            <div className='demi-box1'>
              <h3 className='correct-name'> طلب تصحيح </h3>
              <label className='corr-date-label'>التاريخ</label>
              <input 
              className='corr-day-input'
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              // onClick={(e) => {
              // e.stopPropagation()}}
              />
            </div>
           </div>
        </div>
        </div>

        <div className="footer-popup-modal">
          <button className="send">إرسال</button>
          <button className="cancel">إلغاء</button>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default ModalCorrect;