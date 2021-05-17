// 样式
import styles from './index.less';
// 引入antd 的 Layout组件
import { Layout } from 'antd';
// 引入侧边栏组件
import ItemSider from '../components/ItemSider';
// 引入头部组件
import ItemHeader from '../components/ItemHeader';

import { useState } from 'react';

// 解构出 Layout 的 Header 和 Content
const { Content } = Layout;

// Layout的props 的类型定义
type LayoutProps = {
  children: object;
  history: object;
  location: object;
  match: object;
  route: object;
  routes: object;
  staticContext: object;
};

const layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  const [isShowSider, setIsShowSider] = useState(false);

  return (
    <Layout className={styles.Layout}>
      {/* 侧边栏 */}
      <ItemSider isShowSider={isShowSider} />

      <Layout>
        {/* 头部 */}
        <ItemHeader isShowSider={isShowSider} setIsShowSider={setIsShowSider} />

        {/* 内容 */}
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default layout;
