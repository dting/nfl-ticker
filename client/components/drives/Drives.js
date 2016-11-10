import classnames from 'classnames';
import React from 'react';

import Bar from './Bar';

const teamImageUri = function teamImageUri(team) {
  return `http://i.nflcdn.com/static/site/7.4/img/logos/teams-gloss-81x54/${team.toLowerCase()}.png`;
};

const ScoreBoard = ({ DriveGsisIdFkeys, homeTeam }) => (
  <div className="drives">
    <div className="drives_header">
      <div>Drives</div>
    </div>
    <div className="drives_log">
      {DriveGsisIdFkeys.map(drive => (
        <div className="drive" key={drive.driveId}>
          <img
            className="drive_pos-team__logo"
            src={teamImageUri(drive.posTeam)}
            alt={drive.posTeam}
          />
          <div className={classnames('drive_field', { away: drive.posTeam !== homeTeam })}>
            <Bar drive={drive} homeTeam={homeTeam} />
          </div>
          <div className="drive_result">
            {drive.result}
          </div>
        </div>
      ))}
    </div>
  </div>
);

ScoreBoard.propTypes = {
  DriveGsisIdFkeys: React.PropTypes.arrayOf(React.PropTypes.shape({
    posTeam: React.PropTypes.string.isRequired,
    driveId: React.PropTypes.number.isRequired,
  })),
  homeTeam: React.PropTypes.string.isRequired,
};

ScoreBoard.displayName = 'ScoreBoard';

export default ScoreBoard;
