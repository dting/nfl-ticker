import { CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import React from 'react';

const Plays = ({ plays }) => (
  <CardText style={{ padding: 0 }} className="plays__content">
    <List>
      {plays.map(play => (
        <ListItem className="play" key={play.playId}>
          {play.description}
        </ListItem>
      ))}
    </List>
  </CardText>
);

Plays.propTypes = {
  plays: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    playId: React.PropTypes.string.isRequired,
  })),
};

export default Plays;
