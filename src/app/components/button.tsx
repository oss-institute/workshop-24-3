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
		rounded-lg bg-destructive px-6 text-primary-foreground shadow
		transition hover:bg-destructive/90
		 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
		active:bg-destructive/80
		disabled:opacity-50"
	>
		{children}
	</button>
);
