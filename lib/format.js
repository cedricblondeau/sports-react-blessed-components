import moment from './moment';

function getFormattedScore(match) {
  return `${match.left_team.score}-${match.right_team.score}`;
}

function getFormattedTeamCodeForCompletedMatch(teamCode, winnerCode) {
  if (winnerCode && winnerCode === teamCode) {
    return `{bold}${teamCode}{/bold}`;
  }
  return teamCode;
}

function getShortFormattedCompletedMatch(match) {
  return `${getFormattedTeamCodeForCompletedMatch(
    match.left_team.code,
    match.winner_code,
  )} ${getFormattedScore(match)} ${getFormattedTeamCodeForCompletedMatch(
    match.right_team.code,
    match.winner_code,
  )}`;
}

function getShortFormattedNonCompletedMatch(match) {
  return `${match.left_team.code} - ${match.right_team.code}`;
}

function getShortFormattedMatch(match) {
  if (match.status === 'COMPLETED') {
    return getShortFormattedCompletedMatch(match);
  }
  return getShortFormattedNonCompletedMatch(match);
}

function getFormattedDatetime(match, displayMinuteIfLive = false) {
  if (displayMinuteIfLive && match.status === 'LIVE') {
    return `LIVE ${match.time}`;
  }

  return moment(match.datetime)
    .local()
    .calendar();
}

export { getFormattedDatetime, getShortFormattedMatch };
