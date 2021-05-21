// 我的任务

import styles from './index.less';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Table, Form, Input, Button } from 'antd';

import { getTaskList } from '@/requestURL';

const columns: {}[] = [
  {
    title: '#',
    width: 60,
    dataIndex: 'number',
    align: 'center',
  },
  {
    title: '业务标题',
    width: 250,
    dataIndex: 'taskTitle',
    align: 'center',
  },
  {
    title: '流程编号',
    dataIndex: 'taskNumber',
    width: 250,
    align: 'center',
  },
  {
    title: '任务ID',
    dataIndex: 'taskID',
    width: 250,
    align: 'center',
  },
  {
    title: '流程名称',
    dataIndex: 'processName',
    width: 250,
    align: 'center',
  },
  {
    title: '流程实列',
    dataIndex: 'processImplementation',
    width: 100,
    align: 'center',
  },
  {
    title: '发起人(用户)',
    dataIndex: 'sponsor',
    width: 150,
    align: 'center',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    width: 250,
    align: 'center',
  },
  {
    title: '当前环节',
    dataIndex: 'current',
    width: 250,
    align: 'center',
  },
  {
    title: '操作',
    dataIndex: 'action',
    fixed: 'right',
    width: 150,
    align: 'center',
    render: () => (
      <div className={styles.action}>
        <button>办理</button> <span></span>
        <button>委托</button>
      </div>
    ),
  },
];

// data 类型
type dataType = {
  taskTitle: string;
  taskNumber: string;
  taskID: string;
  processName: string;
  processImplementation: number;
  sponsor: string;
  startTime: string;
  current: string;
}[];

const task = () => {
  // 列表数据
  const [datas, setData] = useState<dataType>([]);

  // 点击查询处理函数
  const chandleSearch = (values: {
    taskNumber: string;
    processName: string;
  }) => {
    if (!values.taskNumber && !values.processName) return;
    const taskNumber: string = values.taskNumber || '';
    const processName: string = values.processName || '';
  };

  // 点击重置处理函数
  const chandleReset = () => {
    window.location.reload();
  };

  useEffect(() => {
    // 请求列表数据
    axios.get(getTaskList).then((res) => {
      const {
        data: { code, data },
      } = res;
      if (code === 0) {
        const newData = data.map((item: [], index: number) => {
          return {
            ...item,
            key: index,
            number: index + 1,
          };
        });

        setData(newData);
      }
    });
  }, []);

  // 列表数据添加进行
  const data: dataType | {}[] = datas;

  return (
    <>
      <div>
        <Form
          className={styles.searchForm}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={chandleSearch}
        >
          <Form.Item label="流程编号" name="taskNumber">
            <Input placeholder="请输入流程编号" />
          </Form.Item>

          <Form.Item label="流程名称" name="processName">
            <Input placeholder="请输入流程名称" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>

            <Button
              htmlType="button"
              className={styles.reset}
              onClick={chandleReset}
            >
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: '100px', y: 600 }}
        tableLayout="fixed"
        bordered={true}
      />
    </>
  );
};

export default task;
