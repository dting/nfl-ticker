import { CardText } from 'material-ui/Card';
import { Link } from 'react-router';
import React from 'react';

const teamImageUri = function teamImageUri(team) {
  return `http://i.nflcdn.com/static/site/7.4/img/logos/teams-gloss-81x54/${team.toLowerCase()}.png`;
};

const Matchups = ({ games }) => (
  <CardText>
    <div className="matchups">
      {games.map(matchup => (
        <Link to={`/games/${matchup.gsisId}`} key={matchup.gsisId}>
          <div className="matchup">
            <div className="matchup_dow">
              {matchup.dayOfWeek.slice(0, 3)}
            </div>
            <div className="matchup_home">
              <img
                src={teamImageUri(matchup.homeTeam)}
                alt={`${matchup.homeTeam} logo`}
              />
            </div>
            <div className="matchup_away">
              <img
                src={teamImageUri(matchup.awayTeam)}
                alt={`${matchup.homeTeam} logo`}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </CardText>
);

Matchups.propTypes = {
  games: React.PropTypes.arrayOf(React.PropTypes.shape({
    awayTeam: React.PropTypes.string.isRequired,
    gsisId: React.PropTypes.string.isRequired,
    homeTeam: React.PropTypes.string.isRequired,
  })),
};

Matchups.displayName = 'Matchups';

export default Matchups;
