<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import DiceIcons from './icons/DiceIcons.vue';

const gameStore = useGameStore()
</script>

<template>
	<div>
		<ul class="flex items-center justify-center h-30">
			<li v-for="(dice, index) in gameStore.diceSet.diceSet" :key="index" @click="dice.hold()"
				class="cursor-pointer w-20"
				:class="dice.isHold ? '!fill-red-400 opacity-50' : 'fill-stone-50'">
				<DiceIcons :value="dice.face" />
			</li>
		</ul>
	</div>
</template>
