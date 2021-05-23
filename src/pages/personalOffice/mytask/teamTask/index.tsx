// 我的任务

import styles from './index.less';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

import { Table, Form, Input, Button, message } from 'antd';

// import { getTaskList, getTaskData } from '@/requestURL';

const columns: {}[] = [
  {
    title: '#',
    width: 60,
    dataIndex: 'number',
    align: 'center',
  },
  {
    title: '任务标题',
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

// 查询参数类型
// type searchTyple = {
//   taskTitle: string;
//   processName: string;
// }

const teamTask = () => {
  //   // 列表数据
  //   const [datas, setDatas] = useState<dataType>([]);

  //   // 查询按钮 等待状态控制
  //   const [loading, setLoading] = useState<boolean>(false)

  //   // 数据处理函数
  //   const handleData = (data: any) => {
  //     // 给每个数据添加上 key 和 number
  //     const newData = data.map((item: [], index: number) => {
  //       return {
  //         ...item,
  //         key: index,
  //         number: index + 1,
  //       };
  //     });

  //     // 修改 datas 数据
  //     setDatas(newData);
  //   }

  // 点击查询处理函数
  // const chandleSearch = (values: searchTyple) => {
  //   let { taskTitle, processName } = values

  //   // 如果输入框两个都没输入则直接 return
  //   if (!taskTitle && !processName) return;

  //   // 改变 loading 状态
  //   setLoading(true)

  //   // 其中一个输入框 没有对象 就 赋值 ''
  //   taskTitle = taskTitle || '';
  //   processName= processName || '';

  //   // 创建成 对象
  //   const queryParams = {taskTitle, processName}

  //   // 发生请求
  //   axios.get(getTaskData, {params: queryParams}).then((res) => {
  //     const { data: { code, msg, data  } } = res

  //     if (code === -1) {
  //       message.warning(msg, 2, () => {
  //         setLoading(false)
  //       })

  //       return
  //     }

  //     handleData(data)
  //     setLoading(false)
  //   })
  // };

  // 点击重置处理函数
  // const chandleReset = () => {
  //   // 刷新页面
  //   window.location.reload();
  // };

  // useEffect(() => {
  //   请求列表数据
  //   axios.get(getTaskList).then((res) => {
  //     const { data: { code, data } } = res;

  //     if (code === 0) {
  //       handleData(data)
  //     }
  //   });
  // }, []);

  // 列表数据添加进行
  const data: dataType | {}[] = [];

  return (
    <>
      <div>
        <Form
          className={styles.searchForm}
          name="basic"
          initialValues={{ remember: true }}
          // onFinish={chandleSearch}
        >
          <Form.Item label="任务标题" name="taskTitle">
            <Input placeholder="任务标题" />
          </Form.Item>

          <Form.Item label="流程名称" name="processName">
            <Input placeholder="请输入流程名称" />
          </Form.Item>

          <Form.Item>
            {/* <Button type="primary" htmlType="submit" loading={loading}> */}
            <Button type="primary" htmlType="submit">
              查询
            </Button>

            <Button
              htmlType="button"
              className={styles.reset}
              // onClick={chandleReset}
            >
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Table
        style={{ maxWidth: '98%' }}
        columns={columns}
        dataSource={data}
        scroll={{ x: 100, y: 600 }}
        tableLayout="fixed"
        bordered={true}
      />
    </>
  );
};

export default teamTask;
