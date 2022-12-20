import React, { useEffect, useRef } from 'react'
import { useWorkspace } from '../../hooks'
import './style.less'

export const CanvasWidget: React.FC = () => {
  const workspace = useWorkspace()
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    workspace.init(divRef.current as HTMLDivElement)
  }, [workspace])
  return <div className="pf-canvas-widget" ref={divRef}></div>
}
