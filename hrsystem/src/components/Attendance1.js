import React, { useState }  from "react";
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
import { AiOutlineArrowRight} from "react-icons/ai";
import { AiOutlineArrowLeft} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown} from "react-icons/md";
import noaawinLogo from '../images/noaawinLogo.PNG';



function Attendance(){
    const [date, setDate] = useState();
    console.log(date);

    return (
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

             <div className="butt-att">
               <button className="prev"><AiOutlineArrowRight/></button>
                <input 
                 className='att-date'
                 type="date"
                 value={date}
                 onChange={e => setDate(e.target.value)}
                // onClick={(e) => {
                // e.stopPropagation()}}
                  /> 
             <button className="next"><AiOutlineArrowLeft/></button> 
             </div>

             <select id="select-att"> <MdOutlineKeyboardArrowDown/>
                <option value="1">شهري</option>
                <option value="2">فترة الرواتب</option>
             </select>

             <div className="att-box1">
``            </div>

             

            


        </>
    )
}

export default Attendance;