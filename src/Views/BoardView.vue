<script setup lang="ts">
import PlayerLabels from '@/components/PlayerLabels.vue';
import CategorySection from '@/components/CategorySection.vue'
import DiceSet from '@/components/DiceSet.vue'
import RollButton from '@/components/RollButton.vue'
</script>

<template>
	<div class="flex flex-col justify-between">
		<PlayerLabels />
		<DiceSet />
		<CategorySection />
		<RollButton />
	</div>
</template>
