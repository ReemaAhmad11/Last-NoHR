import React, { useState }  from "react";
// import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const ModalDemmision = ({open, onClose}) =>  {

    const [date, setDate] = useState();

    console.log(date);

    if(!open) return null;

    return(
        <>
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => {
                e.stopPropagation()}}
                className="modal-container">
                <div className="modal-right">
                    <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
                    <div className="content">
                        <h2 className='demission'>طلب استقالة</h2>
                        <div className='line-horizantal'></div>
                        <div className='demi-background'>
                            <div className='demi-box1'>
                                <h3 className='demi-name'>تفاصيل الإستقالة</h3>
                                <label className='day-label'>تاريخ آخر يوم عمل</label>
                                <input 
                                className='demi-day-input'
                                type="date"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                // onClick={(e) => {
                                //     e.stopPropagation()}}
                                 />
                                {/* <label className='calendar'><FaRegCalendarAlt /></label> */}

                                <p className='reason-label'>سبب الإستقالة</p>
                                <select id="select-demi">
                                <option>اختر السبب</option>
                                 <option value="1">فصل بموجب المادة (77) من نظام العمل</option>
                                  <option value="2">استقالة بموجب المادة (77) من نظم العمل </option>
                                  <option value="3">إنهاء نشاط</option>
                                  <option value="4">فسخ العقد بموجب المادة (80) من نظام العمل</option>
                                  <option value="5">فسخ العقد بموجب فترة التجربة أو التدريب </option>
                                  <option value="6">بلوغ سن التقاعد</option>
                                  <option value="7">انتهاء العقد وعدم التجديد برغبة صاحب العمل </option>
                                  <option value="8">انتهاء العقد وعدم التجديد برغبة المشترك</option>
                                  <option value="9">انتهاء العقد وعدم التجديد بإتفاق الطرفين</option>
                                  </select>
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

export default ModalDemmision;

{/* <Calendar
onChange={onChange}
value={value}
/> */}