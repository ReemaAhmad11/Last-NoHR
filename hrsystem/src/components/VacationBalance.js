
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineReorder } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { IoFingerPrintSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineContainer } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { RiTableLine } from "react-icons/ri";
import noaawinLogo from '../images/noaawinLogo.PNG';
import { GoPrimitiveDot } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function VacationBalance(){

    const navigate = useNavigate();

    return(
        <>
         <div className="header-background1"></div>
         <div className="header-background2">
         <img src={noaawinLogo} className="header-logo" />

         <div className="general-info">المعلومات العامة</div>

         <Link id="home-page" to="/homepage"> <b>الصفحة الرئيسية</b> <MdOutlineHome /></Link>
         <Link id="orders" to="/orders"><b>الطلبات</b> <MdOutlineReorder /></Link>

         <div className="employee">الموظف</div>

         <Link id="view-emp" to="/viewemp"> <b>عرض الموظفين</b> <BsFillPeopleFill /></Link>

         <div className="vacations">إدارة الإجازات</div>

         <Link id="vacation-balance" to="/vacationbalance"> <b>رصيد الإجازات</b> <MdOutlineHolidayVillage /></Link>
         <div className="Attendance">الحضور والإنصراف</div>

         <Link id="Attendance1" to="/Attendance1"> <b>الحضور والإنصراف</b><IoFingerPrintSharp /></Link>

         <Link id="working-schedule" to="/workingschedule"><b>جدول الدوامات</b> <RiTableLine /></Link>

         <div className="salary"> مسير الرواتب</div>

         <Link id="table-salary" to="/tablesalary"> <b>جدول مسير الرواتب</b><MdAttachMoney /></Link>
         <Link id="Vacation-summary" to="/Vacationsummary"><b>ملخصات الإجازة ونهاية الخدمة</b><AiOutlineContainer /></Link>
         <Link id="salary-transfer" to="/salarytransfer"> <b>تحويل الرواتب</b>  <BiTransferAlt /></Link>

         <div className="other">أخرى</div>
         <Link id="reports" to="/reports"><b>تقارير</b> <TbReportSearch /></Link>
         <Link id="settings" to="/settings"><b>إعدادات</b> <AiOutlineSetting /></Link>
         </div>

         <div className="border-horizantal"></div>
         <div className="border-vertical"></div>

         <div className="vaca-box1">
            <h2 className="vaca-year">إجازة سنوية</h2>
            <div className="vaca-box1-line"></div>

            <div className="vaca-list">
               <h4 id="vaca-list1">الإستحقاق السنوي للإجازة <GoPrimitiveDot /></h4>
               <h4 id="vaca-list2">الرصيد الإفتتاحي <GoPrimitiveDot /></h4>
               <h4 id="vaca-list2">الإجازات المستخدمة في السنة الحالية <GoPrimitiveDot /></h4>
               <h4 id="vaca-list2">الإدخال اليدوي <GoPrimitiveDot /></h4>
               <h4 id="vaca-list2">الرصيد المستحق إلى هذا اليوم <GoPrimitiveDot /></h4>
               <h4 id="vaca-list2">رصيد نهاية السنة الحالية <GoPrimitiveDot /></h4>
              </div>
            </div>
         
         <div className="vaca-box2">
            <h2 className="emp-info">معلومات الموظف</h2>
            <div className="vaca-box2-line"></div>
            <div className="emp-data">
                <h4 id="emp-num">الرقم</h4>
                <h4 id="emp-name">الإسم</h4>
            </div>
         </div>

         <div className="vaca-box3">
            <h2 className="other-vaca">إجازات أخرى</h2>
            <div className="vaca-box3-line"></div>
            <Link 
                    id="show-detail"
                    to="/post"
                //     onClick={()=>{
                //     navigate(`/post`)
                //    }}
                 >
                   <h5>عرض التفاصيل</h5>
                 </Link>
         </div>
        </>
    )
}
export default VacationBalance;