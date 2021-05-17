// 样式
import styles from './index.less';
// 引入antd 的 Layout组件
import { Layout } from 'antd';

// 引入头部控制侧边栏显隐的icon
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

// 解构出 Layout 的 Header
const { Header } = Layout;

// Layout的props 的类型定义
type ItemHeaderProps = {
  isShowSider: boolean;
  setIsShowSider: React.Dispatch<React.SetStateAction<boolean>>;
  // children: object,
  // history: object,
  // location: object,
  // match: object,
  // route: object,
  // routes: object,
  // staticContext: object,
};

const ItemHeader: React.FC<ItemHeaderProps> = (props) => {
  const { isShowSider, setIsShowSider } = props;

  const handleIsShow: () => void = () => {
    setIsShowSider(!isShowSider);
  };

  return (
    <Header className={styles.header} style={{ padding: 0 }}>
      {/* 左侧 icon */}
      {isShowSider ? (
        <MenuUnfoldOutlined className={styles.trigger} onClick={handleIsShow} />
      ) : (
        <MenuFoldOutlined className={styles.trigger} onClick={handleIsShow} />
      )}
    </Header>
  );
};

export default ItemHeader;
