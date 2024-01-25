import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import CreateAccount from "../pages/createaccount";
import Auth from "../pages/auth";

export default function Routes() {

  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path='/create' Component={CreateAccount} />
        <Route path='/auth' Component={Auth} />
        <Route path='/' Component={Auth} />
        <Route path='*' Component={Auth} />
      </ReactRoutes>
    </BrowserRouter>
  )
}

