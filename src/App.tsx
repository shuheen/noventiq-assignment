import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import NoPageFound from './pages/NoPageFound/NoPageFound';
import { TranslationProvider } from './providers/TranslationProvider';

function App() {
  return (
    <TranslationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </TranslationProvider>
  );
}

export default App;
