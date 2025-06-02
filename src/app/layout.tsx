import type { Metadata } from 'next';
import { Geist_Mono, Outfit } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const geistSans = Outfit({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'ZQL',
	description: 'run ZQL queries in your browser',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex flex-col grow antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
