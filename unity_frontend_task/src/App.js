
import './App.css';
import { Route, Routes } from 'react-router';
import DashboardLayout from './dashboard-layout/dashboard-layout';
import Feature from './pages/feature';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout />}>
       

      </Route>
    </Routes>
  );
}

export default App;
