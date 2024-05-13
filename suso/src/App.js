import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [showSignupForm, setShowSignupForm] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {!showSignupForm ? (
          <LoginForm onSignupClick={() => setShowSignupForm(true)} />
        ) : (
          <SignupForm onBackClick={() => setShowSignupForm(false)} />
        )}
      </header>
    </div>
  );
}

export default App;