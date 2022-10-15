import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const ModalCostody = ({open, onClose}) => {  
  if(!open) return null;

  return(
    <>
    <div className='overlay'>
      <div className='modal-container'>
       <div className='modal-right'>
          <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
          <div className='content'>
            <h2 className='custody'>طلب عُهدة</h2>
            <div className='line-horizantal'></div>
            <div className='demi-background'>
              <div className='cos-box1'>
                <label className='custody-name'>تفاصيل العهد</label>
                  <select id="select-custody">
                    <option>اختر</option>
                    <option value="1">طلب عُهدة</option>
                    <option value="2">طلب إخلاء عُهدة</option>
                  </select>
            
                <label className='cus-type-label'>نوع العهدة</label>
                  <select id="select-cus-type">
                    <option>اختر النوع</option>
                    <option value="1">بطاقة الدخول</option>
                    <option value="2">بطاقة تعريفية للعمل</option>
                    <option value="3">بطاقة التأمين الطبي</option>
                    <option value="4">سيارة</option>
                    <option value="5">لابتوب</option>
                    <option value="6">جوال</option>
                    <option value="7">سترة</option>
                  </select>

              </div>

              <div className='cos-box2'>
                <h3 className='custody-reason'>السبب</h3>
                <input
                className='cus-reason-input'
                type="text"
                placeholder='ادخل السبب'
                />
                <div className="upload-custody">
                   <span className="upload-file-custody"> إضافة مرفق</span>
                   <div className="upload-file">
                     <input type="file" id="file-input"/>
                   </div>
                </div>
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

  export default ModalCostody;