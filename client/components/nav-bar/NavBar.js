import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import React from 'react';

const NavBar = ({ children, router }) => (
  <AppBar
    className="nav-bar"
    title="NFL Ticker"
    onTitleTouchTap={() => router.push('/')}
    showMenuIconButton={false}
  >
    {children}
  </AppBar>
);

NavBar.propTypes = {
  children: React.PropTypes.node,
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

NavBar.displayName = 'NavBar';

export default withRouter(NavBar);
