<!-- Derived from https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6 -->
<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	})
</script>

<script>
	import PageTransition from '../components/PageTransition.svelte'

	export let key
</script>

<PageTransition refresh={key}>
	<slot />
</PageTransition>
