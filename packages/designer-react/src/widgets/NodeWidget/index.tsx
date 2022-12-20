import React from 'react'
import { useWorkspace } from '../../hooks'

export const NodeWidget: React.FC = () => {
  const { graph, dnd } = useWorkspace()
  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // 该 node 为拖拽的节点，默认也是放置到画布上的节点，可以自定义任何属性
    const node = graph.createNode({
      width: 100,
      height: 40,
      label: 'Rect',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    })
    dnd.start(node, e.nativeEvent)
  }
  return <div onMouseDown={startDrag}>node</div>
}
