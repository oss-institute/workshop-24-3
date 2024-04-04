import { ChangeEvent } from 'react';

type Props = {
	value: string;
	onValueChange: (value: string) => void;
	onEnter: () => void;
};

export const Input = ({ value, onValueChange, onEnter }: Props) => {
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		onValueChange(newValue);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			e.preventDefault();
			onEnter();
		}
	};

	return (
		<input
			placeholder="Buy milk"
			value={value}
			onChange={handleOnChange}
			data-testid="input"
			className="
				h-12 grow
				rounded border-2 border-background border-b-secondary
				bg-background p-2 text-xl shadow 
				transition focus:border-2 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0
				disabled:opacity-50"
			onKeyDown={handleKeyDown}
		/>
	);
};
