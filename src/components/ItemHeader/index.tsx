// 样式
import styles from './index.less';
// 引入antd 的 Layout组件
import { Layout, Avatar, Button } from 'antd';

import { useContext } from 'react';
// 引入 Context
import { itemContext } from '@/layouts/index';

// 引入头部控制侧边栏显隐的icon
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

// 解构出 Layout 的 Header
const { Header } = Layout;

// Layout的props 的类型定义
type ItemHeaderProps = {
  isShowSider: boolean;
  setIsShowSider: () => void;
};

// 退出登录操作fn
const handleSignUp: () => void = () => {
  window.localStorage.removeItem('token');
  window.location.reload();
};

const ItemHeader: React.FC<ItemHeaderProps> = (props) => {
  const { isShowSider, setIsShowSider } = props;

  const { phone } = useContext(itemContext);

  // 点击图标操作fn
  const handleIsShow: () => void = () => {
    setIsShowSider();
  };

  return (
    <Header className={styles.header} style={{ padding: 0 }}>
      {/* 左侧 icon */}
      {isShowSider ? (
        <MenuUnfoldOutlined className={styles.trigger} onClick={handleIsShow} />
      ) : (
        <MenuFoldOutlined className={styles.trigger} onClick={handleIsShow} />
      )}

      {/* 右侧 头像 用户 退出登录*/}
      <div className={styles.headerLeft}>
        {/* 头像 */}
        <Avatar src={require('@/img/headerImg.jpg')}></Avatar>

        <Button icon={<UserOutlined />} className={styles.btn}>
          {phone}你好
        </Button>
        <Button
          icon={<LogoutOutlined />}
          className={styles.btn}
          onClick={handleSignUp}
        >
          退出登录
        </Button>
      </div>
    </Header>
  );
};

export default ItemHeader;
