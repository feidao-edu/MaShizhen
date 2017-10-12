
const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const date = new Date();
//是不是闰年
export function is_leapyear(year: number) {
	date.setFullYear(year, 1, 29);
	return date.getDate() === 29;
}

//设置的日期的年份
export function get_year(time: number) {
	return new Date(time).getFullYear();
}

//返回设置时间距1970/1/1 0/0/0/0的毫秒数
export function set_year(time: number, year: number) {
	const dt = new Date(time);			//通过毫秒数，设置一个日期1
	const dayOfMonth = dt.getDate();	//获取 日期1 当天的 日

	dt.setFullYear(year);				//更改“日期1”的年份

	if (dt.getDate() < dayOfMonth) {	//判断传入的参数“year”是否合法，输入的“year”是number类型，且不出边界，即为合法
		dt.setDate(0);					//设置为当月的最后一天，，，，这个if好像没有什么作用
	}
	dt.setFullYear(year);				//如果传入的“year”越界，那么这一句也没有作用？？？？
	return dt.getTime();				//返回距1970/1/1 0/0/0/0的毫秒数
}

//获取月份
export function get_month(time: number) {
	return new Date(time).getMonth() + 1;
}

//设置月份
export function set_month(time: number, month: number) {
	const dt = new Date(time);
	const dayOfMonth = dt.getDate();
	dt.setMonth(month - 1);
	if (dt.getDate() < dayOfMonth) {
		dt.setDate(0);
	}
	return dt.getTime();
}

//获取设置时间的日
export function get_day_of_month(time: number) {
	return new Date(time).getDate();
}

//设置当月的天数
export function set_day_of_month(time: number, day: number) {
	const dt = new Date(time);
	dt.setDate(day);
	return dt.getTime();
}

//获取小时
export function get_hours(time: number) {
	return new Date(time).getHours();
}

//设置小时
export function set_hours(time: number, hours: number) {
	const dt = new Date(time);
	dt.setHours(hours);
	return dt.getTime();
}

export function get_minutes(time: number) {
	return new Date(time).getMinutes();
}

export function set_minutes(time: number, minutes: number) {
	const dt = new Date(time)
	dt.setMinutes(minutes);
	return dt.getTime();
}

export function get_seconds(time: number) {
	return new Date(time).getSeconds();
}

export function set_seconds(time: number, seconds: number) {
	const dt = new Date(time);
	dt.setSeconds(seconds);
	return dt.getTime();
}

export function get_milliseconds(time: number) {
	return new Date(time).getMilliseconds();
}

export function set_milliseconds(time: number, milliseconds: number) {
	const dt = new Date(time);
	dt.setMilliseconds(milliseconds);
	return dt.getTime();
}

export function get_dayOfWeek(time: number) {
	return new Date(time).getDay();
}

export function get_days_in_month(time: number) {
	const dt = new Date(time);
	const month = dt.getMonth() + 1;
	if (month === 2 && is_leapyear(dt.getFullYear())) {
		return 29;
	}
	return days[month];
}

export function parse(string: string) {
	return Date.parse(string);
}

export function now() {
	return Date.now();
}

export function get_day_of_week(time: number) {
	return new Date(time).getDay();
}

export function get_timezone_offset(time: number) {
	return new Date(time).getTimezoneOffset();
}

export function tm2str(time: number) {
	return new Date(time).toString();
}

export function tm2tmstr(time: number) {
	return new Date(time).toTimeString();
}

export function tm2local_str(time: number) {
	return new Date(time).toLocaleString();
}

export function tm2local_tmstr(time: number) {
	return new Date(time).toLocaleTimeString();
}

export function tm2isostr(time: number) {
	return new Date(time).toISOString();
}

export function tm2json(time: number, key?: any) {
	return new Date(time).toJSON(key);
}

export function valueof(time: number) {
	return new Date(time).valueOf();
}
