import { getFormattedDatetime, getShortFormattedMatch } from './format';

describe('Format match data', () => {
  describe('Date time', () => {
    it('It returns current minute if the game is live', () => {
      expect(
        getFormattedDatetime({ status: 'LIVE', time: '79' }, true),
      ).toEqual('LIVE 79');
    });
  });

  describe('Short formatted match', () => {
    it('It returns a short formatted match', () => {
      expect(
        getShortFormattedMatch(
          {
            status: 'COMPLETED',
            left_team: { code: 'OM', score: 1 },
            right_team: { code: 'ACM', score: 0 },
            winner_code: 'OM',
          },
          true,
        ),
      ).toEqual('{bold}OM{/bold} 1-0 ACM');
    });
  });
});
