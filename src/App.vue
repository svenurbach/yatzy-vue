<script setup lang="ts">
import CategorySection from './components/CategorySection.vue'
import PlayerCountSelect from './components/PlayerCountSelect.vue'
import RollButton from './components/RollButton.vue'
import DiceSet from './components/DiceSet.vue'
import PlayerLabels from './components/PlayerLabels.vue';
import { computed, watch, ref } from 'vue';
import { useGameStore } from './stores/game';
import { useGame } from './composables/useGame';
import AppHeader from './components/AppHeader.vue'

const gameStore = useGameStore()
const game = useGame()

watch(() => gameStore.playerCount, (newVal) => {
	gameStore.setPlayers(newVal)
	game.startBoard()
})

const winner = computed(() => {
	return typeof gameStore.getPlayerInLeaderId === 'number'
		? gameStore.getPlayerByID(gameStore.getPlayerInLeaderId)
		: null
})
const otherPlayers = computed(() => {
	const players: Player[] = []
	gameStore.players.forEach(player => {
		if (winner.value && player.id !== winner.value.id) {
			players.push(player)
		}
	})
	return players
})
const winnerName = ref("")
const winnerTitle = computed(() => winnerName.value.length > 0 ? winnerName.value : `Spieler ${winner.value?.id}`)
</script>

<template>
	<div class="h-dvh flex flex-col max-w-md m-auto *:px-4 *:py-3 bg-neutral-200">
		<AppHeader />
		<main id="app-main" class="relative flex-1 flex flex-col gap-6">
			<PlayerCountSelect v-if="gameStore.welcomeViewActive" />
			<template v-if="gameStore.boardViewActive">
				<PlayerLabels />
				<DiceSet />
				<CategorySection />
				<RollButton />
			</template>
			<template v-if="gameStore.gameEndView && winner">
				<div class="flex flex-col items-center gap-10">
					<!-- check if only one player. then no "player has won" -->
					<div class="flex flex-col items-center w-2/3">
						<div class="text-2xl font-bold italic">{{ winnerTitle }} hat gewonnen!</div>
						<div><span class="font-bold">{{ winner.totalScore }}</span> Punkte</div>
						<div class="text-6xl py-6">🏆</div>
						<div class="flex flex-col items-center gap-1">
							<input type="text" v-model="winnerName" :placeholder="`Namen eingeben! (Spieler ${winner.id})`" class="border px-6 py-2 bg-white w-full text-center" />
							<button type="submit" class="px-6 py-2 border-2 rounded bg-green-300 w-full cursor-pointer">Highscore eintragen</button>
						</div>
					</div>
					<div class="flex flex-col items-center w-2/3 gap-1">
						<div v-for="(player, index) in otherPlayers" :key="index">
							Spieler {{ player.id }} erzielte {{ player.totalScore }} Punkte
						</div>
						<button type="button" class="px-6 py-2 border-2 rounded bg-red-300 w-full cursor-pointer">Revanche!</button>
					</div>
				</div>
			</template>
		</main>
		<footer class="bg-amber-500">
			<div>
				Sven Urbach, 2025
			</div>
		</footer>
	</div>
</template>
