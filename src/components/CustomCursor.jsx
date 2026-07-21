import { useEffect, useRef } from 'react'

const logoStyles = ['display-acid', 'serif-pink', 'mono-white', 'outline-ice', 'serif-wine']

export default function CustomCursor() {
  const starRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const star = starRef.current
    const logo = logoRef.current
    const finePointer = window.matchMedia('(pointer: fine)')

    if (!star || !logo || !finePointer.matches) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let logoX = 0
    let logoY = 0
    let targetX = 0
    let targetY = 0
    let frameId = 0
    let styleIndex = 0

    const render = () => {
      const easing = reducedMotion ? 1 : 0.17
      logoX += (targetX - logoX) * easing
      logoY += (targetY - logoY) * easing

      star.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
      logo.style.transform = `translate3d(${logoX}px, ${logoY - 58}px, 0)`
      frameId = window.requestAnimationFrame(render)
    }

    const show = () => {
      star.classList.add('is-visible')
      logo.classList.add('is-visible')
    }

    const hide = () => {
      star.classList.remove('is-visible')
      logo.classList.remove('is-visible')
    }

    const handleMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY

      if (!star.classList.contains('is-visible')) {
        logoX = targetX
        logoY = targetY
      }

      show()
    }

    const handleDown = () => {
      star.classList.add('is-pressed')
      logo.classList.add('is-pressed')
    }

    const handleUp = () => {
      star.classList.remove('is-pressed')
      logo.classList.remove('is-pressed')
    }

    const styleTimer = window.setInterval(() => {
      styleIndex = (styleIndex + 1) % logoStyles.length
      logo.dataset.style = logoStyles[styleIndex]
    }, 1000)

    logo.dataset.style = logoStyles[styleIndex]
    frameId = window.requestAnimationFrame(render)
    window.addEventListener('pointermove', handleMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', hide)
    window.addEventListener('blur', hide)
    window.addEventListener('pointerdown', handleDown)
    window.addEventListener('pointerup', handleUp)

    return () => {
      window.clearInterval(styleTimer)
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', handleMove)
      document.documentElement.removeEventListener('mouseleave', hide)
      window.removeEventListener('blur', hide)
      window.removeEventListener('pointerdown', handleDown)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [])

  return (
    <>
      <div className="custom-cursor-logo" ref={logoRef} aria-hidden="true"><span>MF</span></div>
      <div className="custom-cursor-star" ref={starRef} aria-hidden="true"><span>✦</span></div>
    </>
  )
}
