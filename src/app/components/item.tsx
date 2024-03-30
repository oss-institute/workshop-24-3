'use client';

import classNames from 'classnames';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Checkbox } from './checkbox';
import { TodoItem } from '../hooks/useItemsStore';

type Props = {
	item: TodoItem;
	toggleItem: (id: number) => void;
	deleteItem: (id: number) => void;
};

export function Item({ item, toggleItem, deleteItem }: Props) {
	return (
		<li
			className="flex grow items-center [&>*]:cursor-pointer"
			data-testid={`item-${item.id}`}
		>
			<label className="flex w-full items-center gap-4 rounded-lg bg-white p-4 text-xl opacity-90 transition hover:bg-slate-100 [&>*]:transition [&>*]:duration-200">
				<Checkbox
					isChecked={item.isDone}
					onChange={() => toggleItem(item.id)}
				/>
				<span
					className={classNames(
						item.isDone ? ['line-through', 'text-slate-400'] : [],
					)}
				>
					{item.content}
				</span>
				{item.isDone && (
					<button
						data-testid="trash-button"
						className="ml-auto p-1 active:[&>*]:text-destructive"
						onClick={() => deleteItem(item.id)}
					>
						<TrashIcon className="ml-auto size-6 text-slate-300 transition hover:text-destructive/90" />
					</button>
				)}
			</label>
		</li>
	);
}
