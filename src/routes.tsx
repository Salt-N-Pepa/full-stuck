import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorPage from './Pages/ErrorPage';

const MainRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/error' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export { MainRoutes }