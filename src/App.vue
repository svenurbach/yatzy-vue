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
import AppFooter from './components/AppFooter.vue';
import GameOverView from './components/GameOverView.vue';

const gameStore = useGameStore()
const game = useGame()

watch(() => gameStore.playerCount, (newVal) => {
	gameStore.setPlayers(newVal)
	game.startBoard()
})


</script>

<template>
	<div class="h-dvh flex flex-col max-w-md m-auto *:px-4 bg-bg">
		<AppHeader />
		<main id="app-main" class="relative flex-1 flex flex-col">
			<PlayerCountSelect v-if="gameStore.welcomeViewActive" />
			<template v-if="gameStore.boardViewActive">
				<PlayerLabels />
				<DiceSet />
				<CategorySection />
				<RollButton />
			</template>
			<template v-if="gameStore.gameEndView">
				<GameOverView />
			</template>
		</main>
		<AppFooter />
	</div>
</template>
