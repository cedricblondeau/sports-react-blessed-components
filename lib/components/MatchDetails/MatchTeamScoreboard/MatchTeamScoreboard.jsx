import chalk from 'chalk';
import PropTypes from 'prop-types';
import React from 'react';

import MatchEvents from '../MatchEvents/MatchEvents';
import { eventShape } from '../../../shapes';

const getColoredTeamName = (teamName, color) =>
  chalk`{${color}.bold ${teamName}}`;

const getGoalsLeftPosition = align => {
  const leftAlignLeftPosition = 4;
  if (align === 'right') {
    return '100%-13';
  }
  return leftAlignLeftPosition;
};

const MatchTeamScoreboard = ({ align, events, score, teamName, teamColor }) => (
  <element>
    <box height={14}>
      <box
        content={getColoredTeamName(teamName, teamColor)}
        height={1}
        width="100%"
        align="center"
        top="center"
      />
      <bigtext
        width={15}
        content={score.toString()}
        ch=" "
        fch={'\u2592'}
        style={{
          fg: 'red',
          bold: false,
        }}
        left={getGoalsLeftPosition(align)}
      />
    </box>
    <box top={14} height="100%-15">
      <MatchEvents events={events} align={align} />
    </box>
  </element>
);

MatchTeamScoreboard.propTypes = {
  align: PropTypes.oneOf(['left', 'right']).isRequired,
  events: PropTypes.arrayOf(eventShape).isRequired,
  teamName: PropTypes.string.isRequired,
  teamColor: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default MatchTeamScoreboard;
