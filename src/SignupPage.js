import {useEffect ,useState} from 'react'
import './css/App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignupPage() {

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
  
  
  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    axios.post("https://www.pre-onboarding-selection-task.shop/auth/signup", {
      email: username,
      password: password,
    })
    .then((res) => {
      console.log("회원가입 성공");
      navigate("/login");
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
  <div className='page'>

    <div className='contentWrap'>
      <div className='inputTitle'>이메일주소</div>
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
        data-testid="signup-button"
        type='submit'
        onClick={handleSignUpSubmit}
        disabled={valid ? false : true}
        >
        회원가입
        </button>
    </div>
  </div>
  
  );
}

export default SignupPage;



