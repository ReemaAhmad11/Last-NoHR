import React, { useState } from "react";
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
import ModalDemmision from "./ModalDemmision";
import ModalLetter from "./ModalLetter";
import ModalEmp from "./ModalEmp";
import ModalCorrect from "./ModalCorrect";
import ModalSalary from "./ModalSalary";
import ModalPermission from "./ModalPermission";
import ModalExtra from "./ModalExtra";
import ModalCustody from "./ModalCustody";
import ModalHoliday from "./ModalHoliday";
import ModalJob from "./ModalJob";
import noaawinLogo from '../images/noaawinLogo.PNG';

function Orders() {

  const [showDemi, setShowDemi] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showEmp, setShowEmp] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showSalary, setShowSalary] = useState(false);
  const [showPermission, setShowPermission] = useState(false);
  const [showExtra, setShowExtra] = useState(false);
  const [showCustody, setShowCustody] = useState(false);
  const [showHoliday, setShowHoliday] = useState(false);
  const [showJob, setShowJob] = useState(false);

  return (
    <>
      <div className="header-background1">
        <h2 className="orders-name">الطلبات</h2>
      </div>

      <div className="header-background2">
      <img src={noaawinLogo} className="header-logo" />

        <div className="header-logo"></div>

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

      <div className="order-table">
        <table>
          <tr>
            <th>وقت الطلب</th>
            <th>الحالة</th>
            <th>مسؤول الموافقة</th>
            <th>الطلب</th>
          </tr>
        </table>
      </div>

      <div className="dropdown">
        <button
          className="new-order"
        >
          طلب جديد
        </button> 

        <div className="dropdown-content">

          <a href="#" onClick={() => setShowDemi(true)}>طلب استقالة</a>
          <ModalDemmision open={showDemi} onClose={() => setShowDemi(false)} />

          <a href="#" onClick={() => setShowLetter(true)}>طلب خطاب</a>
          <ModalLetter open={showLetter} onClose={() => setShowLetter(false)} />

          <a href="#" onClick={() => setShowEmp(true)}>طلب توظيف</a>
          <ModalEmp open={showEmp} onClose={() => setShowEmp(false)} />

          <a href="#" onClick={() => setShowCorrect(true)}>طلب تصحيح بصمة</a>
          <ModalCorrect open={showCorrect} onClose={() => setShowCorrect(false)} />

          <a href="#" onClick={() => setShowSalary(true)}>طلب مصاريف مالية</a>
          <ModalSalary open={showSalary} onClose={() => setShowSalary(false)} />

          <a href="#" onClick={() => setShowPermission(true)}>طلب إستئذان</a>
          <ModalPermission open={showPermission} onClose={() => setShowPermission(false)} />

          <a href="#" onClick={() => setShowExtra(true)}>طلب عمل إضافي</a>
          <ModalExtra open={showExtra} onClose={() => setShowExtra(false)} />

          <a href="#" onClick={() => setShowCustody(true)}>طلب عهدة</a>
          <ModalCustody open={showCustody} onClose={() => setShowCustody(false)} />

          <a href="#" onClick={() => setShowHoliday(true)}>طلب إجازة</a>
          <ModalHoliday open={showHoliday} onClose={() => setShowHoliday(false)} />

          <a href="#" onClick={() => setShowJob(true)}>طلب مهمة عمل</a>
          <ModalJob open={showJob} onClose={() => setShowJob(false)} />
        </div>
      </div>
    </>
  )
}

export default Orders;