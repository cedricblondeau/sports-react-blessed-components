import React from 'react';
import PropTypes from 'prop-types';

import { matchShape } from '../../../shapes';
import { getShortFormattedMatch, getFormattedDatetime } from '../../../format';

const selectedStyle = {
  bg: 'red',
  fg: 'black',
};

const nonSelectedStyle = {
  bg: 'grey',
  fg: 'white',
};

const MatchNavItem = ({ isSelected, left, match, width }) => (
  <element left={left} top={0} height={2} width={width}>
    <box
      content={getFormattedDatetime(match, true)}
      top={0}
      align="center"
      width="100%"
      style={isSelected ? selectedStyle : nonSelectedStyle}
    />
    <box
      content={`${getShortFormattedMatch(match)}`}
      tags
      top={1}
      align="center"
      width="100%"
      style={isSelected ? selectedStyle : nonSelectedStyle}
    />
  </element>
);

MatchNavItem.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  left: PropTypes.number.isRequired,
  match: matchShape.isRequired,
  width: PropTypes.number.isRequired,
};

export default MatchNavItem;
