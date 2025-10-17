<script setup lang="ts">
import { usePlayerScores } from "@/composables/usePlayerScores"
import type { Player } from "@/types/player";
import { type PropType } from "vue";


const score = usePlayerScores()

defineProps({
	open: {
		type: Boolean,
		required: true
	},
	player: {
		type: Object as PropType<Player>,
		required: true
	},
	target: {
		type: String,
		required: true
	}
})
</script>

<template>
	<Teleport :to=target>
		<Transition>
			<div v-if="open && player"
				class="absolute top-14 left-1/2 transform -translate-x-1/2 p-4 rounded-lg border-2 w-80 aspect-3/1 bg-gray-900 text-white z-10 opacity-95">
				<div class="text-center text-lg font-bold italic pb-3">Punkteübersicht für Spieler {{ player.id }}</div>
				<ul class="font-mono text-sm space-y-1">
					<li>
						<span>Oberer Bereich: </span>
						<span>{{ player.upperSectionScore }}</span>
					</li>
					<li>
						<span>Bonus (>={{ score.BONUS_BREAKPOINT }}): </span>
						<span>{{ player.upperSectionBonus ? score.UPPER_BONUS : 0 }}</span>
					</li>
					<li>
						<span>Unterer Bereich: </span>
						<span>{{ player.lowerSectionScore }}</span>
					</li>
					<li>
						<span>Extra Yatzy Bonus ({{ player.yatzyBonusCount ?? 0 }} x {{ score.YATZY_BONUS }}): </span>
						<span>{{ score.getYatzyBonus(player) }}</span>
					</li>
					<hr />
					<li>
						<span>Gesamt: </span>
						<span>{{ player.totalScore }}</span>
					</li>
				</ul>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
@reference "tailwindcss";

li {
	@apply flex justify-between;
}

li>span:last-of-type {
	@apply font-bold
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
