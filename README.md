# comp484-hw9
## Reflection
 
The easiest part was Section 2, since it mostly involved calling `Number()` and the check methods and printing the results to the page. The hardest part was the date section, because I had to fetch the month, day, and year individually and then format them into `MM/DD/YYYY` by hand. I learned that the `Date` object doesn't format dates for you: its methods return separate pieces, `getMonth()` is zero-based so you have to add 1, and you have to add the leading zeros yourself. I learned that the `Number` object is versatile and makes error checking easy, since `Number()` returns `NaN` for invalid strings instead of crashing, and `Number.isNaN()` and `Number.isInteger()` let you test the result. I learned that displaying results in the browser takes both JavaScript and HTML working together, because the HTML needs elements with matching IDs for JavaScript to find with `getElementById()` and fill in.

## Link
https://alexrz101.github.io/comp484-hw9/
