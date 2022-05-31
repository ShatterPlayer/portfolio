import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

function Battery({ children }: Props) {
  const { ref, inView } = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView])

  return (
    <BatteryContainer>
      {children}
      <VisibilityContainer
        ref={ref}
        variants={{
          hidden: {
            width: 0,
          },
          visible: {
            width: '100%',
          },
        }}
        initial="hidden"
        animate={controls}
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
