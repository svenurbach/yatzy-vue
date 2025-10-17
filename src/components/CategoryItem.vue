<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
	value: {
		type: Number,
		default: -1,
		required: true
	},
	playerStatus: {
		type: [Number, null],
		default: null,
		required: true
	}
})

defineEmits(['clicked'])

const isActive = computed(() => props.value >= 0)
const isDisabled = computed(() => !isActive.value || isAlreadyPicked.value);
const isAlreadyPicked = computed(() => props.playerStatus !== null);
const hasValueForPlayer = computed(() => !isAlreadyPicked.value && props.value > 0);
const displayValue = computed(() => {
	if (isAlreadyPicked.value) {
		return props.playerStatus;
	}
	if (hasValueForPlayer.value || isActive.value) {
		return props.value;
	}
	return "-";
});
</script>

<template>
	<div class="flex flex-col text-center" :class="{ 'opacity-20': isAlreadyPicked }">
		<button type="button" :disabled="isDisabled" class="flex flex-col justify-center items-center bg-amber-400 border-2
rounded font-bold text-black transition-colors duration-100 h-full" :class="{
	'bg-emerald-300': hasValueForPlayer,
	'cursor-not-allowed': isDisabled,
	'cursor-pointer': !isDisabled
}" @click="$emit('clicked')">
			<slot />
		</button>
		<div>
			{{ displayValue }}
		</div>
	</div>
</template>
