import { Designer } from '@pind/flow-designer-core'
import React, { PropsWithChildren } from 'react'
import { DesignerContext } from '../../context'
import { WorkspaceContainer } from '../WorkspaceContainer'

export interface IDesignerContainerProps {
  designer: Designer
}

export const DesignerContainer: React.FC<
  PropsWithChildren<IDesignerContainerProps>
> = (props) => {
  return (
    <DesignerContext.Provider value={props.designer}>
      {props.designer.workspaces.map((workspace, index) => {
        return (
          <WorkspaceContainer
            key={index}
            workspace={workspace}
          ></WorkspaceContainer>
        )
      })}
    </DesignerContext.Provider>
  )
}
