import { ref } from "vue";
import * as scoreUtils from "@/utils/calcScores"

const sumOnes = ref(-1)
const sumTwos = ref(-1)
const sumThrees = ref(-1)
const sumFours = ref(-1)
const sumFives = ref(-1)
const sumSixes = ref(-1)
const sumChance = ref(-1)
const isThreeOfKind = ref(-1)
const isFourOfKind = ref(-1)
const isFullHouse = ref(-1)
const isSmallStraight = ref(-1)
const isLargeStraight = ref(-1)
const isYatzy = ref(-1)

export function useCategories() {
	const FULL_HOUSE_VALUE = 25
	const SMALL_STRAIGHT_VALUE = 30
	const LARGE_STRAIGHT_VALUE = 40
	const YAHTZEE_VALUE = 50

	const update = (dices: number[]) => {
		sumOnes.value = scoreUtils.sumFacesByValue(1, dices) ?? 0
		sumTwos.value = scoreUtils.sumFacesByValue(2, dices) ?? 0
		sumThrees.value = scoreUtils.sumFacesByValue(3, dices) ?? 0
		sumFours.value = scoreUtils.sumFacesByValue(4, dices) ?? 0
		sumFives.value = scoreUtils.sumFacesByValue(5, dices) ?? 0
		sumSixes.value = scoreUtils.sumFacesByValue(6, dices) ?? 0
		isThreeOfKind.value = scoreUtils.checkThreeOfKind(dices) ?? 0
		isFourOfKind.value = scoreUtils.checkFourOfKind(dices) ?? 0
		isFullHouse.value = scoreUtils.checkFullHouse(dices) ? FULL_HOUSE_VALUE : 0
		isSmallStraight.value = scoreUtils.checkForSmallStraight(dices) ? SMALL_STRAIGHT_VALUE : 0
		isLargeStraight.value = scoreUtils.checkForLargeStraight(dices) ? LARGE_STRAIGHT_VALUE : 0
		sumChance.value = scoreUtils.calcChance(dices) ?? 0
		isYatzy.value = scoreUtils.checkForYahtzee(dices) ? YAHTZEE_VALUE : 0
	}

	const reset = () => {
		sumOnes.value = -1
		sumTwos.value = -1
		sumThrees.value = -1
		sumFours.value = -1
		sumFives.value = -1
		sumSixes.value = -1
		isThreeOfKind.value = -1
		isFourOfKind.value = -1
		isFullHouse.value = -1
		isSmallStraight.value = -1
		isLargeStraight.value = -1
		sumChance.value = -1
		isYatzy.value = -1
	}

	return {
		sumOnes, sumTwos, sumThrees, sumFours, sumFives, sumSixes,
		isThreeOfKind, isFourOfKind, isFullHouse, isSmallStraight, isLargeStraight, sumChance, isYatzy,
		update,
		reset
	}
}
