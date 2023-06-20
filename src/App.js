import React, { useCallback } from 'react';
import {useEffect ,useState} from 'react'
import './App.css';


function App() {

  // Signup
  // 이메일,pw변수
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if(username.includes("@") && password.length >= 8) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [username, password])

  // 버튼의 기본상태를 false로 둔다, 조건을 충족하면 true로 바꾼다

  console.log(valid)

  return (
  <div className='page'>
{/* 이메일 주소란 */}
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
        disabled={valid ? false : true}
        data-testid="signup-button">제출
        </button>

    </div>

    

    
    
    

    

  </div>
  
  );
}

export default App;
