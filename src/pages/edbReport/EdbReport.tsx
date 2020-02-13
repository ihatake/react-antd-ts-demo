import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './style.module.scss';
import RecentlyOpen from './recentlyOpen';
import ExhibitionArea from './exhibitionArea';
import OperationArea from './operationArea';

const { Content } = Layout;
// #region types
type Props = {} & RouteComponentProps;
// #endregion

function EdbReport(props: Props) {
  return (
    <>
      <Layout className={styles.layout}>
        <Content>
          <div className={styles.content}>
            <div className={styles.leftModule}>
              <OperationArea />
            </div>
            <div className={styles.centerModule}>
              <ExhibitionArea />
            </div>
            <div className={styles.rightModule}>
              <RecentlyOpen />
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}

EdbReport.displayName = 'EdbReport';

export default EdbReport;