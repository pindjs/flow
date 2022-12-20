import { Workspace } from './workspace'
import type { Options } from '@antv/x6/lib/graph/options'

export interface IDesignerProps {
  graph?: Partial<Options.Manual>
}

export class Designer {
  workspaces: Workspace[] = []
  constructor() {
    this.workspaces = [new Workspace(this)]
  }

  addWorkspace() {
    this.workspaces.push(new Workspace(this))
  }
}
