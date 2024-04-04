'use client';

import { useState } from 'react';
import { Input } from './input';
import { Button } from './button';

type Props = {
	onAddItem: (content: string) => void;
};

export function AddItem({ onAddItem: addItem }: Props) {
	const [value, setValue] = useState('');
	const handleOnValueChange = (value: string) => {
		setValue(value);
	};

	const handleAdd = () => {
		if (value !== '') {
			addItem(value);
		}
	};

	return (
		<div className="m-6 flex w-full grow gap-6">
			<Input
				value={value}
				onValueChange={handleOnValueChange}
				onEnter={handleAdd}

			/>
			<Button onClick={handleAdd} disabled={value===''}>Add item</Button>
			
		</div>
	);
}
