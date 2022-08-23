import "./App.scss";
import "./assets/scss/index.scss"
import { Switch, Route } from "react-router-dom";
import Header from "./component/layout/Header";
import Home from "./pages/Home";
import AddEditUser from "./pages/AddEditTodo";
import NotFound from "./component/common/NotFound";
import PrivateRoute from "./component/common/PrivateRoute"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/add-todo" component={AddEditUser} />
        <Route exact path="/todo/:id" component={AddEditUser} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
