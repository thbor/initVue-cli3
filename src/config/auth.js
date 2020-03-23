// export default {
//   clientId:"18ada42b-c5b4-4646-8084-062841c3acb1",
//   scope:"address%20phone%20openid%20email%20profile",
//   authServerUri: "http://10.244.231.103:8080/openid/authorize",
//   params: "?response_type=code&state=shzbg"
// }
export default {
  clientId: "428390e7-368a-4a49-a1c8-e472ab4f8f02",
  scope: "openid%20offline_access%20profile",
  authServerUri: "http://10.244.231.103:8080/openid/authorize",
  params: "?response_type=code&state=shzbg",
  loginOutUri: "http://10.244.231.80:8080/logout?redirecturl="
};
