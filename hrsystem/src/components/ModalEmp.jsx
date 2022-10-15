import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const ModalEmp = ({open, onClose}) => {
  if(!open) return null;

  return(
    <>
    <div className='overlay'>
      <div className='modal-container'>
        <div className='modal-right'>
          <p onClick={onClose} className="close-btn"><IoIosLogOut /></p>
          <div className='content'>
            <h2 className='letter'>طلب توظيف </h2>
            <div className='line-horizantal'></div>
            <div className='demi-background'>
              <div className='emp-box1'>
                <h2 className='emp-name'> طلب توظيف </h2>
                <label className='emp-label'>المسمى</label>
                <select id="select-emp">
                  <option>اختر المسمى</option>
                  <option value="1">المدير المالي</option>
                  <option value="2">مدير الشؤون الإدارية</option>
                  <option value="3">Assistant</option>
                  <option value="4">CEO</option>
                  <option value="5">مسؤول التطوير</option>
                  <option value="6">مسؤول التوجيه والحركة</option>
                  <option value="7">مدير عام الخدمات الإسعافية</option>
                  <option value="8">مدير الأخصائيين</option>
                  <option value="9">HR Manager</option>
                  <option value="10">منسق الإدارة الطبية</option>
                  <option value="11">المدير الطبي للمركز الإسعافي</option>
                  <option value="12">أخصائي خدمات طبية طارئة</option>
                  <option value="13">مدير المسعفين</option>
                  <option value="14">Programmer</option>
                  <option value="15">مدير المشاريع</option>
                  <option value="16">مسؤول التدريب</option>
                  <option value="17">مساعد مشرف تموين</option>
                  <option value="18">مشرف صيانة ميكانيكية</option>
                  <option value="19">التموين الطبي</option>
                  <option value="20">سائق الإسعاف</option>
                  <option value="21">مساعدالمدير الطبي</option>
                  <option value="22">منسق اللجان</option>
                  <option value="23">أخرى</option>
                </select>

                <label className='month-label'>الشهر</label>
                <select id="select-month">
                  <option value="1">يناير</option>
                  <option value="2">فبراير</option>
                  <option value="3">مارس</option>
                  <option value="4">ابريل</option>
                  <option value="5">مايو</option>
                  <option value="6">يونيو</option>
                  <option value="7">يوليو</option>
                  <option value="8">أغسطس</option>
                  <option value="9">سبتمبر</option>
                  <option value="10">اكتوبر</option>
                  <option value="11">نوفمبر</option>
                  <option value="12">ديسمبر</option>
                </select>

                <label className='num-emp-label'>عدد الموظفين</label>
                <select id="select-num-emp">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className='emp-box2'>
                  <h3 className='emp-reason-name'>السبب</h3>
                  <input
                   className='emp-reason-input'
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

export default ModalEmp;
