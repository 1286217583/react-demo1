// 样式
import styles from './index.less';
// antd 组件
import { Layout, Menu } from 'antd';
import { useState, useContext } from 'react';

import { history, Link } from 'umi';

import { itemContext } from '@/layouts/index';

// icon
import {
  ContactsOutlined,
  ClusterOutlined,
  AlertOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

// ItemSiderProps 函数的porps数据定义
type ItemSiderProps = {
  isShowSider: boolean;
};

// 处理添加新用户fn
const handleUser: () => void = () => {
  history.push('/newUser');
};

const ItemSider: React.FC<ItemSiderProps> = (props) => {
  const { isShowSider } = props;
  const [showBtn, setShowBtn] = useState<boolean>(true);

  const { jurisdiction } = useContext(itemContext);

  return (
    <Sider trigger={null} collapsible collapsed={isShowSider}>
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {/* submenu1 */}
        <SubMenu key="sub1" icon={<ContactsOutlined />} title="个人办公">
          <Menu.Item key="1">
            <Link to="/">我的任务</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">我发起的流程</Link>
          </Menu.Item>
          <Menu.Item key="3">我的抄送</Menu.Item>
        </SubMenu>

        {/* submenu2 */}
        <SubMenu key="sub2" icon={<ClusterOutlined />} title="业务办理">
          <Menu.Item key="4">出差申请</Menu.Item>
          <Menu.Item key="5">请假申请</Menu.Item>
          <Menu.Item key="6">借款申请</Menu.Item>
          <Menu.Item key="7">公文发文</Menu.Item>
          <Menu.Item key="8">请假审批(自定义)</Menu.Item>
          <Menu.Item key="9">批量申请(自定义)</Menu.Item>
          <Menu.Item key="10">Online会签字流程</Menu.Item>
          <Menu.Item key="11">Online请假单</Menu.Item>
        </SubMenu>

        {/* submenu3 */}
        <SubMenu key="sub3" icon={<AlertOutlined />} title="OA办公">
          <Menu.Item key="12">工单申请</Menu.Item>
          <Menu.Item key="13">我的工单</Menu.Item>
          <Menu.Item key="14">歌单查询</Menu.Item>
        </SubMenu>

        <Menu.Item
          icon={<UserAddOutlined />}
          className={jurisdiction === 3 ? styles.show : styles.noshow}
          onClick={handleUser}
        >
          添加用户
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default ItemSider;
