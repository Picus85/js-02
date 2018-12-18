let n = prompt("Input n")

function fibonNum(n) {
    if (n == 0) { return (0); }
    if (n <= 2) {
       return (1);
   }
  if (n > 2) {
     return fibonNum(n - 1) + fibonNum(n - 2);
   }
}
document.write(fibonNum(n)+"<br>")


let arayFibon = [1, 1];

function fibonMatrix(n) {
    for (let i = 1; i < n; i++) {
        if (n > 2) {
            arayFibon.push(arayFibon[i - 1] + arayFibon[i]);
        }
        document.write(arayFibon[i - 1]+" ");
    }
    return arayFibon[n - 1];
}
document.write(fibonMatrix(n));
