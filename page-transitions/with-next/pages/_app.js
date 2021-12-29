import TransitionLayout from '../src/components/TransitionLayout'

function MyApp({ Component, pageProps }) {
	return (
		<TransitionLayout>
			<Component {...pageProps} />
		</TransitionLayout>
	)
}

export default MyApp
