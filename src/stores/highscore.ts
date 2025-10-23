import { defineStore } from 'pinia'
import { onMounted, ref, watch } from 'vue'

export const useHighscoreStore = defineStore('highscore', () => {
	const highscores = ref<{ name: string; score: number, date: number }[]>([])
	const KEY = "highscores"

	watch(() => highscores.value, (val) => {
		localStorage.setItem(KEY, JSON.stringify(val))
	}, { deep: true })

	onMounted(() => {
		const saved = localStorage.getItem(KEY)
		if (saved) highscores.value = JSON.parse(saved)
	})

	function addScore(name: string, score: number) {
		const date = Date.now()
		highscores.value.push({ name, score, date })
		highscores.value.sort((a, b) => b.score - a.score) // sortiere absteigend
	}

	function getTopScores(limit = 10) {
		return highscores.value.slice(0, limit)
	}

	return { highscores, addScore, getTopScores }
})
