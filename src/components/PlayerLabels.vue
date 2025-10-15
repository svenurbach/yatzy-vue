<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { computed } from "vue";

const gameStore = useGameStore()
const players = computed(() => gameStore.players)
const currentPlayerId = computed(() => gameStore.currentPlayerId)
// #1 yellow crown on corner
const starredPlayerId = computed(() => {
	let playerId: number | null = null
	let max = 0
	players.value.forEach((player) => {
		if (player.totalScore > max) {
			max = player.totalScore
			playerId = player.id
		}
	})
	return playerId
})
// hasBonus grren plus
</script>

<template>
	<div class="flex flex-row gap-4 justify-center">
		<div v-for="(player, index) in players" :key="index"
			class="relative flex flex-row border-2 rounded-lg bg-white *:px-2 *:py-1"
			:class="currentPlayerId === player.id ? 'border-emerald-500 shadow-[0_0_3px_oklch(60%_0.145_163.225)]' : 'border-black'">
			<!-- Crown Badge Start -->
			<div v-if="player.id === starredPlayerId"
				class="absolute left-1/2 -top-7 -translate-x-1/2 stroke stroke-black fill-amber-300">
				<svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14z" />
				</svg>
			</div>
			<!-- Crown Badge End -->
			<div class=" text-white" :class="[
				player.id === currentPlayerId ? 'bg-emerald-500' : 'bg-black'
			]">
				P{{ player.id }}
			</div>
			<div class="font-mono">
				{{ player.totalScore }}
			</div>
		</div>
	</div>
</template>
