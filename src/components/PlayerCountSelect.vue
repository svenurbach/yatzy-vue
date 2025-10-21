<script setup lang="ts">
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

const handlePlayerCountClick = (numberOfPlayer: number) => {
	gameStore.setPlayerCount(numberOfPlayer);
}
</script>
<template>
	<div class="flex flex-col items-center gap-2">
		<h2>Wähle die Anzahl der Spieler?</h2>
		<div class="flex flex-col gap-4">
			<button v-for="num in gameStore.MAX_PLAYER" type="button" :key="num" class="size-14 gap-2 border-2 rounded
			cursor-pointer bg-text-inverted transition-colors duration-500 hover:bg-success/30"
				:class="{ 'bg-success': num === gameStore.playerCount }" @click="handlePlayerCountClick(num)">
				{{ num }}
			</button>
		</div>
	</div>
</template>
