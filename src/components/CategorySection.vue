<script setup lang="ts">
import { computed } from 'vue';
import CategoryItem from './CategoryItem.vue';
import { useCategories } from '@/composables/useCategories'
import { useGameStore } from "@/stores/game";
import { useGame } from "@/composables/useGame";
import type { Player } from '@/types/player';
import IconFullHouse from './icons/IconFullHouse.vue';
import IconStreet from './icons/IconStreet.vue';
import UpperIcons from './icons/UpperIcons.vue';

const gameStore = useGameStore()
const game = useGame()
const { sumOnes, sumTwos, sumThrees, sumFours, sumFives, sumSixes, isThreeOfKind, isFourOfKind,
	isFullHouse, isSmallStraight, isLargeStraight, sumChance, isYatzy } = useCategories()

const currentPlayer = computed(() => gameStore.getCurrentPlayer)

const categories = [
	{ key: "aces", label: 1, icon: UpperIcons, iconSize: "w-8", score: sumOnes },
	{ key: "twos", label: 2, icon: UpperIcons, iconSize: "w-8", score: sumTwos },
	{ key: "threes", label: 3, icon: UpperIcons, iconSize: "w-8", score: sumThrees },
	{ key: "fours", label: 4, icon: UpperIcons, iconSize: "w-8", score: sumFours },
	{ key: "fives", label: 5, icon: UpperIcons, iconSize: "w-8", score: sumFives },
	{ key: "sixes", label: 6, icon: UpperIcons, iconSize: "w-8", score: sumSixes },
	{ key: "threeOfKind", label: "3x", score: isThreeOfKind },
	{ key: "fourOfKind", label: "4x", score: isFourOfKind },
	{ key: "fullHouse", label: "FH", icon: IconFullHouse, score: isFullHouse },
	{ key: "smallStraight", label: "KS", icon: IconStreet, iconSize: "size-4", score: isSmallStraight },
	{ key: "largeStraight", label: "GS", icon: IconStreet, score: isLargeStraight },
	{ key: "chance", label: "?", score: sumChance },
	{ key: "yatzy", label: "Y!", score: isYatzy },
]

const setScore = (category: keyof Player, score: number) => {
	if (currentPlayer.value) {
		// Check if bonus Yatzy
		if (currentPlayer.value['yatzy'] && isYatzy) {
			currentPlayer.value['yatzyBonusCount']++
		}
		gameStore.setCategoryScore(currentPlayer.value.id, category, score)
		gameStore.setPlayerScores(currentPlayer.value)
	}
	game.endTurn()
}
</script>

<template>
	<div v-if="currentPlayer" class="grid grid-cols-6 gap-x-2 gap-y-4">
		<CategoryItem v-for="category in categories" :key="category.key" :playerStatus="currentPlayer[category.key]"
			:value="category.score.value" @clicked="setScore(category.key, category.score.value)"
			class="h-19 last:col-span-full last:w-full">
			<component v-if="category.icon" :is="category.icon" :value="category.label" :class="category.iconSize || 'w-6'"/>
			<span class="text-xl" v-else>{{ category.label }}</span>
		</CategoryItem>
	</div>
</template>
