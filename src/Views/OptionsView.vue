<script setup lang="ts">
import { useGame } from '@/composables/useGame'
import { useView } from '@/composables/useView';

const game = useGame()
const { setView } = useView()

const config = [
	{ label: "Reset", icon: "", click: () => game.reset() },
	{ label: "Highscore", icon: "🏆", click: () => { setView('highscore') } },
	{ label: "FAQ", icon: "", click: () => { } },
	{ label: "Darkmode", icon: "🍩", click: () => { } },
	{ label: "Theme", icon: "", click: () => { } },
	{ label: "Dice Theme", icon: "", click: () => { } }
]
</script>

<template>
	<div>
		<ul class="grid grid-cols-2 gap-6">
			<li v-for="(item, index) in config" :key="index"
				class="flex flex-col justify-center items-center border-2 rounded-lg bg-secondary size-30 odd:justify-self-end cursor-pointer hover:bg-indigo-200/80"
				@click="() => item.click()">
				<div class="flex flex-col justify-center items-center">
					<span class="text-4xl">{{ item.icon }}</span>
					<span class="font-bold">{{ item.label }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
