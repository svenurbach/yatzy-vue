import { useDice } from './useDice'

export function useDiceSet(count = 5) {
  const diceSet = Array.from({ length: count }, () => useDice())

  function rollAll() {
    diceSet.forEach((dice) => dice.roll())
  }

  function resetAll() {
    diceSet.forEach((dice) => dice.reset())
  }

  return { diceSet, rollAll, resetAll }
}
