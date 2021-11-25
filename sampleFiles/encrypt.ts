function inverse(a: number, m: number) {
    let g = gcdex(a, m);
    if (g.gcd != 1) return -1;
    else {
        let res = Math.floor((g.x % m + m) % m);
        return res;
    }
}

function gcdex(a: number, b: number): { x: number, y: number, gcd: number } {
    if (a == 0) {
        return {
            x: 0,
            y: 1,
            gcd: b,
        }
    }

    let gcd = gcdex(b % a, a);
    return {
        x: Math.floor(gcd.y - Math.floor(b / a) * gcd.x),
        y: gcd.x,
        gcd: gcd.gcd
    }
}

function encrypt(numToEncrypt: number, d: number, p: number): number {
    let origArray = Array.from(String(numToEncrypt), Number);
    let cipArray: number[] = []
    let cipher = -1;

    for (let i = 0; i < origArray.length; i++) {
        let digit = origArray[i];
        cipher = digit ** d;
        cipher = cipher % p;
        cipArray.push(cipher);
    }

    cipher = parseInt(cipArray.join(''))
    return cipher;
}

function expCipher(plaintext: number, e: number, p: number) {
    let cipher = encrypt(plaintext, e, p)
    console.log("plaintext:", plaintext)
    console.log("cipher:", cipher);
    console.log("p:", p)
    console.log("e:", e)
    let d = inverse(e, p - 1);
    console.log("d:", d);
    console.log("decrypted: ", encrypt(cipher, d, p));
}

let plaintext = 258;
let e = 3;
let p = 11;
expCipher(plaintext, e, p)
