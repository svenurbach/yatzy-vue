<script setup lang="ts">
defineProps({
	value: {
		type: Number,
		default: 0,
		required: false
	}
})
</script>

<template>
	<div class="flex flex-col text-center">
		<div class="flex flex-col justify-center text-center bg-amber-400 border-2
         border-black rounded-xl min-w-15 h-15 cursor-pointer text-lg font-bold text-black transition-colors duration-300"
			:class="{ 'border-4 !border-green-500': value }">
			<slot />
		</div>
		<div>
			{{ value }}
		</div>
	</div>
</template>
