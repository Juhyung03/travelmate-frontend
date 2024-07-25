import React from 'react';
import kakao_login_image from '../assets/images/kakao_login_large_wide.png';
import { onKakaoLogin } from '../utils/api';

function Login() {
  return (
    <>
      <button onClick={onKakaoLogin}>
        <img src={kakao_login_image} alt='Kakao login' />
      </button>
    </>
  );
}

export default Login;
