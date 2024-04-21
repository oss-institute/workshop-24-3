'use client';

import { Background } from './branding/background';
import { AddItem } from './components/add-item';
import { Header } from './components/header';
import { ItemsList } from './components/items-list';
import { useItemsStore } from './hooks/useItemsStore';

export default function TodoList() {
	const { items, addItem, toggleItem, deleteItem } = useItemsStore();

	return (
		<>
			<div className="blur-sm">
				<Background />
			</div>
			<main className="relative mx-auto flex max-w-7xl flex-col items-center p-24">
				<Header>Todo list</Header>
				<AddItem onAddItem={addItem} />
				<ItemsList
					items={items}
					toggleItem={toggleItem}
					deleteItem={deleteItem}
				/>
			</main>
		</>
	);
}
