import { ref } from 'vue'
import { useGameStore } from '@/stores/game'

const views = {
	welcome: { group: 'main' },
	board: { group: 'main' },
	gameover: { group: 'main' },
	options: { group: 'menu' },
	highscore: { group: 'menu' },
	faq: { group: 'menu' },
	rules: { group: 'menu' }
} as const

// Typen aus Mapping ableiten
export type View = keyof typeof views
export type ViewGroup = (typeof views)[View]['group']

const currentView = ref<View>('welcome')

export function useView() {
	const gameStore = useGameStore()

	function setView(view: View) {
		if (view === 'board' && gameStore.playerCount === 0) {
			console.warn('Cannot start game: no players set')
			currentView.value = 'welcome'
			return
		}
		currentView.value = view
	}

	function isView(view: View) {
		return currentView.value === view
	}

	function getGroup(view: View) {
		return views[view].group
	}

	function isInGroup(group: ViewGroup) {
		return getGroup(currentView.value) === group
	}

	return {
		currentView,
		setView,
		isView,
		getGroup,
		isInGroup
	}
}
