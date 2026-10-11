import { useEffect, useRef } from 'react'

/* 3D hero background — zero dependencies, pure canvas.
   Rotating wireframe icosahedron + twinkling particle starfield. */
export default function Hero3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    /* ---------- icosahedron geometry ---------- */
    const PHI = (1 + Math.sqrt(5)) / 2
    const r0 = Math.sqrt(1 + PHI * PHI)
    const V = [
      [0, 1, PHI], [0, 1, -PHI], [0, -1, PHI], [0, -1, -PHI],
      [1, PHI, 0], [1, -PHI, 0], [-1, PHI, 0], [-1, -PHI, 0],
      [PHI, 0, 1], [PHI, 0, -1], [-PHI, 0, 1], [-PHI, 0, -1],
    ].map((p) => [p[0] / r0, p[1] / r0, p[2] / r0])

    const EDGES = []
    for (let i = 0; i < V.length; i++) {
      for (let j = i + 1; j < V.length; j++) {
        const dx = V[i][0] - V[j][0], dy = V[i][1] - V[j][1], dz = V[i][2] - V[j][2]
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 1.15) EDGES.push([i, j])
      }
    }

    /* ---------- starfield ---------- */
    const STARS = []
    for (let s = 0; s < 150; s++) {
      STARS.push({
        x: Math.random(), y: Math.random(),
        z: 0.25 + Math.random() * 0.75,
        ph: Math.random() * Math.PI * 2,
        sp: 0.4 + Math.random() * 0.8,
      })
    }

    let W = 0, H = 0
    const resize = () => {
      const DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas.clientWidth; H = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(W * DPR))
      canvas.height = Math.max(1, Math.floor(H * DPR))
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let mx = 0, my = 0, tx = 0, ty = 0
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const project = (p, ax, ay, f) => {
      const x1 = p[0] * Math.cos(ay) + p[2] * Math.sin(ay)
      const z1 = -p[0] * Math.sin(ay) + p[2] * Math.cos(ay)
      const y2 = p[1] * Math.cos(ax) - z1 * Math.sin(ax)
      const z2 = p[1] * Math.sin(ax) + z1 * Math.cos(ax)
      const s = f / (f + z2)
      return [x1 * s, y2 * s, s, z2]
    }

    // colorful palette: pink edges, warm glow
    const ACC = '255,62,165'

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H)
      if (W < 10 || H < 10) return

      const mobile = W < 960
      const cx = (mobile ? 0.5 : 0.72) * W + mx * 18
      const cy = (mobile ? 0.34 : 0.46) * H - my * 12
      const R = Math.min(W, H) * (mobile ? 0.2 : 0.24)
      const alpha = mobile ? 0.5 : 1

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 2.6)
      glow.addColorStop(0, 'rgba(' + ACC + ',' + (0.14 * alpha) + ')')
      glow.addColorStop(1, 'rgba(' + ACC + ',0)')
      ctx.fillStyle = glow
      ctx.fillRect(cx - R * 2.6, cy - R * 2.6, R * 5.2, R * 5.2)

      const ax = t * 0.28, ay = t * 0.38, f = 3.2
      const pts = V.map((p) => {
        const q = project(p, ax, ay, f)
        return [cx + q[0] * R, cy + q[1] * R, q[3]]
      })

      ctx.lineWidth = 1
      for (const [ia, ib] of EDGES) {
        const a = pts[ia], b = pts[ib]
        const depth = (a[2] + b[2]) / 2
        const o = (0.55 - depth * 0.32) * alpha
        ctx.strokeStyle = 'rgba(' + ACC + ',' + o.toFixed(3) + ')'
        ctx.beginPath()
        ctx.moveTo(a[0], a[1])
        ctx.lineTo(b[0], b[1])
        ctx.stroke()
      }

      for (const p of pts) {
        const vo = (0.9 - p[2] * 0.4) * alpha
        ctx.fillStyle = 'rgba(255,150,200,' + vo.toFixed(3) + ')'
        ctx.beginPath()
        ctx.arc(p[0], p[1], 2, 0, Math.PI * 2)
        ctx.fill()
      }

      for (const st of STARS) {
        const sx = ((st.x + t * 0.004 * st.sp) % 1) * W
        const sy = st.y * H
        const tw = 0.35 + 0.3 * Math.sin(t * st.sp + st.ph)
        ctx.fillStyle = 'rgba(220,190,220,' + (tw * st.z * alpha).toFixed(3) + ')'
        ctx.beginPath()
        ctx.arc(sx, sy, st.z * 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const start = performance.now()
    let raf = 0
    const frame = (now) => {
      raf = requestAnimationFrame(frame)
      mx += (tx - mx) * 0.04
      my += (ty - my) * 0.04
      draw((now - start) / 1000)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas id="hero-3d" ref={canvasRef} aria-hidden="true" />
}
