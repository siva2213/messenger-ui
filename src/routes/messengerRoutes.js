import Inbox from "../containers/Unread/Unread";

const routes = [
  {
    name: "Unread",
    path: "/messenger/unread",
    strict: true,
    exact: true,
    component: Inbox,
  },
  {
    name: "All Messages",
    path: "/messenger/all-messages",
    strict: true,
    exact: true,
    component: Inbox,
  },
  {
    name: "Important",
    path: "/messenger/important",
    strict: true,
    exact: true,
    component: Inbox,
  },
  {
    name: "Drafts",
    path: "/messenger/drafts",
    strict: true,
    exact: true,
    component: Inbox,
  },
];

export default routes;
