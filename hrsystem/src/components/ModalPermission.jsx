import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const ModalPermission = ({open, onClose}) => {
  const [date, setDate] = useState();
  if(!open) return null;

  return(
    <>
    <div className='overlay'>
      <div className='modal-container'>
        <div className='modal-right'>
        <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
        <div className='content'>
         <h2 className='permission'>طلب استئذان</h2>
         <div className='line-horizantal'></div>
         <div className='demi-background'>
            <div className='per-box1'>
              <h3 className='permission-name'>يوم الإستئذان ونوعه</h3>
              <label className='permission-type-label'>النوع</label>
              <select id="select-per">
                <option>اختر النوع</option>
                <option value="1">استئذان يوم كامل</option>
                <option value="2">استئذان حضور متأخر</option>
                <option value="3">منتصف اليوم</option>
              </select>
              <label className='per-dating-label'>التاريخ</label>
              <input
              className='per-dating-input'
              type='date'
              // placeholder='اختر التاريخ'
              value={date}
              onChange={e => setDate(e.target.value)}
              />

            </div>
            
            {/* <div className='per-box2'>
              <h3 className='per-reason'>السبب</h3>
              <select id="select-per2">
                  <option value="1">شخصي</option>
                  <option value="2">العمل</option>
                </select>
              <input
              className='per-reason-input'
              type='text'
              placeholder='ادخل السبب'
              />
            </div> */}
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
export default ModalPermission;