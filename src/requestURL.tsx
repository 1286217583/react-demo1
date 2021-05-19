type urlType = string;
const baseURL: urlType = 'http://localhost:3000/api';

// 登录
const signIn: urlType = `${baseURL}/sign-in`;

// 注册
const signUp: urlType = `${baseURL}/sign-up`;

// 获取用户基本信息
const getUser: urlType = `${baseURL}/getUser`;

export { signIn, signUp, getUser };
