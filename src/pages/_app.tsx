import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import SeoTags from '../constants/seoTags';
import theme from '../constants/theme';
import ProgressBar from '../modules/shared/progress-bar';

const Main = ({ Component, pageProps }) => {
	const router = useRouter();

	return (
		<ChakraProvider theme={theme}>
			<SeoTags />
			<ProgressBar />
			<Component {...pageProps} key={router.asPath} />
		</ChakraProvider>
	);
};

export default Main;
