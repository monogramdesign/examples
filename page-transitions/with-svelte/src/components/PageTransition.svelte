<!-- Derived from https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6 -->
<script lang="ts">
	import { fly } from 'svelte/transition'

	// Custom transitions:
	// https://svelte.dev/tutorial/custom-css-transitions

	export let refresh: string
</script>

{#key refresh}
	<main in:fly={{ x: -5, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}>
		<slot />
	</main>
{/key}
