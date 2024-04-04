'use client';

import { useState } from 'react';

import { Button } from './button';
import { Input } from './input';

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
		setValue('');
	};

	return (
		<div className="m-6 flex w-full grow gap-6">
			<Input
				value={value}
				onValueChange={handleOnValueChange}
				onEnter={handleAdd}
			/>
			<Button disabled={!value} onClick={handleAdd}>
				Add item
			</Button>
		</div>
	);
}
