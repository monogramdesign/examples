import Link from 'next/link'

export default function PageOne() {
	return (
		<>
			<p>page 1</p>
			<Link href="/page-two">
				<a style={{ color: 'blue', textDecoration: 'underline' }}>to page 2</a>
			</Link>
		</>
	)
}
