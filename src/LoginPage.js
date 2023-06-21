import {useEffect ,useState} from 'react'
import axios from 'axios'
import './css/App.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  // Signup
  // 이메일,pw변수
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(username.includes("@") && password.length >= 8) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [username, password])

  const loginSumit = async (event) => {
    event.preventDefault();

    await axios.post("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      email: username,
      password: password,
    })
    .then((res) => {
      window.localStorage.setItem("token", res.data.access_token);
      console.log(localStorage);

      navigate("/todo");
    })
    .catch((err) => {
      console.log("로그인 실패")
    });
  };

  
return (
  
  <div className='page'>
{/* 이메일 주소란 */}
    <div className='contentWrap'>
      <div className='inputTitle'>메일주소</div>
        <div className='inputWrap'>
          <input 
            className='input'
            placeholder='test@gmail.com'
            value={username}
            type='text'
            data-testid="email-input"
            name='message'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
          <div className='errMsgWrap'>
            "@"를 포함한 이메일을 입력해주세요
          </div>
        
{/* pw 입력란 */}
      <div style={{marginTop:"26px"}} className='inputTitle'>비밀번호</div>
        <div className='inputWrap'>
          <input 
            className='input'
            placeholder='8자 이상'
            value={password}
            type='text'
            name='message'
            data-testid="password-input" 
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className='errMsgWrap'>
          8자 이상 입력해주세요
        </div>
        
        <button
        type='submit'
        onClick={loginSumit}
        disabled={valid ? false : true}
        data-testid="signup-button">로그인
        </button>

    </div>
  </div>
  );
}

export default LoginPage;
