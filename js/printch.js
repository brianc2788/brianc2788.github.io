// print ascii value table (decimal).
// this is a test; no functions, best practices, etc.

console.log("-- NUMBER CHARS (48-57, 0x30-0x39) --")
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

//document.write("<p><b>Check your dev console</b></p>")
p1 = document.createElement("p")
p1.addAttribute("font-weight","900")
p1.innerText = "Check the dev console."
document.appendChild(p1)