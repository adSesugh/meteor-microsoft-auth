import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { App } from "/imports/ui/App";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  const auth = {
    clientId: Meteor.settings.public.clientId,
    authority: Meteor.settings.public.authority,
    redirectUri: Meteor.settings.public.redirectUri,
    postLogoutRedirectUri: "/", //Meteor.settings.public.REDIRECT_URI
  };
  console.log({ auth });
  const pca = new PublicClientApplication({
    auth,
  });
  root.render(
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  );
});
