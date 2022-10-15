import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoMdAirplane } from "react-icons/io";
import { IoTicket } from "react-icons/io5";

const ModalJob = ({open, onClose}) => {

    const [date, setDate] = useState();
    const [ddate, setDDate] = useState();

    if(!open) return null;

    return (
        <>
            <div className='overlay'>
               <div className='modal-container'>
                 <div className='modal-right'>
                   <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
                   <div className='content'>
                     <h2 className='job'>طلب مهمة عمل</h2>
                     <div className='line-horizantal'></div>
                     <div className='demi-background'>
                        <div className='job-box1'>
                          <h3 className='job-details'>تفاصيل مهمة عمل</h3>
                          <label className='trip-label'>نوع الرحلة</label>
                          <select id="select-trip">
                            <option>اختر النوع</option>
                            <option value="1">رحلات داخلية</option>
                            <option value="2">رحلات خارجية</option>
                            <option value="3">رحلات إدارية</option>
                          </select>

                          <lable className='job-dating-label'>مـن</lable>
                          <input 
                          className='job-start-date-input'
                          type='date'
                          // placeholder='اختر التاريخ'
                          value={date}
                          onChange={e => setDate(e.target.value)}
                          />
                          <lable className='job-dating-label2'>إلـى</lable>
                          <input 
                          className='job-end-date-input'
                          type='date'
                          // placeholder='اختر التاريخ'
                          value={ddate}
                          onChange={e => setDDate(e.target.value)}
                          />

                          <label className='service-label'>البدلات المطلوبة</label>
                          <select id="select-service">
                            <option>اختر الخدمات</option>
                            <option value="1">سكن</option>
                            <option value="2">وسائل النقل</option>
                            <option value="3">طعام</option>
                          </select>
                        </div>

                        <div className="job-box2">
                          <label className="switch">
                             <input type="checkbox" />
                             <span className="slider round"></span>
                          </label>
                          <h3 className='holi-ticket'>تذكرة السفر <IoMdAirplane /></h3>
                        </div>

                        <div className="job-box3">
                          <label className="switch">
                             <input type="checkbox" />
                             <span className="slider round"></span>
                          </label>
                          <h3 className="holi-exit">تأشيرة خروج و عودة <IoTicket /></h3>
                        </div>

                        <div className="job-box4">
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

export default ModalJob;