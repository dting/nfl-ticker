import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { actions } from '../../modules';
import { Drives, NavBar, ScoreBoard } from '../../components';

class Game extends React.Component {
  static propTypes = {
    game: React.PropTypes.shape({
      gsisId: React.PropTypes.string,
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
    return (
      <div className="home">
        <NavBar />
        {game.gsisId && <ScoreBoard {...game} />}
        {game.gsisId && <Drives {...game} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Game);
