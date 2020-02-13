import React, { Component } from 'react';
import { Tree, Icon } from 'antd';
import { AntTreeNode } from 'antd/lib/tree';
import Filed from './Filed';
const { TreeNode } = Tree;

// #region types
type TreeNodeType = {
  title: string;
  key: string;
  level: number;
  isLeaf?: boolean;
  children?: Array<TreeNodeType>;
};
type Props = any;
type State = { treeData: Array<TreeNodeType> };
// #endregion

export default class ListTree extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      treeData: [
        { title: '非资项目', key: '0', level: 0 },
        { title: '其他台账主题', key: '1', level: 0 }
      ]
    };
  }
  render() {
    return (
      <Tree showIcon loadData={this.onLoadData}>
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    );
  }
  renderTreeNodes = (data: Array<TreeNodeType>) =>
    data.map(item => {
      let icon = null;
      switch (item.level) {
        case 0:
          icon = <Icon type='file-text' />;
          break;
        case 1:
          icon = <Icon type='book' />;
          break;
        case 2:
          icon = <Icon type='number' />;
          break;
        default:
          break;
      }
      if (item.children) {
        return (
          <TreeNode
            title={item.title}
            key={item.key}
            dataRef={item}
            icon={icon}
          >
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      const titleNode = item.isLeaf ? <Filed {...item} /> : item.title;
      return (
        <TreeNode
          key={item.key}
          {...item}
          dataRef={item}
          icon={icon}
          title={titleNode}
        />
      );
    });
  onLoadData = (treeNode: AntTreeNode) =>
    new Promise((resolve: (value: void) => void) => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        let isLeaf = false;
        if (treeNode.props.level >= 1) {
          isLeaf = true;
        }
        treeNode.props.dataRef.children = [
          {
            title: '财务指标',
            key: `${treeNode.props.eventKey}-0`,
            level: treeNode.props.level + 1,
            isLeaf
          },
          {
            title: '抵质押物',
            key: `${treeNode.props.eventKey}-1`,
            level: treeNode.props.level + 1,
            isLeaf
          }
        ];
        this.setState(
          {
            treeData: [...this.state.treeData]
          },
          () => {
            console.log(this.state);
          }
        );
        resolve();
        return;
      }, 1000);
    });
  onSelect = () => {};
  onCheck = () => {};
}
