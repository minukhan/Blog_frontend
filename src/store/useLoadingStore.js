import { create } from "zustand";
// 로딩 상태 관리 스토어
const useLoadingStore = create((set) => ({
  loadingSignal: false, // 신호 상태 (false: 기본 상태)
  setLoadingSignal: (value) => set({ loadingSignal: value }), // 신호 설정
}));

export default useLoadingStore;
