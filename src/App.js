import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Appoinment_booking_after_login from './component/appoinment_booking_after_login';
import Appoinment_booking_based_on_doctor from './component/appoinment_booking_based_on_doctor';
import Appoinment_booking_based_on_hospital from './component/appoinment_booking_based_on_hospital';
import Appoinment_booking_v1 from './component/appoinment_booking_v3-1';
import Appoinment_booking_v2 from './component/appoinment_booking_v3-2';
import Appoinment_booking_v3 from './component/appoinment_booking_v3-3';
import Appoinment_booking_without_login from './component/appoinment_booking_without_login';
import Comparition_lab from './component/comparition_lab';
import Doctor_consulatation from './component/doctor_consulatation';
import Doctor_consulatation_doctor_details_page from './component/doctor_consulatation_doctor_details_page';
import Doctor_consulatation_doctor_list from './component/doctor_consulatation_doctor_list';
import Doctor_login from './component/doctor_login';
import Doctor_profile from './component/doctor_profile';
import Doctor_register from './component/doctor_register';
import Emotional_wellbeing from './component/emotional_wellbeing';
import Emotional_wellbeing_detail from './component/emotional_wellbeing_detail';
import Emotional_wellbeing_list from './component/emotional_wellbeing_list';
import Eprescription from './component/e-prescription';
import Family_doctor from './component/family_doctor';
import Family_doctor_detail from './component/family_doctor_detail';
import Follow_Up_Consultation from './component/follow_Up_Consultation';
import Forgot_password from './component/forgot_password';
import Landing_page from './component/landing_page.js';
import Medicine_supply from './component/medicine_supply.js';
import Nursing from './component/nursing';
import Nursing_detail from './component/nursing_detail';
import Nursing_list_page from './component/nursing_list_page';
import Search_special from './component/search_special';
import VideoConsult from './component/videoConsult';
import VideoConsultV2 from './component/videoConsultV2';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/appoinment_booking_after_login" component={Appoinment_booking_after_login} />
          <Route path="/appoinment_booking_based_on_doctor" component={Appoinment_booking_based_on_doctor} />
          <Route path="/appoinment_booking_based_on_hospital" component={Appoinment_booking_based_on_hospital} />
          <Route path="/appoinment_booking_without_login" component={Appoinment_booking_without_login} />
          <Route path="/appoinment_booking_v3-1" component={Appoinment_booking_v1} />
          <Route path="/appoinment_booking_v3-2" component={Appoinment_booking_v2} />
          <Route path="/appoinment_booking_v3-3" component={Appoinment_booking_v3} />
          <Route path="/comparition_lab" component={Comparition_lab} />
          <Route path="/doctor_consulatation" component={Doctor_consulatation} />
          <Route path="/doctor_consulatation_doctor_details_page" component={Doctor_consulatation_doctor_details_page} />
          <Route path="/doctor_consulatation_doctor_list" component={Doctor_consulatation_doctor_list} />
          <Route path="/doctor_login" component={Doctor_login} />
          <Route path="/doctor_profile" component={Doctor_profile} />
          <Route path="/doctor_register" component={Doctor_register} />
          <Route path="/emotional_wellbeing_list" component={Emotional_wellbeing_list} />
          <Route path="/emotional_wellbeing" component={Emotional_wellbeing} />
          <Route path="/emotional_wellbeing_detail" component={Emotional_wellbeing_detail} />
          <Route path="/e-prescription" component={Eprescription} />
          <Route path="/family_doctor" component={Family_doctor} />
          <Route path="/family_doctor_detail" component={Family_doctor_detail} />
          <Route path="/follow_Up_Consultation" component={Follow_Up_Consultation} />
          <Route path="/forgot_password" component={Forgot_password} />
          <Route path="/landing_page" exact component={Landing_page} />
          <Route path="/medicine_supply" component={Medicine_supply} />
          <Route path="/nursing" component={Nursing} />
          <Route path="/nursing_detail" component={Nursing_detail} />
          <Route path="/nursing_list_page" component={Nursing_list_page} />
          <Route path="/search_special"  component={Search_special} />
          <Route path="/videoConsult" component={VideoConsult} />
          <Route path="/videoConsultV2" component={VideoConsultV2} />
        </Router>
      </div>
    );
  }
}

export default App;
