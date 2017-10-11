/*ava test 20171010 MaShizhen*/
import test from 'ava';

test.before("before", t => {
    console.log("  ^ before test");
});

test.skip('will be skip', t => {
    t.fail();
});

test("will be pass", t => {
    t.pass();
});

test("will be fail", t => {
    t.fail();
});

test.todo('will think about writing this later');

test.after("cleanup", t => {
    console.log("  # test over");
});

test.beforeEach(t => {
    // 这个会在每个测试之前运行
});

test.afterEach(t => {
    // 这个会在每个测试之后运行
});