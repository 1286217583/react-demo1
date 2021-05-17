import styles from './index.less';

import { Layout, Menu } from 'antd';

import {
  ContactsOutlined,
  ClusterOutlined,
  AlertOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

type ItemSiderProps = {
  isShowSider: boolean;
};

const ItemSider: React.FC<ItemSiderProps> = (props) => {
  const { isShowSider } = props;
  return (
    <Sider trigger={null} collapsible collapsed={isShowSider}>
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {/* submenu1 */}
        <SubMenu key="sub1" icon={<ContactsOutlined />} title="个人办公">
          <Menu.Item key="1">我的任务</Menu.Item>
          <Menu.Item key="2">我发起的流程</Menu.Item>
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
      </Menu>
    </Sider>
  );
};

export default ItemSider;
