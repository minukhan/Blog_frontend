import { useRef, useState, useEffect } from "react";
import * as S from "../../styles/modal/AudioPlayer.style";
import useProgress from "../../hooks/useProgress";

const AudioPlayer = ({ src, playlistId }) => {
  // playlistId prop 추가
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedMusicRef = useRef(null);
  const {
    currentTime,
    duration,
    percentage,
    handleTimeUpdate,
    handleProgressClick,
    formatTime,
  } = useProgress(selectedMusicRef);

  const togglePlayPause = () => {
    if (selectedMusicRef.current.paused) {
      selectedMusicRef.current.play();
      setIsPlaying(true);
    } else {
      selectedMusicRef.current.pause();
      setIsPlaying(false);
    }
  };

  // duration 값을 로컬 스토리지에 저장
  useEffect(() => {
    if (duration) {
      localStorage.setItem(`audioDuration_${playlistId}`, Math.floor(duration)); // Math.ceil로 올림하여 저장
    }
  }, [duration, playlistId]);

  return (
    <>
      <S.PlayerContainer>
        <audio
          ref={selectedMusicRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          controls
          hidden
        />
        <S.TimeWrapper>
          <S.Time>{formatTime(currentTime)}</S.Time>
          <S.Time>{formatTime(duration)}</S.Time>
        </S.TimeWrapper>
        <S.ProgressBarContainer onClick={handleProgressClick}>
          <S.ProgressBar width={percentage}>
            <S.ProgressCircle />
          </S.ProgressBar>
        </S.ProgressBarContainer>
      </S.PlayerContainer>
      <S.ButtonGroup>
        <S.PrevButton
          onClick={() => (selectedMusicRef.current.currentTime -= 10)}
        />
        <S.ControlButton onClick={togglePlayPause} />
        <S.NextButton
          onClick={() => (selectedMusicRef.current.currentTime += 10)}
        />
      </S.ButtonGroup>
    </>
  );
};

export default AudioPlayer;
