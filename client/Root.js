import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './root.scss';

const Root = ({ children }) => (
  <MuiThemeProvider>
    <div className="page_container">
      {children}
    </div>
  </MuiThemeProvider>
);

Root.propTypes = {
  children: React.PropTypes.node,
};

Root.displayName = 'Root';

export default Root;
