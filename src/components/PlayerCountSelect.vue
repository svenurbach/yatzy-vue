<script setup lang="ts">
import { useGameStore } from '@/stores/game';

const gStore = useGameStore();

const handleClick = (numberOfPlayer: number) => {

	console.log(gStore.playerCount);
	gStore.playerCount = numberOfPlayer;
	console.log("click", gStore.playerCount);

}

</script>
<template>
	<h2>Wieviele Spieler?</h2>
	<div class="flex gap-4">
		<button v-for="num in 4" type="button" :key="num" class="px-6 py-2 gap-2 border-2 rounded"
			@click="handleClick(num)">
			{{ num }}
		</button>
	</div>
</template>
