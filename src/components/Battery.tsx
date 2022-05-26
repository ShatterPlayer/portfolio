import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import BatteryImg from '../images/battery.svg'
import BatteryFullImg from '../images/battery-full.svg'

const BatteryContainer = styled.span`
  position: relative;
  display: inline-block;
  background-image: url(${BatteryImg});
  background-size: 100% 100%;
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

function Battery({ children }: Props) {
  return (
    <BatteryContainer>
      {children}
      <VisibilityContainer
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
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
