import chalk from 'chalk';
import React from 'react';
import PropTypes from 'prop-types';

import { standingShape } from '../../shapes';

const getColoredTeamName = (teamCode, color) => chalk`{${color} ■} ${teamCode}`;

const getContent = standings => {
  const data = standings.reduce(
    (content, { name, color, points }) =>
      `${content}${getColoredTeamName(name, color)} ${points.toString()}\n`,
    '',
  );
  return data;
};

const Standings = ({ name, standings }) => (
  <element>
    <box content={`{bold}${name}{/bold}`} tags height={1} />
    <box top={2} content={getContent(standings)} />
  </element>
);

Standings.propTypes = {
  name: PropTypes.string.isRequired,
  standings: PropTypes.arrayOf(standingShape).isRequired,
};

export default Standings;
