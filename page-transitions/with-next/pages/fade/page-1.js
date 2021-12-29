import Link from 'next/link'

const PageOneFade = () => {
	return (
		<>
			<p>page 1</p>
			<h1>Fade Transition</h1>
			<Link href="/fade/page-2">
				<a>to page 2</a>
			</Link>
		</>
	)
}

export default PageOneFade
