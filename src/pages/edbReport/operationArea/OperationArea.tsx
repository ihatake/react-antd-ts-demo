import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import { Tabs } from 'antd';
import EditReportConfig from './EditReportConfig';
import SeniorConfig from './SeniorConfig'
import ReportList from './ReportList';
import styles from './style.module.scss';
// const {  } = Tabs;

// #region types
type Props = {} & RouteComponentProps;
// #endregion

function OperationArea(props: Props) {
  const tabList = [
    { title: '编辑报表', component: EditReportConfig },
    { title: '系统报表', component: ReportList },
    { title: '个人报表', component: ReportList }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRightHide, setIsRightHide] = useState(true);
  return (
    <>
      <div className={styles.left}>
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
          {tabList.map(
            (tab, i) =>
              i === activeIndex && (
                <tab.component
                  key={i}
                  setIsRightHide={setIsRightHide}
                  isRightHide={isRightHide}
                />
              )
          )}
        </div>
      </div>
      <div className={[styles.right, isRightHide ? styles.hide : ''].join(' ')}>
        <SeniorConfig/>
      </div>
    </>
  );
}

OperationArea.displayName = '操作区';

export default OperationArea;
