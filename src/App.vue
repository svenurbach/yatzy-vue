<script setup lang="ts">
import CategorySection from './components/CategorySection.vue'
import PlayerCountSelect from './components/PlayerCountSelect.vue'
import RollButton from './components/RollButton.vue'
import DiceSet from './components/DiceSet.vue'
import PlayerLabels from './components/PlayerLabels.vue';
import { watch } from 'vue';
import { useGameStore } from './stores/game';
import { useGame } from './composables/useGame';

const gameStore = useGameStore()
const game = useGame()

watch(() => gameStore.playerCount, (newVal) => {
	gameStore.setPlayers(newVal)
	game.startBoard()
})
</script>

<template>
	<div class="flex flex-col max-w-lg m-auto *:p-4 bg-neutral-200">
		<header class="flex flex-row justify-between bg-amber-500">
			<div>
				<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="25" height="25" />
			</div>
			<div>
				<h1>Yatzy!</h1>
			</div>
			<div>
				BM
			</div>
		</header>
		<main class="flex flex-col gap-6">
			<PlayerCountSelect v-if="gameStore.welcomeViewActive"/>
			<div v-if="gameStore.boardViewActive">
				<PlayerLabels />
				<DiceSet />
				<CategorySection />
				<RollButton />
			</div>
		</main>
		<footer class="bg-amber-500">
			<div>
				Sven Urbach
			</div>
		</footer>
	</div>
</template>
