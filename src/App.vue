<script setup lang="ts">
import { watch } from 'vue';
import { useGameStore } from '@/stores/game';
import { useGame } from '@/composables/useGame';
import { useView } from '@/composables/useView';
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue';
import BoardView from '@/Views/BoardView.vue';
import HighscoreView from '@/Views/HighscoreView.vue'
import GameOverView from '@/Views/GameOverView.vue';
import WelcomeView from '@/Views/WelcomeView.vue';
import OptionsView from '@/Views/OptionsView.vue';

const gameStore = useGameStore()
const game = useGame()
const { isView } = useView()

watch(() => gameStore.playerCount, (newVal) => {
	gameStore.setPlayers(newVal)
	game.startBoard()
})
</script>

<template>
	<div id="app-wrapper" class="h-dvh lg:max-h-210 grid grid-rows-[auto_1fr_auto] max-w-md m-auto *:px-4">
		<AppHeader />
		<main class="*:h-full bg-bg py-6">
			<WelcomeView v-if="isView('welcome')" />
			<BoardView v-if="isView('board')" />
			<GameOverView v-if="isView('gameover')" />
			<HighscoreView v-if="isView('highscore')" />
			<OptionsView v-if="isView('options')" />
		</main>
		<AppFooter />
	</div>
</template>
