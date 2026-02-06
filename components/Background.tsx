"use client"

export default function Background() {
  return (
    <div aria-hidden className="bg-orbs">
      <div className="orb teal" style={{ width: 420, height: 420, left: '-10%', top: '10%', animationDuration: '18s' }} />
      <div className="orb pink" style={{ width: 320, height: 320, right: '-5%', top: '30%', animationDuration: '22s' }} />
      <div className="orb teal" style={{ width: 260, height: 260, left: '20%', bottom: '-10%', animationDuration: '16s' }} />
      <div className="orb pink" style={{ width: 180, height: 180, right: '20%', bottom: '5%', animationDuration: '20s' }} />
    </div>
  )
}
