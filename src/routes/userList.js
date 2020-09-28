import UserContainer from "../containers/UserChatContainer/UserChatContainer";

const routes = [
  {
    name: "Matt Thompson",
    path: "/messenger/unread/mat",
    strict: true,
    exact: true,
    component: UserContainer,
  },
  {
    name: "Claire Sharwood",
    path: "/messenger/unread/claire",
    strict: true,
    exact: true,
    component: UserContainer,
  },
  {
    name: "Kirsten McKellar",
    path: "/messenger/unread/kirsten",
    strict: true,
    exact: true,
    component: UserContainer,
  },
  {
    name: "Shaun Gardner",
    path: "/messenger/unread/shaun",
    strict: true,
    exact: true,
    component: UserContainer,
  },
];

export default routes;
