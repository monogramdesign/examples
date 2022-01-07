import Link from 'next/link'

const styles = { color: 'blue', textDecoration: 'underline', marginRight: '1rem' }

const Examples = () => {
	return (
		<main>
			<h1>Transition Examples</h1>

			<div style={{ display: 'flex' }}>
				<Link href="/fade/page-1">
					<a style={styles}>Fade</a>
				</Link>

				<Link href="/slide-in/page-1">
					<a style={styles}>Slide In</a>
				</Link>

				<Link href="/grow/page-1">
					<a style={styles}>Grow</a>
				</Link>

				<Link href="/framer/page-1">
					<a style={styles}>With framer-motion</a>
				</Link>
			</div>
		</main>
	)
}

export default Examples
