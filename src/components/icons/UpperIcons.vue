<script setup lang="ts">
defineProps({
	value: {
		type: Number,
		required: true
	}
})

</script>
<template>
	<svg v-if="value === 1" v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M14 12a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12" />
	</svg>
	<svg v-if="value === 2" v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M8 6a2 2 0 1 1-3.999.001A2 2 0 0 1 8 6m12 12a2 2 0 1 1-3.999.001A2 2 0 0 1 20 18" />
	</svg>
	<svg v-if="value === 3" v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			d="M8 6a2 2 0 1 1-3.999.001A2 2 0 0 1 8 6m6 6a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12m6 6a2 2 0 1 1-3.999.001A2 2 0 0 1 20 18" />
	</svg>
	<svg v-if="value === 4" v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			d="M8 6a2 2 0 1 1-3.999.001A2 2 0 0 1 8 6m0 12a2 2 0 1 1-3.999.001A2 2 0 0 1 8 18M20 6a2 2 0 1 1-3.999.001A2 2 0 0 1 20 6m0 12a2 2 0 1 1-3.999.001A2 2 0 0 1 20 18" />
	</svg>
	<svg v-if="value === 5" v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			d="M8 6a2 2 0 1 1-3.999.001A2 2 0 0 1 8 6m0 12a2 2 0 1 1-3.999.001A2 2 0 0 1 8 18m6-6a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12m6-6a2 2 0 1 1-3.999.001A2 2 0 0 1 20 6m0 12a2 2 0 1 1-3.999.001A2 2 0 0 1 20 18" />
	</svg>
	<svg v-if="value === 6" v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			d="M8 6a2 2 0 1 1-3.999.001A2 2 0 0 1 8 6m0 6a2 2 0 1 1-3.999.001A2 2 0 0 1 8 12m0 6a2 2 0 1 1-3.999.001A2 2 0 0 1 8 18M20 6a2 2 0 1 1-3.999.001A2 2 0 0 1 20 6m0 6a2 2 0 1 1-3.999.001A2 2 0 0 1 20 12m0 6a2 2 0 1 1-3.999.001A2 2 0 0 1 20 18" />
	</svg>
</template>
