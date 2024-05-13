import React from 'react';
import '../style/signupstyle.css';

function SignupForm({ onBackClick }) {
    return (
        <div className="signup-container">
            <h4 className="title">회원가입</h4>
            <form className="signup-form">
                {/* 실제 회원가입 필드 구현 */}
                <div className="form-group">
                    <label htmlFor="username">아이디</label>
                    <input type="text" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password1">비밀번호</label>
                    <input type="password" id="password1" />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">비밀번호 확인</label>
                    <input type="password" id="password2" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">이름</label>
                    <input type="text" id="name" />
                </div>
                <button type="submit" className="submit-button">가입하기</button>
                <button type="button" onClick={onBackClick}>뒤로 가기</button>
            </form>
        </div>
    );
}

export default SignupForm;
