import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { LoadingDots, Status } from '../../components';
import { actions } from '../../modules';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    meta: React.PropTypes.shape({
      loading: React.PropTypes.bool,
    }),
    metaActions: React.PropTypes.shape({
      get: React.PropTypes.func.isRequired,
    }),
  };

  componentWillMount() {
    this.props.metaActions.get();
  }

  render() {
    const { children, meta } = this.props;
    return (
      <div className="app">
        {meta.loading && (
          <Status className="app_loading">
            <div className="brand-medium">NFL Ticker</div>
            <p className="app_loading__message">Loading</p>
            <LoadingDots />
          </Status>
        )}
        {!meta.loading && !meta.error && meta.version && children}
        {!meta.loading && meta.error}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meta: state.meta,
});

const mapDispatchToProps = dispatch => ({
  metaActions: bindActionCreators(actions.meta, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
