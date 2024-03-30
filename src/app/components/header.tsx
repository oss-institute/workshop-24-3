import React from 'react';

type Props = {
	children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => (
	<h1 className="text-7xl font-light lowercase">{children}</h1>
);
