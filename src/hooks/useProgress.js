import { useState, useEffect } from "react";

const useProgress = (selectedMusicRef) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (selectedMusicRef.current) {
      const audio = selectedMusicRef.current;

      const updateProgress = () => {
        setCurrentTime(audio.currentTime);
        // 오디오가 아직 로드되지 않았으면 duration을 0으로 처리
        if (!isNaN(audio.duration) && audio.duration > 0) {
          const newPercentage = Math.floor(
            (audio.currentTime / audio.duration) * 100
          );
          setPercentage(newPercentage);
        }
      };

      const updateDuration = () => {
        setDuration(audio.duration); // 오디오가 로드된 후 duration 설정
      };

      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", updateDuration); // 메타데이터 로드 시 duration 값 반영

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, [selectedMusicRef]);

  const handleProgressClick = (e) => {
    const audio = selectedMusicRef.current;
    const { duration } = audio;
    if (isNaN(duration) || duration === 0) return;
    const clickX = e.nativeEvent.offsetX;
    const width = e.currentTarget.clientWidth;
    audio.currentTime = (clickX / width) * duration;
  };
  const handleTimeUpdate = () => {
    const currentTime = selectedMusicRef.current.currentTime;
    const duration = selectedMusicRef.current.duration;
    setCurrentTime(currentTime);
    setPercentage((currentTime / duration) * 100);
  };
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return {
    currentTime,
    duration,
    percentage,
    handleTimeUpdate,
    handleProgressClick,
    formatTime,
  };
};

export default useProgress;
