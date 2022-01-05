import Link from 'next/link'

const PageOneFade = () => {
	return (
		<>
			<h1>Fade Transition</h1>

			<p>page 1</p>
			<br />
			<Link href="/fade/page-2">
				<a>to page 2</a>
			</Link>
		</>
	)
}

export default PageOneFade
