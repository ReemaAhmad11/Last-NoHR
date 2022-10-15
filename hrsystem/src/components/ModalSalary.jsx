import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const ModalSalary = ({open, onClose}) => {

  const [date, setDate] = useState();

  if(!open) return null;

  return(
    <>
    <div className='overlay'>
      <div className='modal-container'>
        <div className='modal-right'>
         <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
         <div className='content'>
          <h2 className='correct'>طلب مصاريف مالية</h2>
          <div className='line-horizantal'></div>
          <div className='demi-background'>
            <div className='salary-box1'>
              <h3 className='salary-name'> العناصر</h3>
              <div className='line-horizantal2'></div>
              <label className='item-label'>اسم العنصر</label>
              <input
              className='item-input'
              type='text'
              />

              <label className='dating-label'>التاريخ</label>
              <input
              className='dating-input'
              type='date'
              // placeholder='اختر التاريخ'
              value={date}
              onChange={e => setDate(e.target.value)}
              />

              <label className='salary-label'>المبلغ</label>
              <input
              className='salary-input'
              type='text'
              />

              <div className='salary-background'>
                <p>SAR</p>
              </div>

              <label className='description'>الوصف</label>
              <input
              className='descrip-input'
              type='text'
              placeholder='اضف الوصف'
              />

              <button className="save">حفظ</button>
              <button className="salary-cancel">إلغاء</button>
              
            </div>

            <div className='salary-box2'>
              <h3 className='salary-reason'>السبب</h3>
              <input
              className='salary-reason-input'
              type='text'
              placeholder='ادخل السبب'
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
 
export default ModalSalary;