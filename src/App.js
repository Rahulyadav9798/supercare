import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Head from './components/Head';
import HomeScreen from './components/HomeScreen';
import SeniorCare from './components/SeniorCare';
import SeniorHelpType from './components/SeniorCare/InHomeCare/SeniorHelpType';
import SeniorCareLocation from './components/SeniorCare/InHomeCare/SeniorCareLocation';
import SeniorCareAccount from './components/SeniorCare/InHomeCare/SeniorCareAccount';
import SeniorCareName from './components/SeniorCare/InHomeCare/SeniorCareName';
import SeniorCarePassword from './components/SeniorCare/InHomeCare/SeniorCarePassword';
import Tutoring from './components/Tutoring';
import TutorNeed from './components/Tutoring/TutorNeed';
import WhoNeedCare from './components/SeniorCare/WhoNeedCare';
import WhoDescribe from './components/SeniorCare/WhoNeedCare/WhoDescribe';
import WhoNeedCareHelpType from './components/SeniorCare/WhoNeedCare/WhoNeedCareHelpType';
import WhoNeedCareLocation from './components/SeniorCare/WhoNeedCare/WhoNeedCareLocation';
import WhoNeedCarePayType from './components/SeniorCare/WhoNeedCare/WhoNeedCarePayType';
import WhoNeedCareAccount from './components/SeniorCare/WhoNeedCare/WhoNeedCareAccount';
import WhoNeedCareName from './components/SeniorCare/WhoNeedCare/WhoNeedCareName';
import WhoNeedCarePassword from './components/SeniorCare/WhoNeedCare/WhoNeedCarePassword';
import WhoNeedCarePayQue from './components/SeniorCare/WhoNeedCare/WhoNeedCarePayQue';
import WhoNeedCarePayAccount from './components/SeniorCare/WhoNeedCare/WhoNeedCarePayAccount';
import WhoNeedCarePayName from './components/SeniorCare/WhoNeedCare/WhoCareNeedPayName';
import WhoNeedCarePayPassword from './components/SeniorCare/WhoNeedCare/WhoNeedCarePayPassword';
import TutoringSubject from './components/Tutoring/TutoringSubject';
import TutoringLocation from './components/Tutoring/TutoringLocation';
import TutoringType from './components/Tutoring/TutoringType';
import TutoringAccount from './components/Tutoring/TutoringAccount';
import TutoringName from './components/Tutoring/TutoringName';
import HouseKeepingNeed from './components/HouseKeeping/HouseKeepingNeed';
import HouseKeepingWhat from './components/HouseKeeping/HouseKeepingWhat';
import HouseKeepingWhatTask from './components/HouseKeeping/HouseKeepingWhatTask';
import HouseKeepingLocations from './components/HouseKeeping/HouseKeepingLocations';
import HouseKeepingAccount from './components/HouseKeeping/HouseKeepingAccount';
import HouseKeepingName from './components/HouseKeeping/HouseKeepingName';
import HouseKeepingPassword from './components/HouseKeeping/HouseKeepingPassword';
import DayCareLocation from './components/DayCare/DayCareLocation';
import DayCareNeed from './components/DayCare/DayCareNeed';
import DayCareKind from './components/DayCare/DayCareKind';
import DayCareWhoNeed from './components/DayCare/DayCareWhoNeed';
import Register from './components/CreateProfile/Register';
import Login from './components/Login/Login';
import Footer from './components/Layouts/Footer';
import ChildCareLocation from './components/ChildCare/ChildCareLocation';
import ChildCareNeed from './components/ChildCare/ChildCareNeed';
import ChildCareKind from './components/ChildCare/ChildCareKind';
import ChildCareAccount from './components/ChildCare/ChildCareAccount';
import ChildCareName from './components/ChildCare/ChildCareName';
import ChildCarePassword from './components/ChildCare/ChildCarePassword';
import WhereLive from './components/AfterRegister/WhereLive';
import ParentHome from './components/Dashboard/CareGiver';
import ChildCareWhoNeed from './components/ChildCare/ChildCareWhoNeed';
import ChildCareTimeTable from './components/ChildCare/ChildCareTimeTable';
import JobPost from './components/Dashboard/CareGiver/JobPost';

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Head />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="register/live" element={<WhereLive />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="home" element={<ParentHome />} />
          <Route path="home/job" element={<JobPost />} />
          <Route path="childcare" element={<ChildCareLocation />} />
          <Route path="childcare/need" element={<ChildCareNeed />} />
          <Route path="childcare/need/kind" element={<ChildCareKind />} />
          <Route path="childcare/need/kind/who-need" element={<ChildCareWhoNeed />} />
          <Route path="childcare/need/kind/who-need/account" element={<ChildCareAccount />} />
          <Route path="childcare/need/kind/who-need/account/name" element={<ChildCareName />} />
          <Route path="childcare/need/kind/who-need/account/name/password" element={<ChildCarePassword />} />
          <Route path="childcare/need/kind/who-need/account/name/password/care-time" element={<ChildCareTimeTable />} />
          <Route path="seniorcare" element={<SeniorCare />} />
          <Route path="seniorcare/help-type" element={<SeniorHelpType />} />
          <Route path="seniorcare/help-type/location" element={<SeniorCareLocation />} />
          <Route path="seniorcare/help-type/location/account" element={<SeniorCareAccount />} />
          <Route path="seniorcare/help-type/location/account/name" element={<SeniorCareName />} />
          <Route path="seniorcare/help-type/location/account/name/password" element={<SeniorCarePassword />} />
          <Route path="seniorcare/who-need-care" element={<WhoNeedCare />} />
          <Route path="seniorcare/who-need-care/describe" element={<WhoDescribe />} />
          <Route path="seniorcare/who-need-care/describe/help-type" element={<WhoNeedCareHelpType />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location" element={<WhoNeedCareLocation />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location/paytype" element={<WhoNeedCarePayType />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location/paytype/account" element={<WhoNeedCareAccount />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location/paytype/account/details" element={<WhoNeedCareName />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location/paytype/account/details/who-password" element={<WhoNeedCarePassword />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location/paytype/pay-question" element={<WhoNeedCarePayQue />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location/paytype/pay-question/account" element={<WhoNeedCarePayAccount />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location/paytype/pay-question/account/name" element={<WhoNeedCarePayName />} />
          <Route path="seniorcare/who-need-care/describe/help-type/location/paytype/pay-question/account/name/password" element={<WhoNeedCarePayPassword />} />
          <Route path="tutoring" element={<Tutoring />} />
          <Route path="tutoring/need" element={<TutorNeed />} />
          <Route path="tutoring/need/subject" element={<TutoringSubject />} />
          <Route path="tutoring/need/subject/location" element={<TutoringLocation />} />
          <Route path="tutoring/need/subject/location/type" element={<TutoringType />} />
          <Route path="tutoring/need/subject/location/type/account" element={<TutoringAccount />} />
          <Route path="tutoring/need/subject/location/type/account/name" element={<TutoringName />} />
          <Route path="housekeeper" element={<HouseKeepingNeed />} />
          <Route path="housekeeper/type" element={<HouseKeepingWhat />} />
          <Route path="housekeeper/type/task" element={<HouseKeepingWhatTask />} />
          <Route path="housekeeper/type/task/location" element={<HouseKeepingLocations />} />
          <Route path="housekeeper/type/task/location/account" element={<HouseKeepingAccount />} />
          <Route path="housekeeper/type/task/location/account/name" element={<HouseKeepingName />} />
          <Route path="housekeeper/type/task/location/account/name/password" element={<HouseKeepingPassword />} />
          <Route path="daycare" element={<DayCareLocation />} />
          <Route path="daycare/need" element={<DayCareNeed />} />
          <Route path="daycare/need/kind" element={<DayCareKind />} />
          <Route path="daycare/need/kind/who-care" element={<DayCareWhoNeed />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
