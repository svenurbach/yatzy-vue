<script setup lang="ts">
interface Props {
	label: string
	color: 'red' | 'green' | 'neutral'
	target?: string
}
defineProps<Props>()
</script>
<template>
	<button class="px-6 py-2 border-2 rounded w-2/3 cursor-pointer transition-opacity duration-300 hover:brightness-110"
		:class="{
			'bg-error': color === 'red',
			'bg-success': color === 'green',
			'bg-secondary': color === 'neutral'
		}">
		{{ label }}
	</button>
</template>
<style scoped>
@reference "tailwindcss";

button[disabled] {
	@apply opacity-20 cursor-not-allowed;
}
</style>
