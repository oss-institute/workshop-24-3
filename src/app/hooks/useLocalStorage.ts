'use client';

import { useState } from 'react';

import { TodoItem } from './useItemsStore';

function getInitialValue(key: string, defaultItems: TodoItem[]) {
	try {
		const item = localStorage.getItem(key);

		return item ? JSON.parse(item) : defaultItems;
	} catch {
		return [];
	}
}

export function useLocalStorage(key: string, defaultItems: TodoItem[]) {
	const [value, setValue] = useState<TodoItem[]>(
		getInitialValue(key, defaultItems),
	);

	const storeValue = (items: TodoItem[]) => {
		setValue(items);
		localStorage.setItem(key, JSON.stringify(items));
	};

	return [value, storeValue] as const;
}
