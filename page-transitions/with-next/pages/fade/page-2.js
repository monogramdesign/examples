import Link from 'next/link'

const PageTwoFade = () => {
	return (
		<>
			<p>page 2</p>
			<h1>Fade Transition</h1>
			<Link href="/fade/page-1">
				<a>to page 1</a>
			</Link>
		</>
	)
}

export default PageTwoFade
