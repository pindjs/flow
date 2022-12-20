import { Workspace } from '@pind/flow-designer-core'
import React, { PropsWithChildren } from 'react'
import { WorkspaceContext } from '../../context'
import { CanvasWidget, NodeWidget } from '../../widgets'

export interface IWorkspaceContainerProps {
  workspace: Workspace
}

export const WorkspaceContainer: React.FC<
  PropsWithChildren<IWorkspaceContainerProps>
> = (props) => {
  return (
    <WorkspaceContext.Provider value={props.workspace}>
      <div>
        <NodeWidget />
        <CanvasWidget></CanvasWidget>
      </div>
    </WorkspaceContext.Provider>
  )
}
