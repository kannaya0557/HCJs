// This function calculates the 
// Fibonacci sequence up to a 
// given number 'n' 
function fibonacci(n) { 
	let sequence = [0n, 1n]; 

	for (let i = 2; i <= n; i++) { 
		sequence[i] = BigInt(sequence[i - 1]) 
			+ BigInt(sequence[i - 2]); 
	} 
	return sequence; 
} 
console.log(fibonacci(10));
// [
//     0n, 1n,  1n,  2n,  3n,
//     5n, 8n, 13n, 21n, 34n,
//    55n
//  ]