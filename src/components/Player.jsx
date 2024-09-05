import React from "react";
import { useState } from "react";

const Player = ({ initialName, sybmol, isActive, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [initName, setInitName] = useState(initialName);


  const handleEditClick = () => {
    // setIsEditing(isEditing ? false : true);  // we can do the same by setIsEditing(!isEditing );
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(sybmol, initName);
    }
  };

  const handleChange = (e) => {
    setInitName(e.target.value);
  };
  let playerName = <span className="player-name">{initName}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        placeholder="Enter Player Name"
        value={initName}
        onChange={handleChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol"> {sybmol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
