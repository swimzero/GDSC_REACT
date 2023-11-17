import './App.css';
import { useState } from 'react';

function App() {
  let [modalstate, setModalstate] = useState(new Array(100).fill(false));
  let [goals, setGoals] = useState([]);
  let [inp, setInp] = useState('');

  return (
    <div className="App">
      <div className='nav'>
        <h4>일주일 안에 꼭 해야할 5가지</h4>
      </div>
      <div className='adder'>
        <h5>목표 설정칸</h5>
        <input value={inp} onChange={(e) => setInp(e.target.value)} />
        <button onClick={() => setGoals([...goals, inp])}>목표설정</button>
      </div>

      {goals.map(function (goal, index) {
        return (
          <div className='basic' key={index}>
            <h4>{goal}</h4>
            <p>일자</p>
            <p onClick={() => {
              let copy = [...modalstate];
              copy[index] = !copy[index];
              setModalstate(copy);
            }}>상세 목표</p>

            {modalstate[index] ? <Modal goal={goal} index={index} key={index} /> : null}
          </div>
        );
      })}
    </div>
  );
}

let Modal = (props) => {
  return (
    <div>
      <h4>{props.goal}</h4>
      <p>뭘 상세정보야 너 머릿속에 있어야지 너가 지키지</p>
    </div>
  );
}

export default App;
