import { TodoItem } from '../hooks/useItemsStore';
import { Item } from './item';

type Props = {
	items: TodoItem[];
	toggleItem: (id: number) => void;
	deleteItem: (id: number) => void;
};

export const ItemsList = ({ items, toggleItem, deleteItem }: Props) => (
	<ul className="flex w-full flex-col " data-testid="list">
		{items.map((item) => (
			<Item
				item={item}
				key={item.id}
				toggleItem={toggleItem}
				deleteItem={deleteItem}
			/>
		))}
	</ul>
);
