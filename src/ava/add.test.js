import test from 'ava';
import { add1, add2 } from '../../dist/sum/add';
import arr from '../../dist/ava/ava-src';


test('add1', async (t) => {
	t.is(add1(1, 2), 3);
});

test('add2', async (t) => {
	t.is(add2(1, 2), 4);
});

test('deepEqual', async (t) => {
	t.deepEqual(arr().a, arr().b);
});

test('deepEqual', async (t) => {
	t.deepEqual(arr().a, arr().c);
});