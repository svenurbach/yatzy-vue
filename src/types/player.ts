export interface Player {
  totalScore: number;
  upperSectionScore: number;
  lowerSectionScore: number;
  aces: null | number;
  twos: null | number;
  threes: null | number;
  fours: null | number;
  fives: null | number;
  sixes: null | number;
  threeOfKind: null | number;
  fourOfKind: null | number;
  fullHouse: null | number;
  smallStraight: null | number;
  largeStraight: null | number;
  chance: null | number;
  yatzy: null | number;
}
