import Link from 'next/link'

import styles from '../../src/components/grow/Grow.module.css'

const PageOneGrow = ({ endTransition, transitionStage }) => {
	return (
		<>
			<p>page 1</p>
			<br />
			{transitionStage}
			<div
				className={`${styles['box']} ${styles[transitionStage]}`}
				onAnimationEnd={endTransition}
			/>
			<Link href="/grow/page-2">
				<a>to page 2</a>
			</Link>
		</>
	)
}

export default PageOneGrow
