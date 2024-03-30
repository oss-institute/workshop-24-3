/* eslint-disable tailwindcss/no-custom-classname */
import React, { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import { colors } from './theme';
gsap.registerPlugin(CustomEase);

export const Drop = ({
	lastDropOffset,
}: {
	lastDropOffset?: MutableRefObject<number>;
}) => {
	const el = useRef<HTMLDivElement>(null);
	const color =
		colors[(Math.round(Math.random() * colors.length) % colors.length) + 1];

	useLayoutEffect(() => {
		const animate = () => {
			return gsap.context(() => {
				let horizontalPosition: number = gsap.utils.random(
					-360,
					360,
					60,
				);
				while (horizontalPosition === lastDropOffset?.current) {
					horizontalPosition = gsap.utils.random(-360, 360, 60);
				}

				lastDropOffset!.current = horizontalPosition;

				gsap.timeline({
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					onComplete: animate,
					repeatRefresh: true,
					delay: -1 * Math.random(),
				})
					.set(
						'.drop-holder',
						{
							left: horizontalPosition,
						},
						0,
					)
					.fromTo(
						'.drop',
						{
							y: 0,
							opacity: 1,
						},
						{
							y: 550,
							opacity: 0,
							duration: 1.8,
							ease: CustomEase.create(
								'custom',
								'M0,0 C0,0 0.505,0.265 0.772,0.592 1.007,0.879 1,1.02 1,1.02 ',
							),
						},
						1,
					)
					.fromTo(
						'.drop-bg',
						{
							y: 0,
							opacity: 1,
						},
						{
							y: 550,
							opacity: 0,
							duration: 1.8,
							ease: CustomEase.create(
								'custom',
								'M0,0 C0,0 0.505,0.265 0.772,0.592 1.007,0.879 1,1.02 1,1.02 ',
							),
						},
						1,
					);
			}, el);
		};

		const ctx = animate();

		return () => {
			ctx.kill(true);
		};
	}, [lastDropOffset]);

	return (
		<div className={'absolute left-[calc(50%-32px)]'} ref={el}>
			<div
				// eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
				className={'drop-holder relative -top-[120px] h-[32px] w-[2px]'}
			>
				<div
					suppressHydrationWarning={true}
					className={'drop'}
					style={{
						position: 'absolute',
						width: '3px',
						height: '60px',
						zIndex: '2',
						background: `linear-gradient(to bottom, ${color}00, ${color}88 86.46%, ${color}ff)`,
						borderRadius: '2px',
						boxShadow: `0 0 5px ${color}22`,
					}}
				></div>
				<div
					suppressHydrationWarning={true}
					className={'drop-bg'}
					style={{
						position: 'absolute',
						height: '200px',
						width: '260px',
						top: '-80px',
						left: '-130px',
						zIndex: '0',
						borderRadius: '50%',
						background: `radial-gradient(50% 50%, ${color}aa, ${color}00 80%, ${color}00)`,
					}}
				></div>
			</div>
		</div>
	);
};

export const Drops = ({ amount }: { amount: number }) => {
	const lastDropOffset = useRef<number>(0);

	return (
		<>
			{[...Array(amount)].map((_, i) => (
				<Drop key={i} lastDropOffset={lastDropOffset} />
			))}
		</>
	);
};
