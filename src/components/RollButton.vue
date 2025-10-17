<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { useGame } from "@/composables/useGame";
import { computed } from "vue";

const gameStore = useGameStore()
const game = useGame()

const isDisabled = computed(() => gameStore.rollsLeft < 1)

const roll = () => {
	game.diceRolled()
}
</script>
<template>
	<div class="flex flex-row justify-end items-baseline">
		<div class="text-xl font-bold" :class="{ 'text-gray-400': isDisabled }">
			{{ gameStore.rollsLeft }}x
		</div>
		<button @click="roll()" :disabled="isDisabled"
			class="size-18 cursor-pointer fill-white disabled:text-gray-400 disabled:cursor-not-allowed">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
				<g stroke="currentColor" stroke-linejoin="round" stroke-width="2">
					<path
						d="M3.339 11.552c-.544-2.505.831-4.887 3.273-5.669c1.32-.422 2.99-.92 5.048-1.471a110 110 0 0 1 5.107-1.25c2.505-.544 4.888.831 5.669 3.273c.422 1.32.92 2.99 1.471 5.048a110 110 0 0 1 1.25 5.107c.544 2.505-.831 4.888-3.273 5.669c-1.32.422-2.99.92-5.048 1.471c-2.058.552-3.754.956-5.107 1.25c-2.506.544-4.888-.831-5.669-3.273c-.422-1.32-.92-2.99-1.471-5.048a110 110 0 0 1-1.25-5.107Z" />
					<path stroke-linecap="round" d="m14.373 13.854l-.25.433" />
					<path
						d="M42.26 41.882c-.781 2.442-3.163 3.817-5.669 3.273a111 111 0 0 1-5.107-1.25a110 110 0 0 1-5.048-1.471c-2.442-.782-3.817-3.164-3.273-5.669c.294-1.354.698-3.049 1.25-5.107a111 111 0 0 1 1.471-5.048c.781-2.442 3.164-3.817 5.669-3.273c1.354.294 3.049.698 5.107 1.25c2.059.551 3.729 1.05 5.048 1.471c2.442.781 3.817 3.163 3.273 5.669a110 110 0 0 1-1.25 5.107a111 111 0 0 1-1.471 5.048Z" />
					<path stroke-linecap="round" d="m37.74 31.868l-.433.25m-6.903 4.506l.433-.25" />
				</g>
			</svg>
		</button>
	</div>
</template>
