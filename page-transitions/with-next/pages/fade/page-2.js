import Link from 'next/link'

const PageTwoFade = () => {
	return (
		<>
			<h1>Fade Transition</h1>

			<p>page 2</p>
			<br />
			<Link href="/fade/page-1">
				<a>to page 1</a>
			</Link>
		</>
	)
}

export default PageTwoFade
