import { ref, computed, readonly } from 'vue'
import { defineStore } from 'pinia'
import type { Player } from '@/types/player'
import { useDiceSet } from '@/composables/useDiceSet'
import { useScores } from '@/composables/useScores'

export const useGameStore = defineStore('game', () => {
	//  States / Data
	const score = useScores()
	const diceSet = useDiceSet(5)
	const rollsLeft = ref(3)
	const hasDecision = ref(false)
	const playerCount = ref(0)
	const MAX_PLAYER = 4;
	const players = ref<Player[]>([])
	const currentPlayerId = ref(0)
	// Views
	const welcomeViewActive = ref(true)
	const boardViewActive = ref(false)

	// Getters / Properties
	const getCurrentPlayer = computed((): Player | undefined => players.value.find(p => p.id === currentPlayerId.value))
	const getDiceSet = computed(() => diceSet.diceSet.map(dice => dice.face))


	function getPlayerByID(playerId: number): Player | undefined {
		const player = players.value.find(p => p.id === playerId)
		if (!player) {
			console.warn(`Spieler mit ID ${playerId} nicht gefunden.`)
		}
		return player
	}

	// Actions (Setter) / Methods
	function setPlayerScores(player: Player) {
		player.upperSectionScore = score.getUpperSectionScore(player)
		player.upperSectionBonus = score.checkUpperSectionBonus(player)
		player.lowerSectionScore = score.getLowerSectionScore(player)
		player.totalScore = score.getTotalScore(player)
	}


	function setPlayerCount(count: number): void {
		playerCount.value = count;
	}

	function setCurrentPlayerId(playerId: number): void {
		currentPlayerId.value = playerId;
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
		console.log("setPlayer")
		for (let i = 0; i < count; i++) {
			const newPlayer: Player = {
				id: i + 1,
				totalScore: 0,
				upperSectionScore: 0,
				upperSectionBonus: false,
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
				yatzy: null,
				yatzyBonusCount: null
			}
			players.value.push(newPlayer);
		}
	}

	function resetRolls(): void {
		rollsLeft.value = 3;
	}

	return {
		MAX_PLAYER,
		players,
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
		setPlayerScores
	}
})
