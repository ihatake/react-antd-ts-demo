import React from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { Input, Select, Icon } from 'antd';
const { Option } = Select;
// #region types
type Props = {} & RouteComponentProps;
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
    <div style={{ height: '100%' }}>
      <div>
        <div>
          <Input
            addonBefore={InputBefore}
            addonAfter={InputAfter}
            defaultValue=''
          />
        </div>
        <div>字段列表</div>
      </div>
      <div>
        <div>待选范围</div>
      </div>
      <div>高级设置</div>
      <div>快捷搜索</div>
    </div>
  );
}

EditReportConfig.displayName = '编辑报表配置区';

export default compose<any>()(EditReportConfig);
