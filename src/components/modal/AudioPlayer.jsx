import { useRef, useState } from "react";
import * as S from "../../styles/modal/AudioPlayer.style";
import useProgress from "../../hooks/useProgress";
const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedMusicRef = useRef(null); // 오디오 엘리먼트를 참조
  const {
    currentTime,
    duration,
    percentage,
    setCurrentTime,
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
  // 10초 앞으로 이동
  const forwardTenSeconds = () => {
    selectedMusicRef.current.currentTime += 10;
  };

  // 10초 뒤로 이동
  const backwardTenSeconds = () => {
    selectedMusicRef.current.currentTime -= 10;
  };

  return (
    <>
      <S.PlayerContainer>
        <audio
          ref={selectedMusicRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          controls
          hidden
        />{" "}
        {/* 오디오 엘리먼트 */}
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
        <S.PrevButton onClick={backwardTenSeconds} />
        <S.ControlButton onClick={togglePlayPause} />
        <S.NextButton onClick={forwardTenSeconds} />
      </S.ButtonGroup>
    </>
  );
};

export default AudioPlayer;
