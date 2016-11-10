import React from 'react';

const teamImageUri = function teamImageUri(team) {
  return `http://i.nflcdn.com/static/site/7.4/img/logos/teams-gloss-81x54/${team.toLowerCase()}.png`;
};

const ScoreBoard = (props) => {
  const {
    awayScore,
    awayScoreQ1,
    awayScoreQ2,
    awayScoreQ3,
    awayScoreQ4,
    awayScoreQ5,
    awayTeam,
    homeScore,
    homeScoreQ1,
    homeScoreQ2,
    homeScoreQ3,
    homeScoreQ4,
    homeScoreQ5,
    homeTeam,
    seasonType,
    seasonYear,
    week,
  } = props;
  return (
    <div className="score-board">
      <div className="score-board_header">
        <div>{seasonYear}</div>
        <div>Week {week} ({seasonType})</div>
      </div>
      <div className="score-board_labels">
        <div className="icon-spacer" />
        <div>Q1</div>
        <div>Q2</div>
        <div>Q3</div>
        <div>Q4</div>
        <div>OT</div>
        <div>TOT</div>
      </div>
      <div className="score-board_scores">
        <div className="scores">
          <img src={teamImageUri(homeTeam)} alt={homeTeam} />
          <div className="score-board_scores__quarters">
            <div>{homeScoreQ1}</div>
            <div>{homeScoreQ2}</div>
            <div>{homeScoreQ3}</div>
            <div>{homeScoreQ4}</div>
            <div>{homeScoreQ5}</div>
            <div>{homeScore}</div>
          </div>
        </div>

        <div className="scores">
          <img src={teamImageUri(awayTeam)} alt={awayTeam} />
          <div className="score-board_scores__quarters">
            <div>{awayScoreQ1}</div>
            <div>{awayScoreQ2}</div>
            <div>{awayScoreQ3}</div>
            <div>{awayScoreQ4}</div>
            <div>{awayScoreQ5}</div>
            <div>{awayScore}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ScoreBoard.propTypes = {
  awayScore: React.PropTypes.number.isRequired,
  awayScoreQ1: React.PropTypes.number.isRequired,
  awayScoreQ2: React.PropTypes.number.isRequired,
  awayScoreQ3: React.PropTypes.number.isRequired,
  awayScoreQ4: React.PropTypes.number.isRequired,
  awayScoreQ5: React.PropTypes.number.isRequired,
  awayTeam: React.PropTypes.string.isRequired,
  homeScore: React.PropTypes.number.isRequired,
  homeScoreQ1: React.PropTypes.number.isRequired,
  homeScoreQ2: React.PropTypes.number.isRequired,
  homeScoreQ3: React.PropTypes.number.isRequired,
  homeScoreQ4: React.PropTypes.number.isRequired,
  homeScoreQ5: React.PropTypes.number.isRequired,
  homeTeam: React.PropTypes.string.isRequired,
  seasonType: React.PropTypes.string.isRequired,
  seasonYear: React.PropTypes.number.isRequired,
  week: React.PropTypes.number.isRequired,
};

ScoreBoard.displayName = 'ScoreBoard';

export default ScoreBoard;
