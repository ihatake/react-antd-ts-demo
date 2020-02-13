import React, { useState } from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import { useDrop } from 'react-dnd';
// import { DropTarget } from 'react-dnd';
import styles from './style.module.scss';

// #region types
type Props = any;
// #endregion
function Selfieldlist(props: Props) {
  const [list, setList] = useState<any[]>([]);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'filed',
    drop: item => {
      console.log(item);
      setList([...list, item]);
      return { name: 'Dustbin' };
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  let backgroundColor = '#fff';
  props.setTip('');
  if (isActive) {
    backgroundColor = '#faad14';
    props.setTip('拖拽到这');
  } else if (canDrop) {
    backgroundColor = '#faad14';
    props.setTip('拖拽到这');
  }
  return (
    <div ref={drop} style={{ height: '100%', backgroundColor }}>
      {list.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}
    </div>
  );
}
function SeniorConfig(props: Props) {
  const [tip, setTip] = useState('');
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <SplitPane
        split='horizontal'
        minSize={50}
        defaultSize={300}
        primary='second'
        pane1Style={{ overflow: 'hidden' }}
      >
        <div className={styles.edr_topbox}>
          <div className={styles.edr_fieldconfig}>
            <div className={styles.edr_boxtitle}>字段设置</div>
            <div className={styles.esr_selfieldlist}>
              <Selfieldlist setTip={setTip} />
              {tip && <div className={styles.esr_tip}>{tip}</div>}
            </div>
          </div>
        </div>
        <div className={styles.edr_bottombox}>
          <div className={styles.edr_boxtitle}>可视化设置</div>
        </div>
      </SplitPane>
    </div>
  );
}

SeniorConfig.displayName = '高级配置区';

export default compose<any>()(SeniorConfig);
