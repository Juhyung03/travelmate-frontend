import React, { useEffect, useState } from 'react';
import { fetchUserInfo } from '../utils/api';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const data = await fetchUserInfo();
        setUserInfo(data);
      } catch (err) {
        setError(err);
      }
    };

    getUserInfo();
  }, []);

  if (error) {
    return <div className='text-red-500'>Error: {error}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-center'>
      <p className='text-lg'>{userInfo.nickname}님! 안녕하세요.</p>
      <p>Travel Mate에 오신 것을 환영합니다.</p>
      <p>국내 여행을 계획 중이신가요?</p>
      <p>
        여행을 떠날 지역, 기간, 취향을 알려주시면 자동으로 맞춤형 코스를 추천해
        드립니다.
      </p>
      <p>
        <img
          src={userInfo.profile_image}
          alt='Profile'
          className='w-40 h-40 rounded-full mx-auto'
        />
      </p>
    </div>
  );
};

export default UserInfo;
