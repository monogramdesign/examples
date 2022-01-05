import { useRouter } from 'next/router'
import Link from 'next/link'

import FadeLayout from '../src/components/fade/FadeLayout'
import SlideInLayout from '../src/components/slide-in/SlideInLayout'

import '../src/styles/reset.css'
import '../src/styles/global.css'
import GrowLayout from '../src/components/grow/GrowLayout'

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	const Layout = router.pathname.includes('fade')
		? FadeLayout
		: router.pathname.includes('slide-in')
		? SlideInLayout
		: router.pathname.includes('grow')
		? GrowLayout
		: ({ children }) => <>{children}</>

	return (
		<Layout>
			<Component {...pageProps} />

			<br />
			<br />
			<Link href="/">
				<a>Home</a>
			</Link>
		</Layout>
	)
}

export default MyApp
