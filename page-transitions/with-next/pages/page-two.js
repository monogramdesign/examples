import Link from 'next/link'

export default function PageTwo() {
	return (
		<>
			<p>page 2</p>
			<Link href="/">
				<a style={{ color: 'blue', textDecoration: 'underline' }}>to page 1</a>
			</Link>
		</>
	)
}
