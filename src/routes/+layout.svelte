<script lang="ts">
	import '../app.css';
	import { Confetti } from 'svelte-confetti';
</script>

<body>
	<header>
		<nav class="p-2 border-b-white border-b-2">
			<a href="/" class="font-bold">Heim</a>
		</nav>
	</header>
	<slot />
	<div class="confetti">
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			delay={[500, 2000]}
			infinite
			colorArray={['#fff']}
			duration={5000}
			size={5}
			amount={100}
			fallDistance="100vh"
		/>
	</div>
</body>

<style lang="postcss">
	:global(html, body) {
		height: 100%;
	}
	:global(html) {
		background: linear-gradient(theme(colors.red-dark), theme(colors.red-light));
		background-attachment: fixed;
		color: theme(colors.white);
	}
	:global(h1) {
		font-size: theme(fontSize.4xl);
	}

	:global(h2) {
		font-size: theme(fontSize.3xl);
	}

	:global(h3) {
		font-size: theme(fontSize.2xl);
	}

	nav a {
		text-decoration: underline 1px rgba(255, 255, 255, 0);
		transition: text-decoration 0.2s ease-in-out;
	}

	nav a:hover {
		text-decoration: underline 1px theme(colors.white);
	}

	.confetti {
		position: fixed;
		top: -50px;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
	}
</style>
