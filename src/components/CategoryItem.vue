<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
	value: {
		type: Number,
		default: 0,
		required: true
	},
	status: {
		type: [Number, null],
		default: 0,
		required: false
	}
})

defineEmits(['clicked'])

const isDisabled = computed(() => props.status !== null);
const shouldHighlight = computed(() => props.value > 0 && props.status === null);
const displayValue = computed(() => {
	if (props.status === null && props.value > 0) {
		return props.value;
	}
	if (props.status !== null) {
		return props.status;
	}
	return "-";
});
</script>

<template>
	<div class="flex flex-col text-center">
		<button type="button" :disabled="isDisabled"
			class="flex flex-col justify-center items-center bg-amber-400 border-2
         border-black rounded min-w-15 h-15 cursor-pointer text-lg font-bold text-black transition-colors duration-200"
			:class="{
				'bg-emerald-300': shouldHighlight,
				'opacity-20 cursor-not-allowed': isDisabled
			}"
			@click="$emit('clicked')">
			<slot />
		</button>
		<div :class="{ 'opacity-20': isDisabled }">
			{{ displayValue }}
		</div>
	</div>
</template>
