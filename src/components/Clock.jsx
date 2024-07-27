import React from 'react'

export default function Clock() {

    const time = new Date();
    const m = time.getMinutes();
    const h = time.getHours();
    const s = time.getSeconds();
  return (
    <div>
      <h1>{h}:{m}:{s}</h1>
    </div>
  )
}
