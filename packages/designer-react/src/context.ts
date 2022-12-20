import { Workspace, Designer } from '@pind/flow-designer-core'
import { createContext } from 'react'

export const WorkspaceContext = createContext<Workspace | null>(null)
export const DesignerContext = createContext<Designer | null>(null)
