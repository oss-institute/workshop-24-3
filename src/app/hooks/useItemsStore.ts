'use client';

import { useLocalStorage } from './useLocalStorage';

export type TodoItem = {
	content: string;
	isDone: boolean;
	id: number;
};

const defaultItems = [
	{ content: 'Feed a dog', id: 1, isDone: true },
	{ content: 'Pick up kids from school', id: 2, isDone: false },
	{ content: 'Water plants', id: 3, isDone: false },
];

export function useItemsStore() {
	const [items, setItems] = useLocalStorage('items', defaultItems);

	const addItem = (content: string) => {
		const newItem: TodoItem = {
			content,
			id: items.length + 1,
			isDone: false,
		};
		setItems([...items, newItem]);
	};

	const toggleItem = (id: number) => {
		const updatedItems = items.map((item: TodoItem) =>
			item.id === id ? { ...item, isDone: !item.isDone } : item,
		);
		setItems(updatedItems);
	};

	const deleteItem = (id: number) => {
		const updatedItems = items.filter((item: TodoItem) => item.id !== id);
		setItems(updatedItems);
	};

	return { items, addItem, toggleItem, deleteItem };
}
