import React from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { Input, Select, Icon } from 'antd';
import SplitPane from 'react-split-pane';
import styles from './style.module.scss';
import ListTree from './ListTree';
import RangeTree from './RangeTree';

const { Option } = Select;

// #region types
type Props = {
  isRightHide: boolean;
  setIsRightHide: (b: boolean) => void;
} & RouteComponentProps;
// #endregion

function EditReportConfig(props: Props) {
  const InputBefore = (
    <Select defaultValue='全部数据表' style={{ width: 90 }}>
      <Option value='全部数据表'>全部数据表</Option>
      <Option value='数据表1'>数据表1</Option>
    </Select>
  );
  const InputAfter = <Icon type='search' />;
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
          <div className={styles.edr_searchbox}>
            <Input
              addonBefore={InputBefore}
              addonAfter={InputAfter}
              defaultValue=''
            />
          </div>
          <div className={styles.edr_fieldbox}>
            <ListTree />
          </div>
        </div>
        <div className={styles.edr_bottombox}>
          <div className={styles.edr_rangebox}>
            <div className={styles.edr_boxtitle}>待选范围</div>
            <div>
              <RangeTree />
            </div>
          </div>
          <div
            className={[styles.edr_seniorbox, styles.edr_boxtitle].join(' ')}
          >
            高级设置
            <Icon
              type={props.isRightHide ? 'right' : 'left'}
              onClick={() => {
                props.setIsRightHide(!props.isRightHide);
              }}
            />
          </div>
          <div className={[styles.edr_quickbox, styles.edr_boxtitle].join(' ')}>
            快捷搜索
          </div>
        </div>
      </SplitPane>
    </div>
  );
}

EditReportConfig.displayName = '编辑报表配置区';

export default compose<any>()(EditReportConfig);
