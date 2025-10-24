<script setup lang="ts">
interface Props {
	label: string
	color: 'red' | 'green' | 'neutral'
	target?: string
}
defineProps<Props>()
</script>
<template>
	<button class="px-6 py-2 border-2 rounded w-2/3 cursor-pointer" :class="{
		'bg-error/70': color === 'red',
		'bg-success/70': color === 'green',
		'bg-secondary/70': color === 'neutral'
	}">
		{{ label }}
	</button>
</template>
<style scoped>
@reference "tailwindcss";

button[disabled] {
	@apply opacity-15 cursor-not-allowed;
}
</style>
