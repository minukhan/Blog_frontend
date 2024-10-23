import React, { useEffect, useState } from "react";
import * as SS from "../../styles/usersettings/settingsub.style";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserInputSelect({ voiceSelect, setVoiceSelect }) {
  // 음성 파일 수정 페이지로 이동
  const redirectVoicePage = "/";

  const [btnClick, setBtnClick] = useState(false);
  const voiceOptionOpen = (e) => {
    setBtnClick(!btnClick);
  };

  const changeOption = (opt) => {
    setVoiceSelect(opt);
  };

  useEffect(() => {}, [voiceSelect]);

  return (
    <div
      style={{
        width: 258,
        height: 29,
        justifyContent: "space-between",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 76,
          height: 29,
          display: "flex",
          alignItems: "center",
          color: "rgba(64, 86, 95, 0.50)",
          fontSize: 13,
          fontFamily: "Oxygen",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Voice
      </div>

      <div>
        <SS.select onClick={voiceOptionOpen}>
          {voiceSelect}
          <FaCaretDown color="#000000" size={"20px"} />
        </SS.select>
        <div
          className="voiceOption"
          style={{
            zIndex: "99",
            top: 5,
            position: "relative",
            display: btnClick ? "block" : "none",
          }}
        >
          <div
            style={{
              width: 163,
              height: 118,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#ECF0F3",
              boxShadow:
                "0px 5px 5.8px rgba(0, 0, 0, 0.18), inset 0px 4px 4px rgba(255, 255, 255, 0.55)",
              borderRadius: 16,
            }}
          >
            <Link to={redirectVoicePage}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  left: 132,
                  top: 9,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: 17.5,
                    height: 17.5,
                    left: 1.25,
                    top: 1.25,
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      width: 17.5,
                      height: 17.5,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      border: "1px #40565F solid",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 7.5,
                      height: 0,
                      left: 5,
                      top: 8.75,
                      position: "absolute",
                      border: "1px #40565F solid",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 0,
                      height: 7.5,
                      left: 8.75,
                      top: 5,
                      position: "absolute",
                      border: "1px #40565F solid",
                    }}
                  ></div>
                </div>
              </div>
            </Link>
          </div>
          <div
            style={{
              width: 121,
              height: 103,
              left: 21,
              top: 6,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              role="button"
              onClick={() => changeOption("MYVOICE")}
              style={{
                alignSelf: "stretch",
                color: "#40565F",
                fontSize: 15,
                fontFamily: "Oxygen",
                fontWeight: "300",
                wordWrap: "break-word",
                cursor: "pointer",
              }}
            >
              My Voice
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 0,
                border: "1px rgba(0, 0, 0, 0.50) solid",
              }}
            ></div>
            <div
              role="button"
              onClick={() => changeOption("WOMAN")}
              style={{
                alignSelf: "stretch",
                color: "#40565F",
                fontSize: 15,
                fontFamily: "Oxygen",
                fontWeight: "300",
                wordWrap: "break-word",
                cursor: "pointer",
              }}
            >
              Woman
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 0,
                border: "1px rgba(0, 0, 0, 0.50) solid",
              }}
            ></div>
            <div
              role="button"
              onClick={() => changeOption("MAN")}
              style={{
                alignSelf: "stretch",
                color: "#40565F",
                fontSize: 15,
                fontFamily: "Oxygen",
                fontWeight: "300",
                wordWrap: "break-word",
                cursor: "pointer",
              }}
            >
              Man
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 0,
                border: "1px rgba(0, 0, 0, 0.50) solid",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInputSelect;
