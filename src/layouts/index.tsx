// 样式
import styles from './index.less';
// 引入antd 的 Layout组件
import { Layout, message } from 'antd';
import axios from 'axios';

// 引入侧边栏组件
import ItemSider from '@/components/ItemSider';
// 引入头部组件
import ItemHeader from '@/components/ItemHeader';
// login 组件
import Login from '@/pages/login';

import { getUser } from '@/requestURL';

import { useCallback, useState, useEffect, createContext } from 'react';

// 解构出 Layout 的 Header 和 Content
const { Content } = Layout;

// 暴露 Context
export const itemContext = createContext({
  id: '0',
  jurisdiction: 0,
  phone: '0',
});
const { Provider } = itemContext;

// 用户基本信息定义
type userType = {
  id: string;
  jurisdiction: number;
  phone: string;
};

// layout 组件  =============================================================================================================================
const layout: React.FC = (props) => {
  // 定义权限
  // const [jurisdiction, setJurisdiction] = useState<number>(0)
  // 定义侧边栏的显隐控制数据
  const [isShowSider, setIsShowSider] = useState<boolean>(false);
  // 保存用户基本信息
  const [userData, setUserData] = useState<userType>({
    id: '0',
    jurisdiction: 0,
    phone: '0',
  });
  // token 是否有效
  const [tokenIsOk, setTokenIsOk] = useState<boolean>(false);

  // 对侧边栏的显示和隐藏
  const onChangeShowSider = useCallback(() => {
    setIsShowSider(!isShowSider);
  }, [isShowSider]);

  useEffect(() => {
    // 判断是否有登录
    let token: string | null = window.localStorage.getItem('token');

    if (token) {
      // 获取用户信息
      axios.get(`${getUser}/${token}`).then(({ data }) => {
        // 判断是否请求成功
        if (data.code === -1) {
          // 请求失败 弹窗提示
          message.error(data.msg + ',请重新登录', 3);
        } else {
          // 请求成功 修改 userData 和 把 tokenIsok 修改为true
          setUserData(data.data);
          setTokenIsOk(true);
        }
      });
    }
  }, []);

  if (!tokenIsOk) {
    return <Login></Login>;
  }

  return (
    <Provider value={userData}>
      <Layout className={styles.Layout}>
        {/* 侧边栏 */}
        <ItemSider isShowSider={isShowSider} />

        <Layout>
          {/* 头部 */}
          <ItemHeader
            isShowSider={isShowSider}
            setIsShowSider={onChangeShowSider}
          />

          {/* 内容 */}
          <Content className={styles.content}>{props.children}</Content>
        </Layout>
      </Layout>
    </Provider>
  );
};

export default layout;
