const sentence = "hello there from lighthouse labs";

let delay = 1000
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); // print the char here
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 50
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);