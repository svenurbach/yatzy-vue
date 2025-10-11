<script setup lang="ts">
import CategorySection from './components/CategorySection.vue'
import { useGame } from '@/composables/useGame'
import PlayerCountSelect from './components/PlayerCountSelect.vue'
import { useGameStore } from '@/stores/game';
import { watch } from 'vue';
import RollButton from './components/RollButton.vue'
import DiceSet from './components/DiceSet.vue'
import PlayerLabels from './components/PlayerLabels.vue';

const game = useGame()
const gameStore = useGameStore();

watch(() => gameStore.playerCount, (newVal) => {
	gameStore.setPlayers(newVal)
	game.startBoard()
	console.log("getCurrentPlayer", gameStore.getCurrentPlayer);
})
</script>

<template>
	<div class="flex flex-col gap-6 max-w-lg m-auto p-4 bg-neutral-200">
		<header class="flex">
			<div>
				<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="25" height="25" />
			</div>
			<div>
				<h1>Yatzy!</h1>
			</div>
		</header>
		<PlayerCountSelect />
		<PlayerLabels />
		<main class="flex flex-col gap-6">
			<DiceSet />
			<CategorySection />
			<RollButton />
		</main>
	</div>
</template>
