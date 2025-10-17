<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import DiceIcons from './icons/DiceIcons.vue';

const gameStore = useGameStore()
const handleDiceClick = (dice: { hold: () => void; }) => {
	dice.hold()
	// Vibrate not working TODO
	// if (navigator.vibrate && typeof navigator.vibrate === 'function') {
	// 	navigator.vibrate(50)
	// }
}
</script>

<template>
	<div class="py-8">
		<div class="flex flex-row items-center">
			<div v-for="(dice, index) in gameStore.diceSet.diceSet" :key="index" @click="handleDiceClick(dice)"
				class="cursor-pointer h-18 w-full flex flex-col justify-center transition-all duration-0"
				:class="dice.isHold ? 'transform -translate-y-1 rotate-2 scale-90 fill-blue-200 stroke-blue-600 drop-shadow-[0_0_4px_rgba(59,130,246,0.7)]' : 'fill-stone-50 stroke-black'">
				<DiceIcons :value="dice.face" />
			</div>
		</div>
	</div>
</template>

<style scope></style>
