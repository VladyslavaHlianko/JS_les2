function fun(){
    let a = Number(document.getElementById('firstNum').value);
    let b = Number(document.getElementById('secondNum').value);
    let n = Number(document.getElementById('countNum').value);
    let h = (b-a)/n;
    console.log("y=|x+4|^5");
    console.log("a=" +a+ " b=" +b+ " n=" +n+ " h="+h.toFixed(3));
    for(let i=0; i<=n; i++){
        let x = a+i*h;
        let y = Math.abs(Math.pow(x+4,5));
        console.log("i="+i+" x="+x.toFixed(3)+" y="+y.toFixed(3));
    }
    console.log("y=1+2^x");
    console.log("a=" +a+ " b=" +b+ " n=" +n+ " h="+h.toFixed(3));
    for(let i=0; i<=n; i++){
        let x = a+i*h;
        let y = 1+Math.pow(2,x);
        console.log("i="+i+" x="+x.toFixed(3)+" y="+y.toFixed(3));
    }
    console.log("y=(x+6)^3");
    console.log("a=" +a+ " b=" +b+ " n=" +n+ " h="+h.toFixed(3));
    for(let i=0; i<=n; i++){
        let x = a+i*h;
        let y = Math.pow((x+6),3);
        console.log("i="+i+" x="+x.toFixed(3)+" y="+y.toFixed(3));
    }
    console.log("y=(3^x)^2");
    console.log("a=" +a+ " b=" +b+ " n=" +n+ " h="+h.toFixed(3));
    for(let i=0; i<=n; i++){
        let x = a+i*h;
        let y = Math.pow((Math.pow(3,x)),2);
        console.log("i="+i+" x="+x.toFixed(3)+" y="+y.toFixed(3));
    }
    console.log("y=3^(-x)+x^(-3)");
    console.log("a=" +a+ " b=" +b+ " n=" +n+ " h="+h.toFixed(3));
    for(let i=0; i<=n; i++){
        let x = a+i*h;
        let y = Math.pow(3,-x)+Math.pow(x,-3);
        console.log("i="+i+" x="+x.toFixed(5)+" y="+y.toFixed(5));
    }
}