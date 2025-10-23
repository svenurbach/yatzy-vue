<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGameStore } from '@/stores/game';
import { useHighscoreStore } from '@/stores/highscore';
import { useGame } from '@/composables/useGame'
import AppButton from '@/components/AppButton.vue';

const gameStore = useGameStore()
const highscoreStore = useHighscoreStore()
const game = useGame()

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

const submitted = ref(false)
const handleHighscoreSubmit = (name: string, score: number) => {
	if (submitted.value === false) {
		highscoreStore.addScore(name, score)
		submitted.value = true
	}
}
</script>
<template>
	<div v-if="winner" class="flex flex-col items-center">
		<!-- check if only one player. then no "player has won" -->
		<div class="text-2xl font-bold italic">{{ winnerTitle }} hat gewonnen!</div>
		<div><span class="font-bold">{{ winner.totalScore }}</span> Punkte</div>
		<div class="text-6xl py-6">🏆</div>
		<div class="flex flex-col gap-8 items-center w-2/3 pb-10">
			<div class="flex flex-col items-center gap-1">
				<input type="text" v-model="winnerName" :placeholder="`Spieler ${winner.id}`"
					class="border-2 px-6 py-2 bg-text-inverted w-full rounded text-center" />
				<AppButton label="Highscore eintragen" color="green"
					@click="handleHighscoreSubmit(winnerName, winner.totalScore)" />
			</div>
		</div>
		<div class="flex flex-col items-center w-2/3 gap-1">
			<div v-for="(player, index) in otherPlayers" :key="index">
				Spieler {{ player.id }} erzielte {{ player.totalScore }} Punkte
			</div>
			<AppButton label="Revanche!" color="red" @click="game.reset()" />
		</div>
	</div>
</template>
