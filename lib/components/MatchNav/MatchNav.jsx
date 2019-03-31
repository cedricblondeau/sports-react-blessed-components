import React from 'react';
import PropTypes from 'prop-types';

import { matchShape } from '../../shapes';
import MatchNavItem from './MatchNavItem/MatchNavItem';

const matchNavItemWidth = 23;

const getMatchNavItemKey = match => `match-nav-item-${match.id}`;

const getPaginatedMatchNavItems = (matches, selectedMatchIndex) => {
  const width = process.stdout.columns;
  const pageSize = Math.floor(width / matchNavItemWidth);

  const page = Math.floor(selectedMatchIndex / pageSize);
  const selectedIndex = selectedMatchIndex % pageSize;

  const sliceStart = page * pageSize;
  const matchesToDisplay = matches.slice(sliceStart, sliceStart + pageSize + 1);

  return matchesToDisplay.map((match, i) => (
    <MatchNavItem
      isSelected={selectedIndex === i}
      key={getMatchNavItemKey(match)}
      left={i * matchNavItemWidth}
      width={matchNavItemWidth}
      match={match}
    />
  ));
};

const getMatchNavItems = (matches, selectedMatchIndex = null) => {
  if (selectedMatchIndex === null) {
    return matches.map((match, i) => (
      <MatchNavItem
        isSelected={false}
        key={getMatchNavItemKey(match)}
        left={i * matchNavItemWidth}
        width={matchNavItemWidth}
        match={match}
      />
    ));
  }
  return getPaginatedMatchNavItems(matches, selectedMatchIndex);
};

const MatchNav = ({ matches, selectedMatchIndex }) => (
  <element height={5}>
    <box top={0} height={2} scrollable>
      {getMatchNavItems(matches, selectedMatchIndex)}
    </box>
  </element>
);

MatchNav.propTypes = {
  matches: PropTypes.arrayOf(matchShape).isRequired,
  selectedMatchIndex: PropTypes.number,
};

MatchNav.defaultProps = {
  selectedMatchIndex: null,
};

export default MatchNav;
