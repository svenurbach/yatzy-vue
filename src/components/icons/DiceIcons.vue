<script setup lang="ts">
defineProps({
	value: {
		type: Number,
		required: true
	}
})

</script>
<template>
	<svg v-if="value === 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
			<path stroke-width="1.5"
				d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21" />
			<path stroke-width="3" d="M12 12v.01" />
		</g>
	</svg>
	<svg v-if="value === 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
			<path stroke-width="1.5"
				d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21" />
			<path stroke-width="3" d="M8 8v.01M16 16v.01" />
		</g>
	</svg>
	<svg v-if="value === 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
			<path stroke-width="1.5"
				d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21" />
			<path stroke-width="3" d="M12 12v.01M8 8v.01M16 16v.01" />
		</g>
	</svg>
	<svg v-if="value === 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
			<path stroke-width="1.5"
				d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21" />
			<path stroke-width="3" d="M16 8v.01M8 16v.01M8 8v.01M16 16v.01" />
		</g>
	</svg>
	<svg v-if="value === 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
			<path stroke-width="1.5"
				d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21" />
			<path stroke-width="3" d="M12 12v.01M16 8v.01M8 16v.01M8 8v.01M16 16v.01" />
		</g>
	</svg>
	<svg v-if="value === 6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
			<path stroke-width="1.5"
				d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21" />
			<path stroke-width="3" d="M9 12v.01M15 7v.01M9 17v.01M9 7v.01M15 17v.01M15 12v.01" />
		</g>
	</svg>
</template>
