<script setup lang="ts">
import PlayerCountSelect from '@/components/PlayerCountSelect.vue';
import { useView } from '@/composables/useView';
import AppButton from '@/components/AppButton.vue';

const { setView } = useView()
</script>

<template>
	<div class="flex flex-col justify-between *:w-full *:text-center">
		<div>
			<h2>Willkommen bei Yatzy!</h2>
			<p>einem Kniffel-Spiel</p>
		</div>
		<div>
			<PlayerCountSelect />
			<AppButton label="Spiel starten!" color="green" />
		</div>
		<div>
			<AppButton label="Highscores" color="neutral" @click="setView('highscore')" />
		</div>
	</div>
</template>
