import { bindActionCreators } from 'redux';
import { Card, CardHeader } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import React from 'react';

import { actions } from '../../modules';
import { NavBar, Matchups, Plays } from '../../components';

class HomePage extends React.Component {
  static propTypes = {
    matchups: React.PropTypes.shape({
      games: React.PropTypes.array.isRequired,
    }),
    matchupsActions: React.PropTypes.shape({
      get: React.PropTypes.func.isRequired,
    }),
    meta: React.PropTypes.shape({
      seasonYear: React.PropTypes.number.isRequired,
      seasonType: React.PropTypes.string.isRequired,
      week: React.PropTypes.number.isRequired,
    }),
    plays: React.PropTypes.shape({
      plays: React.PropTypes.array.isRequired,
    }),
    playsActions: React.PropTypes.shape({
      get: React.PropTypes.func.isRequired,
    }),
  };

  componentWillMount() {
    const { meta: { seasonYear, seasonType, week } } = this.props;
    const notes = [
      'SAF',
      // "KICKOFF",
      'FGM',
      'TD',
      // "Timeout",
      '2PPF',
      'INT',
      'XPM',
      // "PUNTB",
      'FUMBLE',
      '2PR',
      // "TIMEOUT",
      'XPB',
      // "PENALTY",
      '2PS',
      'XPA',
      // "PUNT",
      'XP',
      '2PRF',
      'FG',
      'FGB',
    ];
    this.props.matchupsActions.get(seasonYear, seasonType, 9);
    this.props.playsActions.get(notes, seasonYear, seasonType, week);
  }

  render() {
    const { meta, matchups, plays } = this.props;
    return (
      <div className="home">
        <NavBar />
        <Card className="meta" initiallyExpanded>
          <CardHeader
            className="meta__header"
            showExpandableButton
            title={`${meta.seasonYear} - Week ${meta.week} (${meta.seasonType})`}
          />
          {matchups.games.length &&
            <Matchups expandable games={matchups.games} />
          }
        </Card>
        <Paper className="plays">
          <Toolbar className="plays__header">
            <ToolbarTitle text="Plays" />
          </Toolbar>
          {!!plays.plays.length && <Plays plays={plays.plays} />}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matchups: state.matchups,
  meta: state.meta,
  plays: state.plays,
});

const mapDispatchToProps = dispatch => ({
  matchupsActions: bindActionCreators(actions.matchups, dispatch),
  playsActions: bindActionCreators(actions.plays, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
