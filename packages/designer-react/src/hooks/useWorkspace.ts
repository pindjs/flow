import { Workspace } from '@pind/flow-designer-core'
import { useContext } from 'react'
import { WorkspaceContext } from '../context'

export function useWorkspace() {
  return useContext(WorkspaceContext) as Workspace
}
