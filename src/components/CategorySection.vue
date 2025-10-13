<script setup lang="ts">
import { computed } from 'vue';
import CategoryItem from './CategoryItem.vue';
import { useCategories } from '@/composables/useCategories'
import { useGameStore } from "@/stores/game";
import { useGame } from "@/composables/useGame";
import type { Player } from '@/types/player';

const gameStore = useGameStore()
const game = useGame()
const { sumOnes, sumTwos, sumThrees, sumFours, sumFives, sumSixes, isThreeOfKind, isFourOfKind,
	isFullHouse, isSmallStraight, isLargeStraight, sumChance, isYatzy } = useCategories()

const currentPlayer = computed(() => gameStore.getCurrentPlayer)

const categories = [
	{ key: "aces", label: "1", score: sumOnes },
	{ key: "twos", label: "2", score: sumTwos },
	{ key: "threes", label: "3", score: sumThrees },
	{ key: "fours", label: "4", score: sumFours },
	{ key: "fives", label: "5", score: sumFives },
	{ key: "sixes", label: "6", score: sumSixes },
	{ key: "threeOfKind", label: "3x", score: isThreeOfKind },
	{ key: "fourOfKind", label: "4x", score: isFourOfKind },
	{ key: "fullHouse", label: "FH", score: isFullHouse },
	{ key: "smallStraight", label: "KS", score: isSmallStraight },
	{ key: "largeStraight", label: "LS", score: isLargeStraight },
	{ key: "chance", label: "CH", score: sumChance },
	{ key: "yatzy", label: "Y!", score: isYatzy },
]

const setScore = (category: keyof Player, score: number) => {
	if (currentPlayer.value) {
		// Bonus Yatzy +100
		if (currentPlayer.value['yatzy']) {
			currentPlayer.value['yatzyBonusCount'] = +1
		}
		gameStore.setCategoryScore(currentPlayer.value.id, category, score)
		gameStore.calculatePlayerScores(currentPlayer.value)
	}
	game.endTurn()
}
</script>

<template>
	<div v-if="currentPlayer" class="grid grid-cols-6 gap-x-2 gap-y-4 m-auto">
		<CategoryItem v-for="category in categories" :key="category.key" :playerStatus="currentPlayer[category.key]"
			:value="category.score.value" @clicked="setScore(category.key, category.score.value)"
			class="h-18 last:col-span-full last:w-full">
			{{ category.label }}
		</CategoryItem>
	</div>
</template>
