// 用户相关的api
type urlType = string;
const baseURL: urlType = 'http://localhost:3000';

//  =============================================================
/**
 * 登录
 * 请求方式 post
 * 请求体传参（2个）
 *  - phone 登录用户
 *  - password 登录密码
 */
const signIn: urlType = `${baseURL}/api/user/sign-in`;

/**
 * 注册
 * 请求方式 post
 * 请求体传参（3个）
 *  - phone 用户
 *  - password 登录密码
 *  - jurisdiction  权限等级
 */
const signUp: urlType = `${baseURL}/api/user/sign-up`;

/**
 * 获取用户基本信息
 * 请求方式 get
 * 问号传参 （1个）
 *  - token （用户登录返回的token）
 */
const getUser: urlType = `${baseURL}/api/user/getUser`;

// 个人办公中的我的任务相关 api ============================================================

/**
 * 获取任务列表
 * 请求方式 get
 * 不需要参数
 */
const getTaskList = `${baseURL}/api/task/getTaskList`;

/**
 * 注册任务
 * 请求方式 post
 * 请求体传参 （3个）
 *  - taskTitle 业务标题
 *  - processName 流程名称
 *  - sponsor 发起人(用户)
 */
const addTask = `${baseURL}/api/task/addTask`;

/**
 * 查询任务 (模糊查询)
 * 请求方式 get
 * 问号传参 （2个）可 二选一
 *  - taskTitle  任务标题
 *  - processName 流程名称
 */
const getTaskData = `${baseURL}/api/task/getTaskData`;

export { signIn, signUp, getUser, getTaskList, addTask, getTaskData };
