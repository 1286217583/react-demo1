import styles from './index.less';

function IndexPage(props: any) {
  const { Children } = props;
  return (
    <div>
      <h1 className={styles.title}>首页</h1>
      <h2 className="s">hh</h2>
      <p>{Children}</p>
    </div>
  );
}

// IndexPage.wrappers = ['@/routes/isLogin']

export default IndexPage;
