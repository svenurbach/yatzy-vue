<script setup lang="ts">
import PlayerCountSelect from '@/components/PlayerCountSelect.vue';
import { useView } from '@/composables/useView';
import AppButton from '@/components/AppButton.vue';
import { computed, ref } from 'vue';
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();
const { setView } = useView()

const playerCount = ref(0)
const isDisabled = computed(() => playerCount.value === 0)

const handlePlayerCountChange = (count: number) => {
	playerCount.value = count
}

const handleStartGame = () => {
	gameStore.setPlayerCount(playerCount.value)
}
</script>

<template>
	<div class="flex flex-col justify-between *:w-full *:text-center">
		<div>
			<h2>Willkommen bei Yatzy!</h2>
			<p>einem Kniffel-Spiel</p>
		</div>
		<div>
			<PlayerCountSelect @player-count="handlePlayerCountChange" />
			<AppButton label="Spiel starten!" color="green" :disabled="isDisabled" @click="handleStartGame" />
		</div>
		<div>
			<AppButton label="Highscores" color="neutral" @click="setView('highscore')" />
		</div>
	</div>
</template>
