<script setup lang="ts">
import { useView } from '@/composables/useView';
import IconMobileMenu from '@/components/icons/IconMobileMenu.vue';
import IconClose from '@/components/icons/IconClose.vue';
import { computed } from 'vue';
import AppIcon from '@/components/icons/AppIcon.vue'

const { setView, isInGroup } = useView()

const showCloseButton = computed(() => isInGroup('menu'))

function toggleMenu() {
	if (isInGroup('menu')) setView('board')
	else setView('options')
}
</script>

<template>
	<header class="flex flex-row justify-between items-center bg-primary text-text-inverted fill-text-inverted py-2.5">
		<div class="h-full aspect-square">
			<a href="/">
				<AppIcon />
			</a>
		</div>
		<div>
			<h1>Yatzy!</h1>
		</div>
		<div class="h-full aspect-square">
			<button @click="toggleMenu()" class="h-full aspect-square cursor-pointer">
				<span v-if="showCloseButton">
					<IconClose />
				</span>
				<span v-else>
					<IconMobileMenu />
				</span>
			</button>
		</div>
	</header>
</template>
