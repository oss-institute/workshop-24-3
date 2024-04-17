'use client';

import { useLocalStorage } from './useLocalStorage';

export type TodoItem = {
	content: string;
	isDone: boolean;
	id: number;
};

export const defaultItems = [
	{ content: 'Feed a dog', id: 1, isDone: true },
	{ content: 'Pick up kids from school', id: 2, isDone: false },
	{ content: 'Water plants', id: 3, isDone: false },
];

export function useItemsStore() {
	const [items, setItems] = useLocalStorage('items', defaultItems);

	const addItem = (content: string) => {
		setItems(
			items.concat({
				content,
				id: Date.now(),
				isDone: false,
			}),
		);
	};

	const toggleItem = (id: number) => {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, isDone: !item.isDone } : item,
			),
		);
	};

	const deleteItem = (id: number) => {
		setItems(items.filter((item) => item.id !== id));
	};

	return { items, addItem, toggleItem, deleteItem };
}
