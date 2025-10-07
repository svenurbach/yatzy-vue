import { describe, test, expect } from 'vitest';
import * as scoreUtils from "@/utils/calcScores"

describe('calcScores.checkThreeOfKind', () => {
	test.each([
		{ faces: [1, 1, 2, 2, 2], expected: 8 },
		{ faces: [3, 3, 4, 4, 4], expected: 18 },
		{ faces: [1, 2, 3, 4, 4], expected: undefined },
		{ faces: [2, 3, 4, 5, 6], expected: undefined },
		{ faces: [3, 4, 5, 6, 5], expected: undefined },
		{ faces: [1, 2, 3, 5, 5], expected: undefined },
		{ faces: [0, 0, 0, 0, 0], expected: 0 },
		{ faces: [1, 3, 5, 5, 6], expected: undefined },
		{ faces: [2, 3, 6, 6, 6], expected: 23 },
	])('returns $expected for $faces', ({ faces, expected }) => {
		expect(scoreUtils.checkThreeOfKind(faces)).toBe(expected);
	});
});

describe('calcScores.checkFourOfKind', () => {
	test.each([
		{ faces: [1, 2, 2, 2, 2], expected: 9 },
		{ faces: [3, 4, 4, 4, 4], expected: 19 },
		{ faces: [1, 2, 3, 4, 4], expected: undefined },
		{ faces: [2, 3, 4, 5, 6], expected: undefined },
		{ faces: [3, 4, 5, 6, 5], expected: undefined },
		{ faces: [1, 2, 3, 5, 5], expected: undefined },
		{ faces: [0, 0, 0, 0, 0], expected: 0 },
		{ faces: [1, 3, 5, 5, 6], expected: undefined },
		{ faces: [2, 6, 6, 6, 6], expected: 26 },
	])('returns $expected for $faces', ({ faces, expected }) => {
		expect(scoreUtils.checkFourOfKind(faces)).toBe(expected);
	});
});

describe('calcScores.checkFullHouse', () => {
	test.each([
		{ faces: [1, 1, 2, 2, 2], expected: true },
		{ faces: [3, 3, 4, 4, 4], expected: true },
		{ faces: [1, 2, 3, 4, 4], expected: false },
		{ faces: [2, 3, 4, 5, 6], expected: false },
		{ faces: [3, 4, 5, 6, 5], expected: false },
		{ faces: [1, 2, 3, 5, 5], expected: false },
		{ faces: [0, 0, 0, 0, 0], expected: false },
		{ faces: [1, 3, 5, 5, 6], expected: false },
		{ faces: [2, 3, 6, 6, 6], expected: false },
	])('returns $expected for $faces', ({ faces, expected }) => {
		expect(scoreUtils.checkFullHouse(faces)).toBe(expected);
	});
});

describe('calcScores.checkForSmallStraight', () => {
	test.each([
		{ faces: [1, 2, 3, 4, 4], expected: true },
		{ faces: [2, 3, 4, 5, 6], expected: true },
		{ faces: [3, 4, 5, 6, 5], expected: true },
		{ faces: [1, 2, 3, 5, 5], expected: false },
		{ faces: [0, 0, 0, 0, 0], expected: false },
		{ faces: [1, 3, 5, 5, 6], expected: false },
		{ faces: [2, 3, 6, 6, 6], expected: false },
	])('returns $expected for $faces', ({ faces, expected }) => {
		expect(scoreUtils.checkForSmallStraight(faces)).toBe(expected);
	});
});

describe('calcScores.checkForLargeStraight', () => {
	test.each([
		{ faces: [1, 2, 4, 3, 5], expected: true },
		{ faces: [2, 3, 4, 5, 6], expected: true },
		{ faces: [0, 0, 0, 0, 0], expected: false },
		{ faces: [1, 3, 4, 5, 6], expected: false },
		{ faces: [2, 3, 4, 5, 5], expected: false },
	])('returns $expected for $faces', ({ faces, expected }) => {
		expect(scoreUtils.checkForLargeStraight(faces)).toBe(expected);
	});
});

describe('calcScores.checkForYahtzee', () => {
	test.each([
		{ faces: [1, 1, 1, 1, 1], expected: true },
		{ faces: [6, 6, 6, 6, 6], expected: true },
		{ faces: [1, 1, 3, 1, 1], expected: false },
		{ faces: [1, 3, 4, 5, 6], expected: false },
		{ faces: [2, 3, 4, 5, 5], expected: false },
	])('returns $expected for $faces', ({ faces, expected }) => {
		expect(scoreUtils.checkForYahtzee(faces)).toBe(expected);
	});
});
