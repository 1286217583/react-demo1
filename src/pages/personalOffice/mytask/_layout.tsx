import styles from './index.less';
import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';

import {
  UserOutlined,
  TeamOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

type myTaskProps = {
  location: { pathname: string };
};

const Mytask: React.FC<myTaskProps> = (props) => {
  const {
    location: { pathname },
  } = props;

  const [showComponent, setShowComponent] = useState<number>(1);

  return (
    <div className={styles.personalOffice}>
      <div>
        <Menu
          className={styles.leftMenu}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={'inline'}
          theme={'light'}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/personalOffice/mytask/task">我的任务</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to="/personalOffice/mytask/process">组任务</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<FieldTimeOutlined />}>
            <Link to="/personalOffice/mytask/give">历史任务</Link>
          </Menu.Item>
        </Menu>
      </div>

      <div className={styles.rightContent}>{props.children}</div>
    </div>
  );
};

export default Mytask;
