import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null, // 사용자 정보를 저장할 상태 변수 추가
  setIsAuthenticated: (authStatus) => set({ isAuthenticated: authStatus }),
  setUser: (user) => set({ user }), // 사용자 정보를 설정하는 함수
  clearAuth: () => set({ isAuthenticated: false, user: null }), // 인증 상태와 사용자 정보 초기화
}));

export default useAuthStore;
