import Link from 'next/link'

const PageOneSlideIn = () => {
	return (
		<>
			<h1>Slide-in Transition</h1>
			<p>page 1</p>
			<Link href="/slide-in/page-2">
				<a>to page 2</a>
			</Link>
		</>
	)
}

export default PageOneSlideIn
