/**
 * restituisce la colonna di un numero per le cartelle
 * @param n numero di cui calcolare la colonna
 */
export function GetColumnOfNumber(n: number): number {
    return Math.min(8, Math.floor(n / 10));
}
