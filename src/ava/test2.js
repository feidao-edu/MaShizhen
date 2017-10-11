import test from 'ava';
test('foo', t => {
    t.pass();
});

test('bar', ()=>{
    4 == 5;
});

test(t => {
    t.deepEqual([1, 2], [1, 2]);
});