import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false
	},
	fonts: {
		heading: 'Inter',
		body: 'Inter'
	}
});

export default theme;
