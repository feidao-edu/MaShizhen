/**
 * 读文件模块，还没有写完
 * todo
 */

import { readFile } from 'fs';
import * as http from 'http'

export  function test() {
	const file = "";	// todo:
	readFile(file, (err, data) => {
		if (err) {
			return -1;
		} else {
			return data;
		}
	});
}
