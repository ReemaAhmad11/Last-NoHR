import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const ModalExtra = ({open, onClose}) => {
  const [date, setDate] = useState();
  if(!open) return null;

  return(
    <>
    <div className='overlay'>
      <div className='modal-container'>
        <div className='modal-right'>
           <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
           <div className='content'>
           <h2 className='extra'>طلب عمل إضافي</h2>
           <div className='line-horizantal'></div>
           <div className='demi-background'>
             <div className='extra-box1'>
               <h3 className='extra-name'>مدة العمل الإضافي</h3>
               <label className='extra-type-label'>النوع</label>
               <select id="select-ext">
                  <option>اختر النوع</option>
                  <option value="1">يوم واحد</option>
                  <option value="2">أيام محددة</option>
                  <option value="3">فترة زمنية محددة</option>
               </select>
               <label className='ext-dating-label'>التاريخ</label>
     
               <input
               className='ext-dating-input'
               type='date'
               // placeholder='اختر التاريخ'
               value={date}
               onChange={e => setDate(e.target.value)}
               /> 
               <label className='extra-label'>عمل إضافي</label>
               <input  
               className='extra-input'
               type='text'
               />

               <button className="blus">+</button>
               <button className="minus">-</button>

             </div>

             <div className='extra-box2'>
               <h3 className='ext-reason'>السبب</h3> 
               <input
               className='ext-reason-input'
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
export default ModalExtra;