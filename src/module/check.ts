/**
 * 读文件模块，还没有写完
 */

import { readFile } from 'fs';
import * as http from 'http'

function test() {
	const file = "";	// todo:
	readFile(file, (err, data) => {
		if (err) {
			return -1;
		} else {
			return data;
		}
	});
}