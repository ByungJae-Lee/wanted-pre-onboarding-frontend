import axios from 'axios';
import {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';


function TodoPage() {
  let navigate = useNavigate();

  const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
  };
  const addInput = useRef();
  const editInput = useRef();

  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [completed, setCompleted] = useState(false);
  
  const todoAddButton = async (event) => {
    event.preventDefault();
  
    await axios.post(
      "https://www.pre-onboarding-selection-task.shop/todos",
      {
        todo: addInput.current.value,
        isCompleted: false,
      },
      token
      );

      addInput.current.value = "";

      axios
        .get("https://www.pre-onboarding-selection-task.shop/todos", token)
        .then((res) => setTodo(res.data))
        .catch((err) => console.log(err));
    };
    const handleEditToggle = (id) => {
      setEdit(!edit);
      setEditingId(id);
    }


    const handleIsCompleted = async (id) => {
      setCompleted(!completed);
      if (editInput.current.value === "") {
        alert("수정 내용을 입력하세요");
      } else {
          await axios.put(`https://www.pre-onboarding-selection-task.shop/todos/${id}`,
            {
              todo: editInput.current.value,
              isCompleted: completed,
            },
            token
        );
        setEdit(!edit);
      }
      axios
      .get("https://www.pre-onboarding-selection-task.shop/todos", token)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
    }

    const handleDeleteButton = async (id) => {
      await axios.delete(
        `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      token
      );
      axios
      .get("https://www.pre-onboarding-selection-task.shop/todos", token)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
    };

    useEffect(() => {
      if (!localStorage.getItem("token")) {
        navigate("/");
      } else {
      axios
      .get("https://www.pre-onboarding-selection-task.shop/todos", token)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
      <input data-testid="new-todo-input" ref={addInput} />
      <button data-testid="new-todo-add-button" onClick={todoAddButton}>
        추가
      </button>
      {todo.map((item) => {
        return (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                iscompleted={item.isCompleted.toString()}
              />
              {!edit || editingId !== item.id ? (
                <>
                  <span>{item.todo}</span>
                  <button
                    data-testid="modify-button"
                    onClick={() => handleEditToggle(item.id)}
                  >
                    수정
                  </button>
                  <button
                    data-testid="delete-button"
                    type="submit"
                    onClick={() => handleDeleteButton(item.id)}
                  >
                    삭제
                  </button>
                </>
              ) : (
                <>
                  <input
                    data-testid="modify-input"
                    type="text"
                    ref={editInput}
                  />
                  <button
                    data-testid="submit-button"
                    onClick={() => handleIsCompleted(item.id)}
                  >
                    제출
                  </button>
                  <button
                    data-testid="cancel-button"
                    onClick={handleEditToggle}
                  >
                    취소
                  </button>
                </>
              )}
            </label>
          </li>
        );
      })}
    </>
  );
}




export default TodoPage;