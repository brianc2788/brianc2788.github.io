// print alphanumeric characters.

console.log("-- NUMBER CHARS (48-57, 0x30-0x39 --")
// numerals (ascii value range)
for (n = 48; n <= 57; n++) {
	s = String.fromCharCode(n)
	output = "Value: " + n + " - Char: " + s
	console.log(output)
}

console.log("\n-- ALPHABET (lower, upper) --")
for (n = 65; n <= 90; n++) {
	sUpper = String.fromCharCode(n)
	sLower = String.fromCharCode(n+32)
	output = "Value: " + n + " - Upper: " + sUpper + " Lower: " + sLower
	console.log(output)
}