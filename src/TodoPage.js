import React, {useState} from 'react';
import './css/TodoPage.css'
import TodoBoard from './components/TodoBoard';


// 1. 인풋창이 있고 버튼이 있음
// 2. 인풋창에 값을 입력하고 버튼 클릭하면 아이템이 추가됨
// 3. 아이템 삭제버튼 누르면 삭제됨

function TodoPage() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
  
    setTodoList([...todoList, inputValue])
  }

  return (
    <main>
      <input 
        value={inputValue} 
        type='text' 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick= {addItem}>추가</button>
      
      <TodoBoard todoList={todoList}/>
    </main>


  )
}

export default TodoPage;