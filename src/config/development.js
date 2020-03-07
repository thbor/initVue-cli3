import auth from './auth'

const host = "http://10.244.186.113"
const redirectUri = "http://127.0.0.1:8080"
const loginUri = `${auth.authServerUri}${auth.params}&client_id=${auth.clientId}&scope=${auth.scope}&redirect_uri=${redirectUri}`;

const config = {
  //TODO 這裡需要改成遠程連接的ip和前綴
  apiUri: `${host}:8080/demo4`,
  socketUri: `${host}:8080`,
  loginUri: loginUri,
  loginOutUri: `${auth.loginOutUri}${redirectUri}`,
  redirectUri: redirectUri,
  authServer: "http://10.244.231.80:8080/demo4"
};

export default config;