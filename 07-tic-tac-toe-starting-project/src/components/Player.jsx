import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setisEditing] = useState(false);

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setisEditing(true)}>Edit</button>
    </li>
  );
}
