import test from 'ava';
import { add1, add2 } from '../../dist/sum/add';


test('add a to b', async (t) => {
	t.is(add1(1, 2), "3");
});