export function sumAllFaces(diceFaces: number[]): number {
	return diceFaces.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

export function sumFacesByValue(value: number, diceFaces: number[]): number {
	return diceFaces.filter(face => face === value).length * value;
}

export function checkThreeOfKind(diceFaces: number[]): number {
	const sortedDiceFaces = [...diceFaces].sort();
	const dice = sortedDiceFaces
	if ((dice[0] == dice[1]) && (dice[1] == dice[2]) ||
		(dice[1] == dice[2]) && (dice[2] == dice[3]) ||
		(dice[2] == dice[3]) && (dice[3] == dice[4])) {
		return sumAllFaces(diceFaces)
	}
	return 0
}

export function checkFourOfKind(diceFaces: number[]): number {
	const sortedDiceFaces = [...diceFaces].sort();
	const dice = sortedDiceFaces
	if ((dice[0] == dice[1]) && (dice[1] == dice[2]) && (dice[2] == dice[3]) ||
		(dice[1] == dice[2]) && (dice[2] == dice[3]) && (dice[3] == dice[4])) {
		return sumAllFaces(diceFaces)
	}
	return 0
}

export function checkFullHouse(diceFaces: number[]): boolean {
	const sortedDiceFaces = [...diceFaces].sort();
	const dice = sortedDiceFaces
	return (dice[0] === dice[1] && dice[1] !== dice[2] && dice[2] === dice[3] && dice[3] === dice[4]) ||
		(dice[0] === dice[1] && dice[1] === dice[2] && dice[2] !== dice[3] && dice[3] === dice[4]);
}

export function checkForSmallStraight(diceFaces: number[]): boolean {
	const sortedDiceFaces = [...diceFaces].sort()
	const diceSet = new Set(sortedDiceFaces)
	const smallStraight1 = new Set([1, 2, 3, 4])
	const smallStraight2 = new Set([2, 3, 4, 5])
	const smallStraight3 = new Set([3, 4, 5, 6])
	return diceSet.isSupersetOf(smallStraight1) || diceSet.isSupersetOf(smallStraight2) || diceSet.isSupersetOf(smallStraight3)
}

export function checkForLargeStraight(diceFaces: number[]): boolean {
	const sortedDiceFaces = [...diceFaces].sort()
	const diceSet = new Set(sortedDiceFaces)
	const largeStraight1 = new Set([1, 2, 3, 4, 5])
	const largeStraight2 = new Set([2, 3, 4, 5, 6])
	return diceSet.isSupersetOf(largeStraight1) || diceSet.isSupersetOf(largeStraight2)
}

export function calcChance(diceFaces: number[]): number {
	return sumAllFaces(diceFaces)
}

export function checkForYahtzee(diceFaces: number[]): boolean {
	return diceFaces.every(face => face === diceFaces[0])
}
