<script lang="ts">
	export let projectName: string
</script>

<p>This is a shared component being used in the "{projectName}" project.</p>

<style>
	p {
		@apply p-4 rounded-md shadow-md bg-blue-600 text-white font-semibold w-fit flex flex-col items-center space-y-4;
	}
</style>
