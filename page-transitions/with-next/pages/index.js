import Link from 'next/link'

const Examples = () => {
	return (
		<main>
			<h1>Transition Examples</h1>

			<div style={{ display: 'flex' }}>
				<Link href="/fade/page-1">
					<a style={{ color: 'blue', textDecoration: 'underline', marginRight: '1rem' }}>Fade</a>
				</Link>

				<Link href="/slide-in/page-1">
					<a style={{ color: 'blue', textDecoration: 'underline' }}>Slide In</a>
				</Link>
			</div>
		</main>
	)
}

export default Examples
