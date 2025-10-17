<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import type { Player } from "@/types/player";
import { computed, ref } from "vue";
import PlayerScoreDetails from "./PlayerScoreDetails.vue";

const gameStore = useGameStore()
const players = computed(() => gameStore.players)
const currentPlayerId = computed(() => gameStore.currentPlayerId)
// #1 yellow crown on corner
const starredPlayerId = computed(() => {
	if (players.value.length === 1) {
		return undefined
	}
	return gameStore.getPlayerInLeaderId
})
const showDetails = ref(false)
const playerForDetails = ref<Player>()
const handleScoreClick = (player: Player) => {
	if (showDetails.value && player !== playerForDetails.value) {
		playerForDetails.value = player
	} else {
		playerForDetails.value = player
		showDetails.value = !showDetails.value
	}
}
// hasBonus green plus
</script>

<template>
	<div id="player-labels" class="relative flex flex-row justify-between pt-6">
		<button v-for="(player, index) in players" :key="index"
			class="relative flex flex-row border-2 rounded-lg bg-white w-[7.5ch] cursor-pointer"
			:class="currentPlayerId === player.id ? 'border-success shadow-[0_0_3px_oklch(60%_0.145_163.225)]' : 'border-primary'"
			@click="handleScoreClick(player)">
			<!-- Crown Badge Start -->
			<div v-if="player.id === starredPlayerId"
				class="absolute -top-6 left-0.5 stroke stroke-black fill-amber-300">
				<svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14z" />
				</svg>
			</div>
			<!-- Crown Badge End -->
			<div class="text-bg px-1 pr-2" :class="[
				player.id === currentPlayerId ? 'bg-success' : 'bg-primary'
			]">
				S{{ player.id }}
			</div>
			<div class="font-mono px-1 grow-1 text-right">
				{{ player.totalScore }}
			</div>
		</button>
	</div>
	<PlayerScoreDetails :open="showDetails" :player="playerForDetails" target="#player-labels" />
</template>
