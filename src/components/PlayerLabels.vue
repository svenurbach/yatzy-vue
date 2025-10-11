<script setup lang="ts">
import { useGameStore } from "@/stores/game";
const gameStore = useGameStore()
</script>
<template>
	<div>
		<h3>Player <span class="text-3xl font-bold">{{ gameStore.currentPlayerId }}</span> Turn</h3>
	</div>
</template>
