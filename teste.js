function bhaskara(a, b, c) {
    if ((delta = b**2 - 4 * a * c) > 0)  {
        const x1 = ((-b + Math.sqrt(delta)) / 2 * a)
        const x2 = ((-b - Math.sqrt(delta)) / 2 * a)
        console.log(x1, x2)
    } else if ((delta = b**2 - 4 * a * c) == 0) {
        const x1 = ((-b + Math.sqrt(delta)) / 2 * a)
        const x2 = ((-b - Math.sqrt(delta)) / 2 * a)
        console.log(x1, x2)
    } else {
        console.log("Delta é negativo")
    }
} 

bhaskara(1, 12, -13) // Delta 
bhaskara(4, -4, 1) // Delta nulo
bhaskara(1, -4, 5) // Delta Negativo