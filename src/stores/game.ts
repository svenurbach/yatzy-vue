import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Player} from '@/types/player'

export const useGameStore = defineStore('game', () => {
	//  States / Data
	const playerCount = ref(1)
	const player = ref<Player[]>()

	// Getters / Properties
	const doubleCount = computed(() => playerCount.value * 2)

	// Actions / Methods
	function increment() {
		playerCount.value++
	}

	function changePlayer() {
		console.log("ChangePlayer");
	}

	function newGame() {
		console.log("startNewGame");

	}

	return { playerCount, doubleCount, player, increment }
})
