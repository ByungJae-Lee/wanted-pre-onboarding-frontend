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
  <div>
    <input 
      value={username}
      type='text'
      data-testid="email-input"
      name='message'
      onChange={(e) => {
        setUsername(e.target.value);
      }}
     />
    <input 
    value={password}
    type='text'
    name='message'
    data-testid="password-input" 
    onChange={(e) => {
      setPassword(e.target.value);
    }}
    />
    
  
    <button
    disabled={valid ? false : true}
    
    data-testid="signup-button">제출
    
    </button>
    <button data-testid="signup-button">회원가입</button>

  </div>
  
  );
}

export default App;
