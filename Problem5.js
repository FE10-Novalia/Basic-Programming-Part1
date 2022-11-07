// Lp = 2 pi r^2 + 2 pi r T
//       = 2 pi r (r + T)


const LPTabung = (T,r) => {
    let lp = 2 * 3.14 * r * (r + T)
    console.log(lp)
}

LPTabung(20,4)
LPTabung(20,8)