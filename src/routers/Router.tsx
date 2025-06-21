import Calendar from "../components/Calendar";
import Mypage from "../pages/Mypage";

export const routerInformation = [
  {
    path: "/",
    element: <Calendar />,
    errorElement: <div>404 Not Found</div>,
  },

  {
    path: "/mypage",
    element: <Mypage />,
    errorElement: <div>404 Not Found</div>,
  },
];
