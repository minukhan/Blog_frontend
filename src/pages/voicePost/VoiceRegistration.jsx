import { useState, useCallback } from "react";
import styled from "styled-components";
import { FaMicrophoneAlt } from "react-icons/fa";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { StyledBtn } from "../../styles/commonStyled";
import { REGISTRATION_VOICEID } from "../../api/narration";
import { DotLoader } from "react-spinners";
import AlertModal from "../../components/common/\bAlertModal";

const VoiceRegistration = () => {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true); // 녹음 중인지 여부를 나타내는 상태. true이면 녹음이 중지된 상태, false이면 녹음이 진행 중
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [modelingSrc, setModelingSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
  const onRecAudio = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  // 사용자가 음성 녹음을 중지했을 때
  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();
    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      console.log("녹음된 오디오 확인 가능:", URL.createObjectURL(audioUrl)); // 출력된 링크에서 녹음된 오디오 확인 가능
      // File 생성자를 사용해 파일로 변환
      const sound = new File([audioUrl], "soundBlob", {
        lastModified: new Date().getTime(),
        type: "audio",
      });
      //   console.log(sound); // File 정보 출력

      // FormData 객체 생성 및 파일 추가
      const formData = new FormData();
      formData.append("voiceUrl", sound); // 'audioFile'은 서버에서 받을 때 사용할 필드명입니다.

      setLoading(true);
      REGISTRATION_VOICEID(formData)
        .then((data) => {
          console.log("modelingFile", data);
          setModelingSrc(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // alert("녹음을 먼저 진행해주세요");
      handleOpenAlert();
    }
  }, [audioUrl]);

  return (
    <Wrap>
      {isAlertOpen && (
        <AlertModal
          message="녹음을 먼저 진행해주세요"
          onClose={handleCloseAlert}
        />
      )}
      <Main>
        <IconBtn onClick={onRec ? onRecAudio : offRecAudio}>
          {onRec ? (
            <FaMicrophoneAlt size={18} color="#fff" />
          ) : (
            <TbPlayerPauseFilled size={18} color="#fff" />
          )}
        </IconBtn>

        {onRec ? (
          <p>버튼을 눌러 녹음을 시작하세요</p>
        ) : (
          <p>녹음이 완료되었다면 모델링을 시작해주세요</p>
        )}
      </Main>

      <StyledBtn onClick={onSubmitAudioFile}>모델링 실행</StyledBtn>

      {loading && (
        <div style={{ padding: "20px" }}>
          <DotLoader size={50} />
        </div>
      )}

      {/* 모델링 결과 */}
      {/* 녹음된 오디오 재생 */}
      {modelingSrc && (
        <audio controls>
          <source src={modelingSrc} type="audio/webm" />
          Your browser does not support the audio element.
        </audio>
      )}

      <ScriptWrap>
        <b>&quot;틈새&quot;</b>에서는 회원님의 목소리를 AI가 분석해 모델링한 후
        블로그 글을 읽어줄 때 사용해요. 간단히{" "}
        <b>
          <span style={{ color: "var(--red)" }}>목소리를 녹음</span>
        </b>
        해 주시면 앞으로 회원님의 목소리로 게시글을 들을 수 있게 됩니다. AI가
        분석한 회원님의 목소리로 더 특별한 청취 경험을 즐겨보세요!
      </ScriptWrap>
    </Wrap>
  );
};

export default VoiceRegistration;

const Wrap = styled.div`
  background-color: white;
  border: 1px solid var(--black);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 18px;
  border-radius: 16px;
`;

const IconBtn = styled.button`
  background-color: var(--deep-gray);
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ScriptWrap = styled.div`
  font-size: 14px;
  line-height: 1.8;
  text-align: center;

  b {
    font-weight: 700;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
