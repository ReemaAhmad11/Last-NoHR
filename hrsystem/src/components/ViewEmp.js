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
import { GoSearch } from "react-icons/go";
import noaawinLogo from '../images/noaawinLogo.PNG';


function ViewEmp(){

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
         
         <div className="viewEmp-table1">
          <table>
            <tr>
             <th>تاريخ الإنضمام (ميلادي)</th>
             <th>المواقع/الفروع</th>
             <th>القسم</th>
             <th>المسمي الوظيفي</th>
             <th>إسم الموظف</th>
             <th>الرقم الوظيفي</th>
           </tr>
         </table>
         </div>


      


        </>      
    ) 
}
export default ViewEmp;