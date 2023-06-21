import { useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import TodoPage from './TodoPage';


function Routing() {
  const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate("/todo")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
      <Routes>
        <Route path='/' element={<SignupPage />}  />
        <Route path='/login' element={<LoginPage />}  />
        <Route path='/todo' element={<TodoPage />}  />
      </Routes>
  );
}
export default Routing;