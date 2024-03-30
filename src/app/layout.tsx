import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
	title: 'OSS: todo list',
};

type Props = {
	children: React.ReactNode;
};

export default function Root({ children }: Props) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
