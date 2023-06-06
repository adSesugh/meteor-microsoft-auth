import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  const pca = new PublicClientApplication({
    auth: {
      clientId: "9cea83bd-5e05-448e-a1f3-359e4cdf1536", //process.env.CLIENT_ID,
      authority: "https://login.microsoftonline.com/b69f83a4-8adc-425a-b475-b2d10fe7f655", // process.env.AUTHORITY,
      redirectUri: "/", //process.env.REDIRECT_URI,
      postLogoutRedirectUri: "/" //process.env.REDIRECT_URI
    }
  })
  root.render(<MsalProvider instance={pca}><App /></MsalProvider>);
});
