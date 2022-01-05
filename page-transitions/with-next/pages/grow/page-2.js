import Link from 'next/link'

import styles from '../../src/components/grow/Grow.module.css'

const PageOneGrow = ({ endTransition, transitionStage }) => {
	return (
		<>
			<p>page 2</p>
			<br />
			{transitionStage}
			<div
				className={`${styles['box']} ${styles[transitionStage]} ${styles['page-2']}`}
				onAnimationEnd={endTransition}
			/>
			<Link href="/grow/page-1">
				<a>to page 1</a>
			</Link>
		</>
	)
}

export default PageOneGrow
