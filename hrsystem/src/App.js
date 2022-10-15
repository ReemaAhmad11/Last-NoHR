import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import Homepage from './components/Homepage';
import AdminPage from './components/AdminPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Orders from './components/Orders';
import ViewEmp from './components/ViewEmp';
import VacationBalance from './components/VacationBalance';
import Attendance1 from './components/Attendance1';
import WorkingSchedule from './components/WorkingSchedule';
import TableSalary from './components/TableSalary';
import SalaryTransfer from './components/SalaryTransfer';
import Reports from './components/Reports';
import Settings from './components/Settings';
import CurrentUserRoutes from './components/CurrentUserRoutes';


function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
          <Routes>
            
             <Route path = "/" element = {<Login/>}/>
             <Route path = "/signup" element = {<Signup/>}/>
             <Route path = "/homepage" element={<CurrentUserRoutes><Homepage /></CurrentUserRoutes> }/>
             <Route path = "/adminPage" element = {<AdminPage/>}/>
             <Route path = "/orders" element = {<Orders/>}/>
             <Route path = "/viewemp" element = {<ViewEmp/>}/>
             <Route path = "/vacationBalance" element = {<VacationBalance/>}/>
             <Route path = "/Attendance1" element = {<Attendance1/>}/>
             <Route path="/workingschedule"element = {<WorkingSchedule/>}/>
             <Route path = "/tablesalary" element = {<TableSalary/>}/>
             <Route path = "/Vacationsummary" element = {<TableSalary/>}/>
             <Route path = "/salarytransfer" element = {<SalaryTransfer/>}/>
             <Route path = "/reports" element = {<Reports/>}/>
             <Route path = "/settings" element = {<Settings/>}/>
             
          </Routes>
          </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
