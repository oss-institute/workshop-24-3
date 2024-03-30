import React from 'react';
import bg from '../../assets/bg.png';
import { gsap } from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import { Drops } from './drop';
gsap.registerPlugin(CustomEase);

export const Background = () => {
	return (
		<div
			className={
				'absolute h-[600px] w-full transform-gpu overflow-hidden'
			}
		>
			<div
				className={'absolute inset-x-0 top-0 z-0 h-[600px] '}
				style={{
					background:
						'linear-gradient(to bottom, #eef2ffff, #eef2ffff 20%, #ffffff00)',
				}}
			></div>
			<div
				className={
					'absolute inset-x-[40px] top-[-100px] h-[100px] rounded-[50%] shadow-xl'
				}
				style={{
					boxShadow: '0 20px 600px #1e40af44',
				}}
			></div>
			<div className={'absolute inset-x-0 h-[800px] overflow-hidden'}>
				<Drops amount={8}></Drops>
			</div>
			<div
				className={'absolute h-[600px] w-full'}
				style={{
					backgroundImage: `url(${bg.src})`,
					backgroundPosition: 'center top',
					backgroundColor: 'transparent',
				}}
			></div>
		</div>
	);
};
