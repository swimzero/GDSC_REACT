import './App.css';
import { useState } from 'react';

function App() {
  let [modalState, setModalState] = useState([]);
  let [goals, setGoals] = useState([]);
  let [inp, setInp] = useState('');
  let [detailInp, setDetailInp] = useState('');

  const handleGoalSubmit = () => {
    if (inp.trim() !== '') {
      const newGoal = { text: inp, detail: detailInp, date: new Date() };
      setGoals([...goals, newGoal]);
      setInp('');
      setDetailInp('');
    }
  };

  return (
    <div className="App">
      <div className='nav'>
        <h4>ToDo List</h4>
      </div>
      <div className='adder'>
        <h5>목표를 설정하세요</h5>
        <input value={inp} onChange={(e) => setInp(e.target.value)}
        placeholder='목표 입력' />
        <input
          value={detailInp}
          onChange={(e) => setDetailInp(e.target.value)}
          placeholder="상세 입력"
        />
        <button onClick={handleGoalSubmit}>목표설정</button>
      </div>

      {goals.map(function (goal, index) {
        return (
          <div className='basic' key={index}>
            <h4>{goal.text}</h4>
            <p>작성일: {goal.date.toLocaleDateString()}</p>
            <p onClick={() => {
              setModalState(prevState => ({
                ...prevState,
                [index]: !prevState[index]
              }));
            }}>상세 목표</p>

            {modalState[index] ? <Modal goal={goal} key={index} /> : null}
          </div>
        );
      })}
    </div>
  );
}

let Modal = (props) => {
  return (
    <div>
      <h4>상세목표</h4>
      <p>{props.goal.detail}</p>
    </div>
  );
}

export default App;
