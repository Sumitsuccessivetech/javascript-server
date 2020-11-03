export default function equilateral(n: number): void {

    let s = '';
    let j = n;
    for (let i = 1; i <= n; i++) {
        s = ''.repeat(j);
        console.log(s, '* '.repeat(i));
        s = '';
        j--;
    }
}