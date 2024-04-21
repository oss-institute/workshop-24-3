import '@testing-library/jest-dom';
import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoList from '../src/app/page';
import { useItemsStore } from '../src/app/hooks/useItemsStore';

afterEach(() => {
	localStorage.clear();
});

it('should append new item at the end of the list by clicking the button', async () => {
	render(<TodoList />);

	const newItem = 'new item';

	await userEvent.type(screen.getByTestId('input'), newItem);
	await userEvent.click(screen.getByTestId('button'));

	expect(screen.getByTestId('list').lastChild?.textContent).toEqual(newItem);
});

it('should append new item at the end of the list by pressing Enter', async () => {
	render(<TodoList />);

	const newItem = 'new item';

	await userEvent.type(screen.getByTestId('input'), newItem);
	await userEvent.type(screen.getByTestId('input'), '{enter}');

	expect(screen.getByTestId('list').lastChild?.textContent).toEqual(newItem);
});

it('should append new item correctly when there is no item yet', async () => {
	render(<TodoList />);

	const newItem = 'new item';

	// remove default items
	await userEvent.click(screen.getByTestId('trash-button'));

	// mark all tasks as done
	await Promise.all(
		screen
			.getAllByTestId('checkbox')
			.map((checkbox) => userEvent.click(checkbox)),
	);

	// remove all tasks
	await Promise.all(
		screen
			.getAllByTestId('trash-button')
			.map((button) => userEvent.click(button)),
	);

	await userEvent.type(screen.getByTestId('input'), newItem);
	await userEvent.click(screen.getByTestId('button'));

	expect(screen.getByTestId('list').lastChild?.textContent).toEqual(newItem);
});

it('should toggle the item on click', async () => {
	render(<TodoList />);
	const hook = renderHook(() => useItemsStore());
	const doneItemId = hook.result.current.items.find((i) => i.isDone)?.id;

	const checkbox = screen
		.getByTestId(`item-${doneItemId}`)
		.querySelector('input')!;

	await userEvent.click(checkbox);

	expect(checkbox).not.toBeChecked();

	await userEvent.click(checkbox);

	expect(checkbox).toBeChecked();
});

it('should render done items as checked', async () => {
	render(<TodoList />);
	const { result } = renderHook(() => useItemsStore());
	const doneItemId = result.current.items.find((i) => i.isDone)?.id;

	expect(
		screen.getByTestId(`item-${doneItemId}`).querySelector('input'),
	).toBeChecked();
});

it('should render not done items as not checked', async () => {
	render(<TodoList />);
	const { result } = renderHook(() => useItemsStore());
	const notDoneItemId = result.current.items.find((i) => !i.isDone)?.id;

	expect(
		screen.getByTestId(`item-${notDoneItemId}`).querySelector('input'),
	).not.toBeChecked();
});

it('should remove the list when clicking the trash icon', async () => {
	render(<TodoList />);
	const { result } = renderHook(() => useItemsStore());
	const doneItem = result.current.items.find((i) => i.isDone)!;

	act(() => {
		screen
			.getByTestId(`item-${doneItem.id}`)
			.querySelector('button')
			?.click();
	});

	expect(screen.queryByDisplayValue(doneItem.content)).toBeNull();
});
