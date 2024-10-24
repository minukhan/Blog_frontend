import { useState } from "react";

// 커스텀 훅 정의
export const useSelect = (defaultOption) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  // 드롭다운 열기/닫기 토글
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // 옵션 선택 시 상태 업데이트
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedOption,
    toggleDropdown,
    selectOption,
  };
};
