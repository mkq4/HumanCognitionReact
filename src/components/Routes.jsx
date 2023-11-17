import Homepage from './Home'
import Profilepage from "./profile/Index";
import RegistrationPage from "./auth/registratoion/Index";
import LoginPage from "./auth/login/Index"
import NotFoundPage from "./notFound/Index";
import ReactionGame from './games/reaction/Index';
import AimGame from "./games/aim/Index"
import ChimpGame from "./games/chimp/Index"
import NumbersGame from "./games/numbers/Index"
import TypingTest from "./games/typing/Index";
import VisualGame from "./games/visual/Index";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/profile",
    element: <Profilepage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/reaction-game",
    element: <ReactionGame/>,
  },
  {
    path: "/aim-game",
    element: <AimGame/>
  },
  {
    path: "/chimp-game",
    element: <ChimpGame/>
  },
  {
    path: "/numbers-game",
    element: <NumbersGame/>
  },
  {
    path: "/reaction-game",
    element: <ReactionGame/>
  },
  {
    path: "/typing-game",
    element: <TypingTest/>
  },
  {
    path: "/visual-game",
    element: <VisualGame/>
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export default routes;
