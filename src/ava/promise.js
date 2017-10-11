import test from 'ava'

test.before(t => {
    // 这个会在所有测试前运行
});

test.before(t => {
    // 这个会在上面的方法后面运行，但在测试之前运行
});

test.after('cleanup', t => {
    // 这个会在所有测试之后运行
});

test.beforeEach(t => {
    // 这个会在每个测试之前运行
});

test.afterEach(t => {
    // 这个会在每个测试之后运行
});

test(t => {
    // 正常的测试
});