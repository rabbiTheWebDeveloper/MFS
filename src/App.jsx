import User from "./pages/User";
import { isRole } from "./services/auth.service";
const App = () => {
  const role = isRole()
  console.log(role)
  return <User />;
};

export default App;
