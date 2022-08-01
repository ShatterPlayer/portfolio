import React, { useEffect } from 'react'

function AppWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    dispatchEvent(new Event('componentsmounted'))
  }, [])

  return <>{children}</>
}

export default AppWrapper
