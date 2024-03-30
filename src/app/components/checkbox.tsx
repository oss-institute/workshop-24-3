const CheckboxTick = () => (
	<svg
		className="pointer-events-none absolute m-1 mt-2 hidden size-6 cursor-pointer stroke-white outline-none peer-checked:block"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="4"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polyline points="20 6 9 17 4 12"></polyline>
	</svg>
);

type Props = {
	isChecked: boolean;
	onChange: () => void;
};

export const Checkbox = ({ isChecked, onChange }: Props) => {
	return (
		<>
			<input
				data-testid="checkbox"
				type="checkbox"
				checked={isChecked}
				onChange={onChange}
				className="
					peer relative mt-1 size-8 shrink-0 cursor-pointer appearance-none
					rounded-2xl border-2 border-positive/90 bg-background
					checked:border-0 checked:bg-positive
					focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0
					disabled:opacity-50"
			/>
			<CheckboxTick />
		</>
	);
};
