import React from "react";

function UserInputBar({ newName, setNewName, inputName }) {
  const changeName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div
      style={{
        width: 258,
        height: 29,
        justifyContent: "space-between",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 76,
          height: 17,
          color: "rgba(64, 86, 95, 0.50)",
          fontSize: 13,
          fontFamily: "Oxygen",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {inputName}
      </div>
      <input
        onChange={(e) => changeName(e)}
        value={newName}
        style={{
          boxSizing: "border-box",
          width: 170,
          height: 29,
          background: "#F4F4F4",
          boxShadow: "6px 6px 16px rgba(0, 0, 0, 0.15) inset",
          borderRadius: 54,
          border: "1px #FEFDFD solid",
        }}
      ></input>
    </div>
  );
}

export default UserInputBar;
