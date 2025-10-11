import { useGameStore } from "@/stores/game";
import { useCategories } from "@/composables/useCategories"
import { computed } from "vue";

export function useGame() {
	const gameStore = useGameStore()
	const categories = useCategories()

	const diceSet = computed(() => gameStore.diceSet.diceSet.map(dice => dice.face))

	const setNextPlayer = () => {
		const nextPlayerId = (gameStore.currentPlayerId % gameStore.playerCount) + 1
		gameStore.setCurrentPlayerId(nextPlayerId)
	}

	const startBoard = () => {
		gameStore.welcomeViewActive = false
		gameStore.boardViewActive = true
		gameStore.setCurrentPlayerId(1)
		gameStore.diceSet.resetAll()
		gameStore.resetRolls()
	}

	const endTurn = () => {
		gameStore.resetRolls()
		gameStore.diceSet.resetAll()
		setNextPlayer()
		categories.reset()
	}

	const diceRolled = () => {
		categories.update(diceSet.value)
		gameStore.rollsLeft--
	}

	return {
		startBoard,
		diceRolled,
		endTurn
	}
}
