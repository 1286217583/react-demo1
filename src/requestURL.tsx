// 用户相关的api
type urlType = string;
const baseURL: urlType = 'http://localhost:3000';

// 登录 =============================================================
const signIn: urlType = `${baseURL}/api/user/sign-in`;

// 注册
const signUp: urlType = `${baseURL}/api/user/sign-up`;

// 获取用户基本信息
const getUser: urlType = `${baseURL}/api/user/getUser`;

// 个人办公中的我的任务相关 api ============================================================

// 获取任务列表
const getTaskList = `${baseURL}/api/task/getTaskList`;

// 注册任务
const addTask = `${baseURL}/api/task/addTask`;

export { signIn, signUp, getUser, getTaskList, addTask };
