<script setup lang="ts">
import { ref } from 'vue'
import { useGame } from '@/composables/useGame'
import IconMobileMenu from './icons/IconMobileMenu.vue';

const game = useGame()

const open = ref(false)

const config = [
	{ label: "Reset", icon: "", click: () => game.reset() },
	{ label: "Highscore", icon: "🏆", click: () => { } },
	{ label: "FAQ", icon: "", click: () => { } },
	{ label: "Darkmode", icon: "🍩", click: () => { } },
	{ label: "Theme", icon: "", click: () => { } },
	{ label: "Dice Theme", icon: "", click: () => { } }
]
</script>

<template>
	<button @click="open = !open" class="fill-bg h-full aspect-square cursor-pointer">
		<span v-if="open">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
				<path
					d="m3.5 2.086l4.5 4.5l4.5-4.5L13.914 3.5L9.414 8l4.5 4.5l-1.414 1.414l-4.5-4.5l-4.5 4.5L2.086 12.5l4.5-4.5l-4.5-4.5z" />
			</svg>
		</span>
		<span v-else>
			<IconMobileMenu />
		</span>
	</button>
	<Teleport defer to="#app-main">
		<Transition name="modal">
			<div v-if="open" class="fixed left-1/2 tranform -translate-x-1/2 top-14 bottom-12 bg-bg z-100 w-md">
				<ul class="grid grid-cols-2 gap-8 p-8 ">
					<li v-for="(item, index) in config" :key="index"
						class="flex flex-col justify-center items-center  border-2 rounded-lg bg-primary size-30 odd:justify-self-end cursor-pointer hover:bg-indigo-200/80"
						@click="() => { item.click(); open = false; }">
						<div class="flex flex-col justify-center items-center">
							<span class="text-4xl">{{ item.icon }}</span>
							<span class="font-bold">{{ item.label }}</span>
						</div>
					</li>
				</ul>
			</div>
		</Transition>
	</Teleport>
</template>
<style scoped>
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.3s ease-out;
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}
</style>
