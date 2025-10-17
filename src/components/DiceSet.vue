<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import DiceIcons from './icons/DiceIcons.vue';

const gameStore = useGameStore()
const handleDiceClick = (dice: { hold: () => void; }) => {
	dice.hold()
	if (navigator.vibrate && typeof navigator.vibrate === 'function') {
		navigator.vibrate(50)
	}
}
</script>

<template>
	<div>
		<ul class="flex items-center justify-center h-22">
			<li v-for="(dice, index) in gameStore.diceSet.diceSet" :key="index" @click="handleDiceClick(dice)"
				class="cursor-pointer w-20 transition-all duration-0"
				:class="dice.isHold ? 'transform -translate-y-2 rotate-2 scale-90 fill-blue-200 stroke-blue-600 drop-shadow-[0_0_4px_rgba(59,130,246,0.7)]' : 'fill-stone-50 stroke-black'">
				<DiceIcons :value="dice.face" />
			</li>
		</ul>
	</div>
</template>

<style scope></style>
