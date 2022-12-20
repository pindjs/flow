import { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'
import type { Options } from '@antv/x6/lib/graph/options'
import type { Designer } from './designer'

export interface IWorkspaceProps {
  graph?: Partial<Options.Manual>
}

export class Workspace {
  props: IWorkspaceProps
  graph: Graph

  dnd: Dnd
  constructor(public designer: Designer, props: IWorkspaceProps = {}) {
    this.props = {
      ...props,
      graph: {
        ...Workspace.deafultProps.graph,
        ...props.graph,
      },
    }
  }

  init(container: HTMLDivElement) {
    const graph = new Graph({
      ...this.props.graph,
      container,
    })
    this.graph = graph
    this.dnd = new Dnd({
      target: graph,
    })
  }

  static deafultProps: IWorkspaceProps = {
    graph: {
      grid: true,
    },
  }
}
