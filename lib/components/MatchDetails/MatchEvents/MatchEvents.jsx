import PropTypes from 'prop-types';
import React from 'react';

import { eventShape } from '../../../shapes';

const getFormattedMatchEventLeft = event =>
  `${event.type} ${event.time} ${event.text}`;

const getFormattedMatchEventRight = event =>
  `${event.text} ${event.time} ${event.type}`;

const getEventsContent = (events, align) =>
  events.reduce((content, event) => {
    if (align === 'right') {
      return `${content}${getFormattedMatchEventRight(event)}\n`;
    }
    return `${content}${getFormattedMatchEventLeft(event)}\n`;
  }, '');

const MatchEvents = ({ events, align }) => (
  <box content={getEventsContent(events, align)} align={align} />
);

MatchEvents.propTypes = {
  align: PropTypes.oneOf(['left', 'right']).isRequired,
  events: PropTypes.arrayOf(eventShape).isRequired,
};

export default MatchEvents;
