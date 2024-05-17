import React from 'react';
import './App.css';
import LoginForm from '../main/templates/member/LoginForm'; // 경로 업데이트

function App() {
  return (
    <div className="App">
      <LoginForm /> // LoginForm 컴포넌트 렌더링
    </div>
  );
}

export default App;
