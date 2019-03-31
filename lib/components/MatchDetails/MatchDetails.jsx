import React from 'react';

import { getFormattedDatetime } from '../../format';
import { matchShape } from '../../shapes';
import MatchTeamScoreboard from './MatchTeamScoreboard/MatchTeamScoreboard';

const MatchDetails = ({ match }) => (
  <element>
    <element width="100%" top={0}>
      <box content={match.venue} width="33.33%" left={0} />
      <box content={match.time} align="center" width="33.33%" left="33.33%" />
      <box
        content={getFormattedDatetime(match)}
        align="right"
        width="33.33%"
        left="66.66%"
      />
    </element>
    <element width="100%" top={1}>
      <box left={0} width="50%-5" height="100%" align="right">
        <MatchTeamScoreboard
          align="right"
          events={match.left_team.events}
          score={match.left_team.score}
          teamName={match.left_team.name}
          teamColor={match.left_team.color}
        />
      </box>
      <box left="50%+5" width="50%-5" height="100%">
        <MatchTeamScoreboard
          align="left"
          events={match.right_team.events}
          score={match.right_team.score}
          teamName={match.right_team.name}
          teamColor={match.right_team.color}
        />
      </box>
    </element>
  </element>
);

MatchDetails.propTypes = { match: matchShape.isRequired };

export default MatchDetails;
