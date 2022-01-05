// import styles from './Grow.module.css'
import { Children, cloneElement } from 'react'
import usePageTransition from '../../lib/hooks/usePageTransition'

const GrowLayout = ({ children }) => {
	const props = usePageTransition(children)
	const { displayChildren } = props || {}

	return (
		<main>
			{!displayChildren
				? null
				: Array.isArray(displayChildren)
				? Children.map(displayChildren, (child) => cloneElement(child, props))
				: cloneElement(displayChildren, props)}
		</main>
	)
}

export default GrowLayout
