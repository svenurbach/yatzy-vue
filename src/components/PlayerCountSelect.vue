<script setup lang="ts">
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

const handlePlayerCountClick = (numberOfPlayer: number) => {
	gameStore.setPlayerCount(numberOfPlayer);
}
</script>
<template>
	<h2>Wieviele Spieler?</h2>
	<div class="flex gap-4">
		<button v-for="num in gameStore.MAX_PLAYER" type="button" :key="num" class="px-6 py-2 gap-2 border-2 rounded cursor-pointer transition-colors duration-500 hover:bg-emerald-100"
			:class="{ 'bg-emerald-400': num === gameStore.playerCount }"
			@click="handlePlayerCountClick(num)">
			{{ num }}
		</button>
	</div>
</template>
