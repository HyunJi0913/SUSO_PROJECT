import React, { useState } from 'react';
import '../style/loginstyle.css';

function LoginForm({ onSignupClick }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('로그인 시도:', username, password);
    };

    return (
        <div className="login-container">
        <div className="cloud-icon">
                        <img src="/image/cloud.png" alt="Cloud Icon" />
                    </div>
            <div className="title">수화로 소통하는 수소</div>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username" className="form-label">사용자ID</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="아이디를 입력하세요"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="login-button">로그인</button>
                </div>
                <div className="links">
                    <a href="#" onClick={onSignupClick}>회원가입  </a>
                    <a href="#">아이디/비밀번호 찾기</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
