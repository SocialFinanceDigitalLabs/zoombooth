import { Switch, Route, useHistory } from "react-router-dom";
// Material-UI imports
import Grid from "@mui/material/Grid";

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/NavigationClient";

import { PageLayout } from "./ui-components/PageLayout";
import { Logout } from "./pages/Logout";
import {Calendar} from "./pages/Calendar";

function App({ pca }) {
  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

function Pages() {
  return (
    <Switch>
      <Route path="/logout">
          <Logout />
      </Route>
      <Route path="/date/:date">
          <Calendar />
      </Route>
      <Route path="/">
          <Calendar />
      </Route>
    </Switch>
  )
}

export default App;
