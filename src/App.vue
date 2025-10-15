<script setup lang="ts">
import CategorySection from './components/CategorySection.vue'
import PlayerCountSelect from './components/PlayerCountSelect.vue'
import RollButton from './components/RollButton.vue'
import DiceSet from './components/DiceSet.vue'
import PlayerLabels from './components/PlayerLabels.vue';
import { watch } from 'vue';
import { useGameStore } from './stores/game';
import { useGame } from './composables/useGame';
import AppHeader from './components/AppHeader.vue'

const gameStore = useGameStore()
const game = useGame()

watch(() => gameStore.playerCount, (newVal) => {
	gameStore.setPlayers(newVal)
	game.startBoard()
})
</script>

<template>
	<div class="h-dvh flex flex-col max-w-md m-auto *:px-4 *:py-3 bg-neutral-200">
		<AppHeader />
		<main class="flex-1 flex flex-col gap-6">
			<PlayerCountSelect v-if="gameStore.welcomeViewActive" />
			<template v-if="gameStore.boardViewActive">
				<PlayerLabels />
				<DiceSet />
				<CategorySection />
				<RollButton />
			</template>
		</main>
		<footer class="bg-amber-500">
			<div>
				Sven Urbach, 2025
			</div>
		</footer>
	</div>
</template>
