import { ref } from "vue";
import * as scoreUtils from "@/utils/calcScores"

const sumOnes = ref(0)
const sumTwos = ref(0)
const sumThrees = ref(0)
const sumFours = ref(0)
const sumFives = ref(0)
const sumSixes = ref(0)
const sumChance = ref(0)
const isThreeOfKind = ref(0)
const isFourOfKind = ref(0)
const isFullHouse = ref(0)
const isSmallStraight = ref(0)
const isLargeStraight = ref(0)
const isYatzy = ref(0)

export function useCategories() {
	const FULL_HOUSE_VALUE = 25
	const SMALL_STRAIGHT_VALUE = 30
	const LARGE_STRAIGHT_VALUE = 40
	const YAHTZEE_VALUE = 50

	const update = (dices: number[]) => {
		sumOnes.value = scoreUtils.sumFacesByValue(1, dices)
		sumTwos.value = scoreUtils.sumFacesByValue(2, dices)
		sumThrees.value = scoreUtils.sumFacesByValue(3, dices)
		sumFours.value = scoreUtils.sumFacesByValue(4, dices)
		sumFives.value = scoreUtils.sumFacesByValue(5, dices)
		sumSixes.value = scoreUtils.sumFacesByValue(6, dices)
		isThreeOfKind.value = scoreUtils.checkThreeOfKind(dices)
		isFourOfKind.value = scoreUtils.checkFourOfKind(dices)
		isFullHouse.value = scoreUtils.checkFullHouse(dices) ? FULL_HOUSE_VALUE : 0
		isSmallStraight.value = scoreUtils.checkForSmallStraight(dices) ? SMALL_STRAIGHT_VALUE : 0
		isLargeStraight.value = scoreUtils.checkForLargeStraight(dices) ? LARGE_STRAIGHT_VALUE : 0
		sumChance.value = scoreUtils.calcChance(dices)
		isYatzy.value = scoreUtils.checkForYahtzee(dices) ? YAHTZEE_VALUE : 0
	}

	const reset = () => {
		sumOnes.value = 0
		sumTwos.value = 0
		sumThrees.value = 0
		sumFours.value = 0
		sumFives.value = 0
		sumSixes.value = 0
		isThreeOfKind.value = 0
		isFourOfKind.value = 0
		isFullHouse.value = 0
		isSmallStraight.value = 0
		isLargeStraight.value = 0
		sumChance.value = 0
		isYatzy.value = 0
	}

	return {
		sumOnes, sumTwos, sumThrees, sumFours, sumFives, sumSixes,
		isThreeOfKind, isFourOfKind, isFullHouse, isSmallStraight, isLargeStraight, sumChance, isYatzy,
		update,
		reset
	}
}
