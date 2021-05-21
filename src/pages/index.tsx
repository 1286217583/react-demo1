import { Redirect } from 'umi';

const indexPage: React.FC = (props) => {
  return <div>{<Redirect to="/personalOffice/mytask/task" />}</div>;
};

export default indexPage;
