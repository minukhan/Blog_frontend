import React from "react";

function UserUpdateButton({ func }) {
  return (
    <div
      style={{
        width: 142,
        height: 31,
        position: "absolute",
        bottom: 20,
      }}
    >
      <div
        role="button"
        onClick={func}
        style={{
          width: 142,
          height: 31,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#ECF0F3",
          boxShadow:
            "-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4)",
          borderRadius: 98,

          cursor: "pointer",
          color: "#40565F",
          fontSize: 15,
          fontFamily: "Oxygen",
          fontWeight: "700",
          textAlign: "center",
          lineHeight: 2,
          wordWrap: "break-word",
        }}
      >
        Update
      </div>
      {/* <div
        style={{
          left: 45,
          top: 6,
          position: "absolute",
          color: "#40565F",
          fontSize: 15,
          fontFamily: "Oxygen",
          fontWeight: "700",
          wordWrap: "break-word",
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        Update
      </div> */}
    </div>
  );
}

export default UserUpdateButton;
