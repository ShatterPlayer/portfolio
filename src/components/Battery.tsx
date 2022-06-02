import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

import BatteryImg from '../images/battery.png'
import BatteryFullImg from '../images/battery-full.png'

const BatteryContainer = styled.span`
  position: relative;
  display: inline-block;
  background-image: url(${BatteryImg});
  background-size: 100% 100%;
  line-height: 100px;
  padding-left: 15px;
  padding-right: 30px;
`

const BatteryFull = styled(BatteryContainer)`
  color: ${props => props.theme.colors.dark};
  background-image: url(${BatteryFullImg});
  position: absolute;
  top: 0;
  left: 0;
`

const VisibilityContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`

interface Props {
  children: string
}

const variants: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: '100%',
  },
}

const viewport = {
  once: true,
  amount: 1,
}

function Battery({ children }: Props) {
  return (
    <BatteryContainer>
      {children}
      <VisibilityContainer
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{
          duration: 3,
          ease: 'anticipate',
        }}
      >
        <BatteryFull>{children}</BatteryFull>
      </VisibilityContainer>
    </BatteryContainer>
  )
}

export default Battery
