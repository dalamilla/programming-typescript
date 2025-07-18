import { expect, test } from 'vitest';
import { render } from '@testing-library/svelte';
import App from './App.svelte';

test('show title of app', () => {
	const { getByText } = render(App);

	expect(getByText('JSON to CSV')).toBeDefined();
});
