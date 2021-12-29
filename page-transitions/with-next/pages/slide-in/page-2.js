import Link from 'next/link'

const PageTwoSlideIn = () => {
	return (
		<>
			<h1>Slide-in Transition</h1>
			<p>page 2</p>
			<Link href="/slide-in/page-1">
				<a>to page 1</a>
			</Link>
		</>
	)
}

export default PageTwoSlideIn
