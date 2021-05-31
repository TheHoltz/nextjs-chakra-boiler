import NextNprogress from 'nextjs-progressbar';
import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

const ProgressBar = () => {
	const progressBg = useColorModeValue(
		'linear-gradient(to right, #6AE8DE, #8A64EB);',
		'linear-gradient(to right, #6AE8DE, #8A64EB);'
	);
	return (
		<NextNprogress
			color={progressBg}
			startPosition={0.3}
			stopDelayMs={200}
			height={4}
		/>
	);
};

export default ProgressBar;
