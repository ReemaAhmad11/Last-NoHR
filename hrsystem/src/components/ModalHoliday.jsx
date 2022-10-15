import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoMdAirplane } from "react-icons/io";
import { IoTicket } from "react-icons/io5";

const ModalHoliday = ({open, onClose}) => {

  const [date, setDate] = useState();
  const [ddate, setDDate] = useState();

  if(!open) return null;

  return(
  <>
    <div className='overlay'>
      <div className='modal-container'>
        <div className='modal-right'>
           <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
           <div className='content'>
              <h2 className='holiday'>طلب إجازة</h2>
              <div className='line-horizantal'></div>
              <div className='demi-background'>
                 <div className='holiday-box1'>
                      <h3 className='holi-details'>تفاصيل الإجازات</h3>
                      <label className='holi-type-label'>النوع</label>
                      <select id="select-holi">
                         <option>اختر النوع</option>
                         <option value="1">عيد الفطر</option>
                         <option value="2">عيد الأضحى</option>
                         <option value="3">سنوية</option>
                         <option value="4">غير مدفوعة</option>
                         <option value="5">وفاة أقارب</option>
                         <option value="6">إختبارات</option>
                         <option value="7">مرضية</option>
                         <option value="7">زواج</option>
                         <option value="7">حج</option>
                         <option value="7">اليوم الوطني السعودي</option>
                         <option value="7">يوم التأسيس</option>
                      </select>
                      <lable className='holi-dating-label'>مـن</lable>
                      <input 
                      className='start-date-input'
                      type='date'
                      // placeholder='اختر التاريخ'
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      />
                      <lable className='holi-dating-label2'>إلـى</lable>
                      <input 
                      className='end-date-input'
                      type='date'
                      // placeholder='اختر التاريخ'
                      value={ddate}
                      onChange={e => setDDate(e.target.value)}
                      />

                  </div>

                  <div className='holiday-box2'>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <h3 className='holi-ticket'>تذكرة السفر <IoMdAirplane /></h3> 
                  </div>

                  <div className="holiday-box3">
                  <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                  </label>
                    <h3 className="holi-exit">تأشيرة خروج و عودة <IoTicket /></h3>
                  </div>

                  <div className="holiday-box4">
                    <h3 className="holi-reason">السبب</h3>
                    <input
                    className='holi-reason-input'
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

 export default ModalHoliday;