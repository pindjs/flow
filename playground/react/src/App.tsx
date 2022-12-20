import React, { useMemo } from 'react'
import { DesignerContainer } from '@pind/flow-designer-react'
import { Designer } from '@pind/flow-designer-core'

function App() {
  const designer = useMemo(() => {
    return new Designer()
  }, [])

  return <DesignerContainer designer={designer}></DesignerContainer>
}

export default App
