<script lang="ts">
	let input_text = $state('');
	let output_text = $state('');
	let error = $state({
		enable: false,
		message: ''
	});

	let title_input = $state('JSON');
	let title_output = $state('CSV');

	function convert() {
		if (error.enable) {
			error.enable = false;
		}

		if (input_text) {
			try {
				let data = JSON.parse(input_text);
				if (!Array.isArray(data)) {
					if (typeof data === 'object' && data !== null) {
						data = [data];
					} else {
						throw new Error('Input must be a JSON array of objects.');
					}
				}

				if (data.length === 0) {
					throw new Error('JSON array is empty.');
				}

				const headers = Array.from(
					data.reduce((acc, obj) => {
						Object.keys(obj).forEach((key) => acc.add(key));
						return acc;
					}, new Set())
				);

				const headerRow = headers.map(escapeCsvCell).join(',');
				const valueRows = data.map((obj) =>
					headers.map((header) => escapeCsvCell(obj[header])).join(',')
				);

				output_text = [headerRow, ...valueRows].join('\n');
			} catch (e) {
				error = {
					enable: true,
					message: `Invalid JSON: ${e.message}`
				};
			}
		} else {
			error = {
				enable: true,
				message: 'Input cannot be empty.'
			};
		}
	}

	function escapeCsvCell(cell) {
		if (cell === undefined || cell === null) {
			return '';
		}
		const cellStr = String(cell);
		if (/[",\n]/.test(cellStr)) {
			return `"${cellStr.replace(/"/g, '""')}"`;
		}
		return cellStr;
	}

	function clear() {
		input_text = '';
		output_text = '';
	}
	function save() {
		if (output_text) {
			const blob = new Blob([output_text], { type: 'text/csv;charset=utf-8;' });
			const link = document.createElement('a');
			const url = URL.createObjectURL(blob);
			link.setAttribute('href', url);
			link.setAttribute('download', 'data.csv');
			link.style.visibility = 'hidden';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
	}

	async function copy() {
		if (output_text) {
			await navigator.clipboard.writeText(output_text);
		}
	}
</script>

<header>
	<h1>{title_input} to {title_output}</h1>
</header>
<main>
	<div class="app-form">
		<div class="app-form-input">
			<label for="input">{title_input} Input</label>
			<textarea id="input" bind:value={input_text}></textarea>
		</div>
		<div class="app-form-output">
			<label for="output">{title_output} Output</label>
			<textarea id="output" readonly bind:value={output_text}></textarea>
		</div>
	</div>
	<div class="app-panel">
		<button onclick={convert} class="button-convert">Convert</button>
		<button onclick={clear} class="button-clear">Clear</button>
		<button onclick={save} class="button-save">Save</button>
		<button onclick={copy} class="button-copy">Copy</button>
	</div>

	{#if error.enable}
		<div class="app-error">
			<span
				onclick={() => {
					error.enable = false;
				}}
				role="presentation"
				class="app-error-closebtn">&times;</span
			>
			<p>{error.message}</p>
		</div>
	{/if}
</main>

<style>
	header {
		text-align: center;
		padding: 10px;
	}
	main {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.app-form {
		display: flex;
		padding: 10px;
	}
	.app-form-input {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.app-form-output {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	.app-form-output textarea {
		background-color: #f8fafc;
	}

	.app-panel {
		display: flex;
		justify-content: center;
		padding: 10px;
	}

	.button-convert {
		border: 2px solid #4f46e5;
		background-color: #4f46e5;
	}

	.button-convert:hover {
		color: #4f46e5;
		background: white;
	}

	.button-clear {
		border: 2px solid #ff3333;
		background-color: #ff3333;
	}

	.button-clear:hover {
		color: #ff3333;
		background: white;
	}

	.button-save {
		border: 2px solid #16a34a;
		background-color: #16a34a;
	}

	.button-save:hover {
		color: #16a34a;
		background: white;
	}

	.button-copy {
		border: 2px solid #475569;
		background-color: #475569;
	}

	.button-copy:hover {
		color: #475569;
		background: white;
	}

	.app-error {
		padding: 20px;
		background-color: #f44336;
		color: white;
	}

	.app-error-closebtn {
		margin-left: 15px;
		color: white;
		font-weight: bold;
		float: right;
		font-size: 22px;
		line-height: 20px;
		cursor: pointer;
		transition: 0.3s;
	}

	.app-error-closebtn:hover {
		color: black;
	}
</style>
