var sum = 0;
for (i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}

console.log(sum);


// console.log(process.argv[2]+process.argv[3]+process.argv[4])