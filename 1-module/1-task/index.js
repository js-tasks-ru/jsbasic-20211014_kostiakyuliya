function factorial(n) {
  let f = 1;
    while(n){
        f *= n--;
    }
    return f;
}
//n! = (n-0) * (n - 1) * (n - 2) * ...*1
