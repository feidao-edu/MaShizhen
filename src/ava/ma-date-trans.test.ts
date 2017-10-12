import test from 'ava';
import * as my_test from './date-trans';


/**
 *测试是不是闰年
 */
export function is_leapyear_test() {
    test("is_leapyear_pass_1", async (t) => {
        t.is(my_test.is_leapyear(2000), true);
    });

    test("is_leapyear_pass_2", async (t) => {
        t.is(my_test.is_leapyear(2001), false);
    });

    test("is_leapyear_false_1", async (t) => {
        t.is(my_test.is_leapyear(1999), true);
    });

    test("is_leapyear_false_2", async (t) => {
        t.is(my_test.is_leapyear(2000), false);
    });
}



/**
 * new Date()传入毫秒数， 获取年份
 */
export function get_year_test() {
    test("get_year_pass", async (t) => {
        t.is(my_test.get_year(1507770062942), 2017);
    });

    test("get_year_false", async (t) => {
        t.is(my_test.get_year(1507770062942), 1970);
    });
    test("get_year_false_beyond", async (t) => {
        t.is(my_test.get_year(150777006294213123131), 150777006294213123131);
    });
}


/**
 * 获取两个日期相距的毫秒数
 */
export function set_year_test() {
    test("set_year_pass", async (t) => {
        t.is(my_test.set_year(1000, 2017), 1483228801000);
    });

    test("set_year_false", async (t) => {
        t.is(my_test.set_year(1000, 2017), 1507778000854);
    });
}

export function get_month_test() {
    test("get_month_pass", async (t) => {
        t.is(my_test.get_month(1507778000854), 10);
    });
    test("get_month_pass", async (t) => {
        t.is(my_test.get_month(1507778000854), 9);
    });
}
export function set_month_test() {
    test("set_month", async (t) => {
        t.is(my_test.set_month(1507778000854, 8), 1507778000854);
        console.log(new Date(my_test.set_month(1507778000854, 8)).getTime());
    });
}
export function get_day_of_month_test() {
    test("get_day_of_month", async (t) => {
        t.is(my_test.get_day_of_month(1507778000854), 12)
    });
}

export function set_day_of_month_test() {
    test("set_day_of_month", async (t) => {
        t.is(my_test.set_day_of_month(1507778000854, 1), 1506827600854)
    });

    test("set_day_of_month_false_beyond", async (t) => {
        t.is(my_test.set_day_of_month(1507778000854, 19), 1506827600854)
    });
}

export function get_hours_test() {
    test("get_hours", async (t) => {
        t.is(my_test.get_hours(1507778000854), 11);
    });
}

export function set_hours_test() {
    test("set_hours_pass", async (t) => {
        t.is(my_test.set_hours(1507778000854, 10), 1507774400854);
    });

    test("set_hours_false", async (t) => {
        t.is(my_test.set_hours(1507778000854, 10), 1507774400850);
    });

    test("set_hours_false_beyond", async (t) => {
        t.is(my_test.set_hours(1507778000854, 25), 1507774400850);      // 25 相当于 1 
    });
}

export function get_minutes_test() {
    test("get_minutes", async (t) => {
        t.is(my_test.get_minutes(1507778000854), 13)
    });
}
export function set_minutes_test() {
    test("set_minutes", async (t) => {
        t.is(my_test.set_minutes(1507778000854, 1), 1507777280854)                     //61相当于1
        console.log(new Date(my_test.set_minutes(1507778000854, 61)).getMinutes());
    });
}

export function get_seconds_test() {
    test("get_seconds", async (t) => {
        t.is(my_test.get_seconds(1507778000854), 20)
    });
}
export function set_seconds_test() {
    test("set_seconds", async (t) => {
        t.is(my_test.set_seconds(1507778000854, 1), 1507777981854)                     //61相当于1
        console.log(new Date(my_test.set_seconds(1507778000854, 61)).getSeconds());
    });
}

export function get_milliseconds_test() {
    test("get_milliseconds", async (t) => {
        t.is(my_test.get_milliseconds(1507778000854), 854);
    });
}
export function set_milliseconds_test() {
    test("set_milliseconds", async (t) => {
        t.is(my_test.set_milliseconds(1507778000854, 1), 1507778000001);            //61相当于1
        console.log(new Date(my_test.set_milliseconds(1507778000854, 9999999)));    //2017-10-12T05:59:59.999Z
        console.log(new Date(1507778000854));                                       //2017-10-12T03:13:20.854Z
    });
}
export function get_dayOfWeek_test() {
    test("get_dayOfWeek", async (t) => {
        t.is(my_test.get_dayOfWeek(1507778000854), 4);
    });
}
export function get_days_in_month() {
    test("get_days_in_month", async (t) => {
        t.is(my_test.get_days_in_month(0), 31);
    });
}
export function parse_test() {
    test("parse", async (t) => {
        t.is(my_test.parse("Thu Oct 12 2017 13:02:40 GMT+0800 (中国标准时间)"), 1507784560000);
    });
}

export function noew_test() {
    test("now", async (t) => {
        t.is(my_test.now(), 1507784560000);
    });
}

test("get_day_of_week", async (t) => {
    t.is(my_test.get_day_of_week(1507784560000), 4);
});

test("get_timezone_offset", async (t) => {
    t.is(my_test.get_timezone_offset(1507784560000), -480);
});

test("tm2str", async (t) => {
    t.is(my_test.tm2str(1507784560000), "Thu Oct 12 2017 13:02:40 GMT+0800 (中国标准时间)");
});

test("tm2tmstr", async (t) => {
    t.is(my_test.tm2tmstr(1507784560000), "13:02:40 GMT+0800 (中国标准时间)");
});

test("tm2local_str", async (t) => {
    t.is(my_test.tm2local_str(1507784560000), "2017-10-12 13:02:40");
});

test("tm2local_tmstr", async (t) => {
    t.is(my_test.tm2local_tmstr(1507784560000), "13:02:40");
});

test("tm2isostr", async (t) => {
    t.is(my_test.tm2isostr(1507784560000), "2017-10-12T05:02:40.000Z");
});

test("tm2json", async (t) => {
    t.is(my_test.tm2json(1507784560000), "2017-10-12T05:02:40.000Z");
});

test("tm2json2", async (t) => {
    t.is(my_test.tm2json(1507784560000, "time"), "2017-10-12T05:02:40.000Z");
});

test("valueof", async (t) => {
    t.is(my_test.valueof(1507784560000), 1507784560000)
});