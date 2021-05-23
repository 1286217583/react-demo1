import styles from './index.less';
import './hove.css';
import axios from 'axios';
import { useState, useCallback, useRef, useEffect } from 'react';
import { Table } from 'antd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import { getTaskList, getTaskData } from '@/requestURL';

const type = 'DragableBodyRow';

const DragableBodyRow = ({
  index,
  moveRow,
  className,
  style,
  ...restProps
}) => {
  const ref = useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: (item) => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));

  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

const columns: {}[] = [
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

const DragSortingTable: React.FC = () => {
  // 列表数据
  // const [datas, setDatas] = useState<dataType>([]);

  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]);

  // 数据处理函数
  const handleData = (data: any) => {
    // 给每个数据添加上 key 和 number
    const newData = data.map((item: [], index: number) => {
      return {
        ...item,
        key: index,
        number: index + 1,
      };
    });

    // 修改 datas 数据
    setData(newData);
  };

  useEffect(() => {
    // 请求列表数据
    axios.get(getTaskList).then((res) => {
      const {
        data: { code, data },
      } = res;

      if (code === 0) {
        handleData(data);
      }
    });
  }, []);

  const components = {
    body: {
      row: DragableBodyRow,
    },
  };

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = data[dragIndex];
      setData(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        }),
      );
    },
    [data],
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Table
        columns={columns}
        dataSource={data}
        components={components}
        onRow={(record, index) => ({
          index,
          moveRow,
        })}
      />
    </DndProvider>
  );
};

export default DragSortingTable;
