// 登录页
import styles from './index.less';
import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { signIn } from '../../requestURL';

// 登录操作需要的类型定义
type handleLoginValues = {
  phone: string;
  password: string;
  setLoading: () => {};
};

const Login: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);

  // 登录处理函数
  const handleLogin = (values: handleLoginValues) => {
    // 设置登录按钮为 loading 状态
    setLoading(true);

    // 发送登录请求
    axios.post(signIn, values).then((res) => {
      // 结构出data再进行别名结构 出 code msg data
      const {
        data: { code, msg, data },
      } = res;
      // 判断code 是否为 0
      if (code === 0) {
        // 保存 data中的 token 到localStorage
        window.localStorage.setItem('token', data.token);
        // 弹窗提示，弹窗结束刷新回到首页
        message.success('登录成功', 1, () => {
          window.location.reload();
        });
      } else {
        message.error('登录失败，请重试', 1, () => {
          setLoading(false);
        });
      }
    });
  };

  return (
    <Form
      className={styles.formBox}
      name="login"
      initialValues={{ remember: true }}
      onFinish={handleLogin}
    >
      <Form.Item
        name="phone"
        rules={[
          { required: true, message: '请输入手机号码' },
          { pattern: /^1[0-9]{10}$/, message: '请输入正确的手机号码' },
        ]}
      >
        <Input placeholder="请输入手机号" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          { min: 6, max: 10, message: '密码为 6 至 10 位' },
        ]}
      >
        <Input.Password placeholder="请输入密码" />
      </Form.Item>

      <Form.Item className={styles.formBtn}>
        <Button type="primary" htmlType="submit" loading={loading}>
          登 录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
