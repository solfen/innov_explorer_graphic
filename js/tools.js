"use strict"

function lerp (from, to, t) {
	return from + (t < 0 ? 0 : t > 1 ? 1 : t) * (to - from);
}

function sign (n) {
	return n < 0 ? -1 : 1;
}

function dist_xy_sqrt (a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	return dx * dx + dy * dy;
}

function loop_index (index, length) {
	return (length + (index % length)) % length;
}

function sum () {
	var sum = 0;
	for (var i = arguments.length; i--;) {
		sum += arguments[i];
	}
	return sum;
}

function average () {
	return sum.apply(null, arguments) / arguments.length;
}
