<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import { ref } from 'vue';

const gameStore = useGameStore();

const emit = defineEmits<{
	'player-count': [count: number]
}>()

const isActive = ref<number | null>(null)

const selectPlayer = (num: number) => {
	isActive.value = num
	emit('player-count', num)
}
</script>
<template>
	<div class="flex flex-col items-center">
		<h2>Wähle die Anzahl der Spieler?</h2>
		<div class="flex flex-row gap-4 py-4">
			<button v-for="num in gameStore.MAX_PLAYER" type="button" :key="num" class="size-14 border-2 rounded
			cursor-pointer transition-colors duration-200 hover:bg-success/30"
				:class="num === isActive ? 'bg-success' : 'bg-text-inverted'" @click="selectPlayer(num)">
				{{ num }}
			</button>
		</div>
	</div>
</template>
