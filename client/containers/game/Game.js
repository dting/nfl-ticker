import { bindActionCreators } from 'redux';
import { Card, CardHeader } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import React from 'react';

import { actions } from '../../modules';
import { NavBar } from '../../components';

class HomePage extends React.Component {
  static propTypes = {
    game: React.PropTypes.shape({
      homeTeam: React.PropTypes.string.isRequired,
      awayTeam: React.PropTypes.string.isRequired,
    }),
    gameActions: React.PropTypes.shape({
      get: React.PropTypes.func.isRequired,
    }),
    params: React.PropTypes.shape({
      gsisId: React.PropTypes.string.isRequired,
    }),
  };

  componentWillMount() {
    this.props.gameActions.get(this.props.params.gsisId);
  }

  render() {
    const { game } = this.props;
    const { seasonYear, seasonType, week, homeTeam, awayTeam } = game;
    return (
      <div className="home">
        <NavBar />
        <Card className="meta" initiallyExpanded>
          <CardHeader
            className="meta__header"
            showExpandableButton
            title={`${seasonYear} - Week ${week} (${seasonType}): ${homeTeam} vs ${awayTeam}`}
          />
        </Card>
        <Paper className="plays">
          {JSON.stringify(game)}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  gameActions: bindActionCreators(actions.game, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
