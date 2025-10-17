<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore()

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
	<div v-if="winner" class="flex flex-col items-center gap-10">
		<!-- check if only one player. then no "player has won" -->
		<div class="flex flex-col items-center w-2/3">
			<div class="text-2xl font-bold italic">{{ winnerTitle }} hat gewonnen!</div>
			<div><span class="font-bold">{{ winner.totalScore }}</span> Punkte</div>
			<div class="text-6xl py-6">🏆</div>
			<div class="flex flex-col items-center gap-1">
				<input type="text" v-model="winnerName" :placeholder="`Namen eingeben! (Spieler ${winner.id})`"
					class="border px-6 py-2 bg-white w-full text-center" />
				<button type="submit" class="px-6 py-2 border-2 rounded bg-green-300 w-full cursor-pointer">Highscore
					eintragen</button>
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
