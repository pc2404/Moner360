import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Manage from "./Pages/Manage";
import Payperks from "./Pages/Payperks";
import Activity from "./Pages/Activity";
import { OidcProvider } from '@axa-fr/react-oidc';

function App() {

  const configuration = {
    client_id: "money360_cardholder_web_ui@ist",
    redirect_uri: "https://localhost:3000/authentication/callback",
    post_logout_redirect_uri: "https://localhost:3000/",
    silent_redirect_uri:
    "https://localhost:3000/authentication/silent-callback",
    scope: "openid read write offline_access", // offline_access scope allow your client to retrieve the refresh_token
    authority: "https://idm-core-sandbox.khumbusystems.net/core",
    // service_worker_relative_url: "../OidcServiceWorker.js",
    // service_worker_only: false,
    extras:{usc: "smione"},
    token_request_extras:{client_secret:"secret"},
    monitor_session:true,
  };

  

  return (
    <OidcProvider configuration={configuration}>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/payperks" element={<Payperks />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
  
      </BrowserRouter>
    </OidcProvider>
  );
}

export default App;
