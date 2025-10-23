<script setup lang="ts">
import { useHighscoreStore } from '@/stores/highscore';

const highscoreStore = useHighscoreStore()
</script>

<template>
	<div class="flex flex-col text-center">
		<h2>Highscores</h2>
		<div class="overflow-x-auto w-full text-center py-4">
			<table class="min-w-full border-collapse border border-text">
				<thead class="bg-secondary text-sm uppercase">
					<tr>
						<th class="border-text/50">#</th>
						<th class="border-text/50">Name</th>
						<th class="border-text/50">Punkte</th>
						<th class="border-text/50">Datum</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(highscore, index) in highscoreStore.highscores" :key="index"
						class="odd:bg-secondary/50 even:bg-secondary">
						<td class="border-text/50">{{ index + 1 }}</td>
						<td class="border-text/50">
							{{ highscore.name }}
						</td>
						<td class="border-text/50">{{ highscore.score }}</td>
						<td class="border-text/50 text-muted">
							{{ highscore.date ? new Date(highscore.date).toLocaleDateString() : '-' }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<style scoped>
@reference "tailwindcss";

th,
td {
	@apply px-3 py-2 border-b
}
</style>
