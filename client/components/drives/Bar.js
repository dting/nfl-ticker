import classnames from 'classnames';
import React from 'react';

const style = ({ drive }) => {
  const styles = {};
  let a = +drive.startField.slice(1, -1) + 50;
  let b = drive.result === 'Touchdown' ? 100 : +drive.endField.slice(1, -1) + 50;
  if (a > b) {
    [a, b] = [b, a];
  }
  styles.left = `${a}%`;
  styles.right = `${100 - b}%`;
  return styles;
};

const Bar = ({ drive, homeTeam }) => (
  <div
    className={classnames('drive_field__bar', { away: drive.posTeam !== homeTeam })}
    style={style({ drive, homeTeam })}
  />
);

Bar.propTypes = {
  drive: React.PropTypes.shape({
    posTeam: React.PropTypes.string.isRequired,
  }).isRequired,
  homeTeam: React.PropTypes.string.isRequired,
};

Bar.displayName = 'Bar';

export default Bar;
