import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const ModalLetter = ({open, onClose}) => {

  if(!open) return null;

  return(
    <>
    <div className='overlay'>
      <div className='modal-container'>
        <div className='modal-right'>
          <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
          <div className='content'>
            <h2 className='letter'>طلب خطاب</h2>
            <div className='line-horizantal'></div>
            <div className='demi-background'>
             <div className='demi-box1'>
               <h3 className='letter-name'>تفاصيل الرسالة</h3>
               <label className='type-label'>النوع</label>
               {/* <div className='select'> */}
                <select id="select">
                  <option>اختر النوع</option>
                  <option value="1">خطاب تعريف بالراتب (عربي)</option>
                  <option value="2">خطاب تعريف بدون راتب (عربي)</option>
                  <option value="3">خطاب تعريف بالراتب (انجليزي)</option>
                  <option value="4">خطاب تعريف بدون راتب (انجليزي)</option>
                  <option value="5">شهادة خبرة</option>
                </select>

                <label className='guided'>موجه إلى</label>
                <input
                className='guided-input'
                type="text"
                />
             </div>

             <div className='demi-box2'>
                <h3 className='reason-name'>السبب</h3>
                <input
                className='rreason-input'
                type="text"
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

export default ModalLetter;