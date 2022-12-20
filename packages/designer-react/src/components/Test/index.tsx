import { Designer } from '@pind/flow-designer-core'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'

export const Test = () => {
  const designer = useMemo(() => {
    return new Designer({})
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    designer.init(ref.current)
  }, [designer])

  return (
    <div
      ref={ref}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    ></div>
  )
}
