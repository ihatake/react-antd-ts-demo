import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import { Tabs } from 'antd';
import EditReportConfig from './EditReportConfig';
import ReportList from './ReportList';
import styles from './style.module.scss';
// const {  } = Tabs;

// #region types
type Props = {} & RouteComponentProps;
// #endregion

// function OperationArea(props: Props) {
//   return (
//     <div style={{ height: '100%' }}>
//       <Tabs
//         defaultActiveKey='1'
//         size='small'
//         tabBarGutter={10}
//         tabBarStyle={{ margin: 0, height: '34px' }}
//         style={{ height: '100%' }}
//       >
//         <TabPane tab='编辑报表' key='1'>
//           <EditReportConfig />
//         </TabPane>
//         <TabPane tab='系统报表' key='2'>
//           Content of Tab Pane 2
//         </TabPane>
//         <TabPane tab='个人报表' key='3'>
//           Content of Tab Pane 3
//         </TabPane>
//       </Tabs>
//     </div>
//   );
// }
function OperationArea(props: Props) {
  const tabList = [
    { title: '编辑报表', component: EditReportConfig },
    { title: '系统报表', component: ReportList },
    { title: '个人报表', component: ReportList }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className={styles.tab_list}>
        {tabList.map((tab, i) => (
          <div
            className={i === activeIndex ? styles.tab_active : ''}
            onClick={() => setActiveIndex(i)}
            key={i}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className={styles.tab_content}>
        {tabList.map((tab, i) => i === activeIndex && <tab.component key={i}/>)}
      </div>
    </>
  );
}

OperationArea.displayName = '操作区';

export default OperationArea;
