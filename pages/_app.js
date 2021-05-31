import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ProgressBar from '../modules/shared/progressBar/progressBar';
import theme from '../constants/theme';

const Main = ({ Component, pageProps }) => {
	const router = useRouter();

	return (
		<ChakraProvider theme={theme}>
			<ProgressBar />
			<Component {...pageProps} key={router.asPath} />
		</ChakraProvider>
	);
};

export default Main;
