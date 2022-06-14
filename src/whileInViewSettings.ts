import { Variants } from 'framer-motion'

export const viewport = {
  once: true,
  amount: 0.5,
}

export const movementVariants: Variants = {
  hidden: (xOffset: number) => ({
    x: xOffset,
  }),
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
}

export const opacityVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
