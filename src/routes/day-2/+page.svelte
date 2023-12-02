<script lang="ts">
	let cookies = 0;
</script>

<main class="flex flex-col items-center h-[90vh]">
	<h1>{cookies} {cookies == 1 ? 'smákaka borðuð' : 'smákökur borðaðar'}</h1>

	<button
		on:click={() => {
			cookies += 1;
		}}>Borða</button
	>

	<button
		on:click={() => {
			if (cookies > 0) cookies -= 1;
		}}>Spýta upp</button
	>

	<button on:click={() => (cookies = 0)}>Gubba</button>
</main>
