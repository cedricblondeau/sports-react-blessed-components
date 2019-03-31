import { arrayOf, shape, number, string, oneOf } from 'prop-types';

const eventShape = shape({
  time: string.isRequired,
  type: string.isRequired,
  text: string.isRequired,
});

const chalkColors = oneOf([
  'black',
  'red',
  'yellow',
  'green',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
]);

const matchTeamShape = shape({
  code: string.isRequired,
  name: string.isRequired,
  color: chalkColors.isRequired,
  score: number.isRequired,
  events: arrayOf(eventShape),
});

const matchShape = shape({
  id: string.isRequired,
  left_team: matchTeamShape.isRequired,
  right_team: matchTeamShape.isRequired,
  winner_code: string.isRequired,
  venue: string.isRequired,
  time: string.isRequired,
  datetime: string.isRequired,
  status: oneOf(['SCHEDULED', 'LIVE', 'COMPLETED']),
});

const standingShape = shape({
  name: string.isRequired,
  color: chalkColors.isRequired,
  points: string.isRequired,
});

export { eventShape, matchShape, standingShape };
