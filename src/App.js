import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import Modules from './pages/Modules';
import Features from './pages/Features';
import BusinessPlan from './pages/BusinessPlan';
import ActionPlan from './pages/ActionPlan';
import Payroll from './pages/Payroll';
import RoleManagement from './pages/RoleManagement';
import GetStarted from './pages/GetStarted';
import Header from './pages/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<GetStarted/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/modules" element={<Modules/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/business-plan" element={<BusinessPlan/>} />
        <Route path="/action-plan" element={<ActionPlan/>} />
        <Route path="/payroll" element={<Payroll/>} />
        <Route path="/role-management" element={<RoleManagement/>} />
      </Routes>
    </Router>
  );
};

export default App;