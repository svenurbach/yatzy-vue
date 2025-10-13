// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from "@/stores/game";
import { beforeEach, describe, expect, it } from 'vitest';
import type { Player } from '@/types/player';

describe('GameStore', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

//   it('calculatePlayerScores', () => {
//     const gs = useGameStore()
// 	const player: Player = {
// 		id: 1,
// 		totalScore: 0,
// 		upperSectionScore: 0,
// 		lowerSectionScore: 0,
// 		aces: null,
// 		twos: null,
// 		threes: null,
// 		fours: null,
// 		fives: null,
// 		sixes: null,
// 		threeOfKind: null,
// 		fourOfKind: null,
// 		fullHouse: null,
// 		smallStraight: null,
// 		largeStraight: null,
// 		chance: null,
// 		yatzy: null,
// 		yatzyBonusCount: null
// 	}
//     expect(counter.n).toBe(0)
//     counter.increment()
//     expect(counter.n).toBe(1)
//   })

})
