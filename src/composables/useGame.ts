import { useGameStore } from "@/stores/game";
import { useView } from '@/composables/useView'
import { useCategories } from "@/composables/useCategories"
import { usePlayerScores } from "@/composables/usePlayerScores"
import { computed } from "vue";

export function useGame() {
	const gameStore = useGameStore()
	const categories = useCategories()
	const playerScore = usePlayerScores()
	const { setView } = useView()

	const diceSet = computed(() => gameStore.diceSet.diceSet.map(dice => dice.face))

	const setNextPlayer = () => {
		const nextPlayerId = (gameStore.currentPlayerId % gameStore.playerCount) + 1
		gameStore.setCurrentPlayerId(nextPlayerId)
		return false
	}

	const startBoard = () => {
		setView('board')
		gameStore.setCurrentPlayerId(1)
		gameStore.diceSet.resetAll()
		gameStore.resetRolls()
		categories.reset()
	}

	const endTurn = () => {
		if (isGameEnd()) {
			setView('gameover')
		}
		gameStore.resetRolls()
		gameStore.diceSet.resetAll()
		setNextPlayer()
		categories.reset()
	}

	const isGameEnd = () => {
		if (gameStore.currentPlayerId === gameStore.playerCount) {
			const currentPlayer = gameStore.getCurrentPlayer;
			if (currentPlayer) {
				return playerScore.isPlayerScoreCardComplete(currentPlayer);
			}
			return false;
		}
	}

	const diceRolled = () => {
		gameStore.diceSet.rollAll()
		categories.update(diceSet.value)
		gameStore.rollsLeft--
	}

	const reset = () => {
		setView('welcome')
	}

	return {
		startBoard,
		diceRolled,
		endTurn,
		reset
	}
}
