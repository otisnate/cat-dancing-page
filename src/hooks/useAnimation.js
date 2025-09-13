import { useState, useEffect } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [animationType, setAnimationType] = useState('dance')

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const startAnimation = () => {
    setIsAnimating(true)
  }

  const stopAnimation = () => {
    setIsAnimating(false)
  }

  const changeAnimationSpeed = (speed) => {
    setAnimationSpeed(speed)
  }

  const changeAnimationType = (type) => {
    setAnimationType(type)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isAnimating])

  return {
    isAnimating,
    animationSpeed,
    animationType,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeAnimationSpeed,
    changeAnimationType
  }
}