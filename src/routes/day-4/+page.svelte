<script lang="ts">
	import { onMount } from 'svelte';

	interface DATA {
		heartRate: number;
	}

	const endpoint = 'https://advent.sveltesociety.dev/data/2023/day-four.json';
	$: data = new Array<DATA>();

	const get_data = async () => {
		const response = await fetch(endpoint);
		data = [await response.json(), ...data];
	};

	onMount(async () => {
		setInterval(get_data, 1000);
	});
</script>

<div class="flex overflow-x-auto">
	{#each data as d}
		<p
			class="flex border-l-2 border-b-2 bg-white text-red-dark border-white p-1 items-end"
			style={`height: ${d.heartRate * 15 - 1300}px`}
		>
			{d.heartRate}
		</p>
	{/each}
</div>

<h1 class="mx-auto">{data[0] ? data[0].heartRate : 'waiting for data'}</h1>
