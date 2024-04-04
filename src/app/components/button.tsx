import React from 'react';

type Props = {
	onClick: () => void;
	children: React.ReactNode;
	disabled: boolean;
};

export const Button = ({ onClick, children, disabled }: Props) => (
	<button
		disabled={disabled}
		onClick={onClick}
		data-testid="button"
		className="
		rounded-lg bg-primary px-6 text-primary-foreground shadow
		transition hover:bg-primary/90
		 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
		active:bg-primary/80
		disabled:opacity-50"
	>
		{children}
	</button>
);
