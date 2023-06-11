import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './screens/LandingPage';
import Gyms from './screens/Gyms';
import Show from './screens/Show';
import New from './screens/New';
import Edit from './screens/Edit';
import axios from 'axios';
import Boilerplate from './partials/Boilerplate';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Boilerplate />}>
          <Route path="/gyms" element={<Gyms />} />
          <Route path="/gyms/new" element={<New />} />
          <Route path="/gyms/:gymid" element={<Show />} />
          <Route path="/gyms/:gymid/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
