import { ref, computed, readonly } from 'vue'
import { defineStore } from 'pinia'
import type { Player } from '@/types/player'
import { useDiceSet } from '@/composables/useDiceSet'

export const useGameStore = defineStore('game', () => {
	//  States / Data
	const diceSet = useDiceSet(5)
	const rollsLeft = ref(3)
	const hasDecision = ref(false)
	const playerCount = ref(0)
	const MAX_PLAYER = 3;
	const players = ref<Player[]>([])
	const currentPlayerId = ref(0)
	// Views
	const welcomeViewActive = ref(true)
	const boardViewActive = ref(false)

	// Getters / Properties
	const getCurrentPlayer = computed(() => players.value.find(p => p.id === currentPlayerId.value))
	const getDiceSet = computed(() => diceSet.diceSet.map(dice => dice.face))


	function getPlayerByID(playerId: number): Player | undefined {
		const player = players.value.find(p => p.id === playerId)
		if (!player) {
			console.warn(`Spieler mit ID ${playerId} nicht gefunden.`)
		}
		return player
	}

	// Actions (Setter) / Methods
	function setPlayerCount(count: number): void {
		playerCount.value = count;
		console.log("playerCount.value", playerCount.value);

	}

	function setCurrentPlayerId(playerId: number): void {
		currentPlayerId.value = playerId;
		console.log("currentPlayerId changed", currentPlayerId.value);

	}

	function clearPlayers(): void {
		players.value = [];
	}

	function setCategoryScore(playerId: number, category: keyof Player, score: number) {
		const player = getPlayerByID(playerId)
		if (player && player[category] === null) {
			player[category] = score
		}
	}

	function setPlayers(count: number): void {
		clearPlayers();
		for (let i = 0; i < count; i++) {
			const newPlayer: Player = {
				id: i + 1,
				totalScore: 0,
				upperSectionScore: 0,
				lowerSectionScore: 0,
				aces: null,
				twos: null,
				threes: null,
				fours: null,
				fives: null,
				sixes: null,
				threeOfKind: null,
				fourOfKind: null,
				fullHouse: null,
				smallStraight: null,
				largeStraight: null,
				chance: null,
				yatzy: null
			}
			players.value.push(newPlayer);
		}
		console.log("setPlayers", players.value)
	}

	function resetRolls(): void {
		rollsLeft.value = 3;
	}

	return {
		MAX_PLAYER,
		diceSet,
		getDiceSet,
		rollsLeft,
		resetRolls,
		hasDecision,
		setPlayerCount,
		setPlayers,
		setCurrentPlayerId,
		setCategoryScore,
		currentPlayerId,
		playerCount: readonly(playerCount),
		welcomeViewActive,
		boardViewActive,
		getCurrentPlayer,
	}
})
