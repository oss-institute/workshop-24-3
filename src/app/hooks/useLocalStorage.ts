'use client';

import { useEffect, useState } from 'react';

import { TodoItem } from './useItemsStore';

export function useLocalStorage(key: string, defaultItems: TodoItem[]) {
	const [value, setValue] = useState(() => {
		try {
			const storedValue = localStorage.getItem(key);

			return storedValue
				? JSON.parse(storedValue)
				: JSON.parse(
						localStorage.getItem('items') ??
							JSON.stringify(defaultItems),
					);
		} catch (error) {
			console.error(error);

			return JSON.parse(
				localStorage.getItem('items') ?? JSON.stringify(defaultItems),
			);
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	}, [key, value]);

	return [value, setValue];
}
