<script setup lang="ts">
import { ref } from 'vue'
import IconMobileMenu from './icons/IconMobileMenu.vue';

const open = ref(false)

const config = [
	{ label: "Highscore", icon: "🏆", click: "" }
	{ label: "Darkmode", icon: "", click: "" }
	{ label: "Reset", icon: "", click: "" }
	{ label: "FAQ", icon: "", click: "" }
]
</script>

<template>
	<button @click="open = !open" class="fill-black h-full aspect-square">
		<span v-if="open">
			X
		</span>
		<span v-else>
			<IconMobileMenu />
		</span>
	</button>
	<Teleport to="body">
		<div class="h-20"></div>
		<div v-if="open" class="fixed inset-0 top-14 bg-amber-200">
			<p>Hello from the modal!</p>
		</div>
	</Teleport>
</template>
