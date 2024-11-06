import { Route, Routes } from "react-router";

import LoggedIn from "./logged_in";
import Layout from "../layout";
function Root() {
  return (
    <Routes>
      <Route path="/login" element={<div>Login</div>} />
      <Route
        path="/teams/*"
        element={
          <LoggedIn>
            <Layout>
              <div>Teams</div>
            </Layout>
          </LoggedIn>
        }
      />
    </Routes>
  );
}

export default Root;
