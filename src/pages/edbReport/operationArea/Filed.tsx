import React, { Component } from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { Tree } from 'antd';
const { TreeNode } = Tree;
// #region types
type Props = {
  title: string;
  key: string;
  level: number;
  isLeaf?: boolean;
  children?: any;
};
type State = any;
// #endregion
const spec = {
  beginDrag(props: any, monitor: any, component: any) {},
  endDrag(props: any, monitor: any, component: any) {}
  //   canDrag(props: any, monitor: any) {
  //     return true;
  //   },
  //   isDragging(props: any, monitor: any) {}
};

const collect = (connect: any, monitor: any) => ({
  connectDropTarget: connect.dropTarget(),
  id: monitor.getItem().id
});
function Filed(props: Props) {
  const { title } = props;
  const [{ isDragging }, drag] = useDrag({
    item: { name: title, type: 'filed' },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ display: 'inline-block', opacity }}>
      {title}
    </div>
  );
}

export default Filed;
