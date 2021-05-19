import styles from './index.less';
import { useState } from 'react';
import axios from 'axios';
import { signUp } from '@/requestURL';
import { Form, Input, Button, Radio, message } from 'antd';
const { Group } = Radio;
// 注册的参数类型声明
type handleUserType = {
  pahone: string;
  password: string;
};

const NewUser = () => {
  // 注册按钮的 loading 状态
  const [loading, setLoading] = useState<boolean>(false);
  // 权限选择状态
  const [jurisdiction, setJurisdiction] = useState(1);
  // <T extends {target:{value: string}}>
  const changeJurisdiction = (e: any) => {
    const value: string = e.target.value;
    setJurisdiction(parseInt(value));
  };

  // 发生注册请求
  const handleUser = (values: handleUserType) => {
    setLoading(true);

    const params = {
      ...values,
      jurisdiction,
    };

    axios
      .post(signUp, params)
      .then(({ data }) => {
        if (data.code === -1) {
          message.error(data.msg, 2, () => {
            setLoading(false);
          });
          return;
        }

        message.success(data.msg, 2, () => {
          setLoading(false);
          window.location.reload();
        });
      })
      .catch((err) => {
        console.log(err, '请重试');
      });
  };

  return (
    <Form name="createUser" className={styles.inform} onFinish={handleUser}>
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
      用户权限级别
      <Group
        className={styles.radio}
        value={jurisdiction}
        onChange={changeJurisdiction}
      >
        <Radio value={1}>普通</Radio>
        <Radio value={2}>管理员</Radio>
        <Radio value={3}>超级管理员</Radio>
      </Group>
      <Form.Item className={styles.btn}>
        <Button type="primary" htmlType="submit" loading={loading}>
          注 册
        </Button>
      </Form.Item>
    </Form>
  );
};

// NewUser.wrappers = ['@/pages']
export default NewUser;
