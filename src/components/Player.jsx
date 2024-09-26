import { useState } from 'react'

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleChangeName(event) {
    setPlayerName(event.target.value)
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>
  if (isEditing) {
    editablePlayerName = (
      <input
        type='text'
        required
        value={playerName}
        onChange={handleChangeName}
      />
    )
  }

  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
