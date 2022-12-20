import Chat from "./components/Chat";
import Login from "./components/Login";
import { LOGIN_ROUTE, CHAT_ROUTE } from "./utils/constants";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Login></Login>,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: <Chat></Chat>,
  },
];
