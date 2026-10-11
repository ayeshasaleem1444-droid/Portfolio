import { useEffect } from 'react'

/* Ambient cursor glow that follows the mouse (fine pointers only) */
export function CursorGlow() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const glow = document.createElement('div')
    glow.className = 'cursor-glow'
    document.body.appendChild(glow)

    let raf = 0
    let x = -500, y = -500, cx = -500, cy = -500
    const onMove = (e) => { x = e.clientX; y = e.clientY }
    const loop = () => {
      raf = requestAnimationFrame(loop)
      cx += (x - cx) * 0.12
      cy += (y - cy) * 0.12
      glow.style.transform = `translate(${cx - 180}px, ${cy - 180}px)`
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      glow.remove()
    }
  }, [])

  return null
}

/* Buttons subtly pull toward the cursor */
export function MagneticButtons() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const btns = Array.from(document.querySelectorAll('.btn'))
    const cleanups = btns.map((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        btn.style.transform = `translate(${(dx * 0.16).toFixed(1)}px, ${(dy * 0.24).toFixed(1)}px)`
      }
      const onLeave = () => { btn.style.transform = '' }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
      return () => {
        btn.removeEventListener('mousemove', onMove)
        btn.removeEventListener('mouseleave', onLeave)
      }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}
