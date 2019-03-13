import React from 'react';

export default function WinSound() {
  return (
    <audio autoPlay preload="auto">
      <source src={require("../assets/sounds/winning_slot.wav")} />
    </audio>
  )
}
