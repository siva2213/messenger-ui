import Inbox from "../containers/Unread/Unread";

const routes = [
  {
    name: "Whatsapp",
    path: "/whatsapp",
    strict: true,
    exact: true,
    component: Inbox,
  },
  {
    name: "Messenger",
    path: "messenger",
    strict: true,
    exact: true,
    component: Inbox,
  },
  {
    name: "Viber",
    path: "/viber",
    strict: true,
    exact: true,
    component: Inbox,
  },
  {
    name: "Skype",
    path: "/skpye",
    strict: true,
    exact: true,
    component: Inbox,
  },
];

export default routes;
