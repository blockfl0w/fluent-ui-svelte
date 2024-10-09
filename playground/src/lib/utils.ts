import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single tailwind string.
 *
 * This function uses `clsx` to merge the provided class values and then
 * applies `twMerge` to handle Tailwind CSS class conflicts.
 *
 * @param {...ClassValue[]} inputs - The class values to combine.
 * @returns {string} - The combined class string.
 */

export function combine(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
