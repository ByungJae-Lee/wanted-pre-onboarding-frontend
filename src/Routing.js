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
        navigate("/TodoPage")
      }
    }, []);

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<SignupPage />}  />
        <Route path='/LoginPage' element={<LoginPage />}  />
        <Route path='/TodoPage' element={<TodoPage />}  />
      </Routes>

    </div>
  )
}

export default Routing;