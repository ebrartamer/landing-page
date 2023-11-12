import { useEffect, useRef } from 'react'
import { AnimationControls } from 'framer-motion'

type UseAnimationProps = {
  delay?: number
  duration?: number
  controls?: AnimationControls
}


const useAnimation = ({
  delay = 0,
  duration = 0.3,
  controls
}: UseAnimationProps = {}) => {
  const animationControls = controls || useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      animationControls.start('visible')
    }
  }, [animationControls])

  return {
    ref,
    controls: animationControls,
    variants: {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration
        }
      },
      hidden: {
        opacity: 0,
        y: 50
      }
    }
  }
}

export default useAnimation
