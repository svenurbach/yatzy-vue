import type { Player } from "@/types/player"

export function usePlayerScores() {
	const UPPER_CATEGORIES = ['aces', 'twos', 'threes', 'fours', 'fives', 'sixes'] as const
	const LOWER_CATEGORIES = ['threeOfKind', 'fourOfKind', 'fullHouse', 'smallStraight', 'largeStraight', 'chance', 'yatzy'] as const
	const BONUS_BREAKPOINT = 63
	const UPPER_BONUS = 35
	const YATZY_BONUS = 100

	function checkUpperSectionBonus(player: Player) {
		return player.upperSectionScore >= BONUS_BREAKPOINT
	}

	function getUpperSectionBonus(player: Player) {
		return player.upperSectionBonus ? UPPER_BONUS : 0
	}

	function getUpperSectionScore(player: Player) {
		const upperSectionScore = UPPER_CATEGORIES.reduce((sum, category) => {
			return sum + (player[category] || 0)
		}, 0)
		return upperSectionScore
	}

	function getLowerSectionScore(player: Player) {
		const lowerSectionScore = LOWER_CATEGORIES.reduce((sum, category) => {
			return sum + (player[category] || 0)
		}, 0)
		return lowerSectionScore
	}

	function getYatzyBonus(player: Player) {
		return (player.yatzyBonusCount ?? 0) * YATZY_BONUS
	}

	function getTotalScore(player: Player) {
		return getUpperSectionScore(player) + getUpperSectionBonus(player) + getLowerSectionScore(player) + getYatzyBonus(player)
	}

	function isPlayerScoreCardComplete(player: Player) {
		return !Object.values(player).some(value => value === null)
	}

	return {
		BONUS_BREAKPOINT,
		UPPER_BONUS,
		YATZY_BONUS,
		checkUpperSectionBonus,
		getUpperSectionBonus,
		getUpperSectionScore,
		getLowerSectionScore,
		getYatzyBonus,
		getTotalScore,
		isPlayerScoreCardComplete
	}
}
