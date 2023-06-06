import React, { Fragment } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';

export const App = () => {
  const { instance, accounts, inProgress } = useMsal()
  const isAuthenticated = useIsAuthenticated()
  
  const loginWithMicrosoft = () => instance.loginPopup({
    scopes: ['user.read']
  })

  const logoutUser = () => instance.logoutPopup()

  return (
    <div>
      <h1>Meteor Sign In with Miscrosoft</h1><br />
      <div>
        {isAuthenticated ? (
          <Fragment>
            {accounts.length > 0 && <h3>Welcome {accounts[0].name}</h3>}
            <button onClick={logoutUser} style={{ padding: 8, backgroundColor: 'green', color:'white' }}>Sign Out </button>
          </Fragment>
        ): (
          <button onClick={loginWithMicrosoft} style={{ padding: 8, backgroundColor: 'green', color:'white' }}>
            {inProgress != 'login' ? "Sign In with Microsoft" : "Please wait..."}
          </button>
        )}
      </div>
    </div>
  ) 
};
