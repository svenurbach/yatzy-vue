<script setup lang="ts">
import CategoryItem from './CategoryItem.vue';
import { useGame } from '@/composables/useGame'

const { sumOnes, sumTwos, sumThrees, sumFours, sumFives, sumSixes, isThreeOfKind, isFourOfKind, isFullHouse, isSmallStraight, isLargeStraight, sumChance, isYahtzee } = useGame()
</script>

<template>
	<div class="w-max grid grid-cols-6 gap-x-2 gap-y-4">
		<CategoryItem :value="sumOnes">1</CategoryItem>
		<CategoryItem :value="sumTwos">2</CategoryItem>
		<CategoryItem :value="sumThrees">3</CategoryItem>
		<CategoryItem :value="sumFours">4</CategoryItem>
		<CategoryItem :value="sumFives">5</CategoryItem>
		<CategoryItem :value="sumSixes">6</CategoryItem>
		<CategoryItem :value="isThreeOfKind">3x</CategoryItem>
		<CategoryItem :value="isFourOfKind">4x</CategoryItem>
		<CategoryItem :value="isFullHouse">FH</CategoryItem>
		<CategoryItem :value="isSmallStraight">KS</CategoryItem>
		<CategoryItem :value="isLargeStraight">LS</CategoryItem>
		<CategoryItem :value="sumChance">CH</CategoryItem>
		<CategoryItem :value="isYahtzee" class="col-span-full w-full">Y!</CategoryItem>
	</div>
</template>
