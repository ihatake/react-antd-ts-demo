import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
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
          <Row className={styles.content}>
            <Col span={5} className={styles.leftModule}>
              <OperationArea />
            </Col>
            <Col span={14} className={styles.centerModule}>
              <ExhibitionArea />
            </Col>
            <Col span={5} className={styles.rightModule}>
              <RecentlyOpen />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

EdbReport.displayName = 'EdbReport';

export default EdbReport;
