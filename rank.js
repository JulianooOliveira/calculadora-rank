function calculadoraRank() {
    vitorias = 50;
    derrotas = 5;
    return vitorias - derrotas;
}
function nivelRank() {
    if (calculadoraRank() <= 10) { rank = "Ferro" }
    else if (calculadoraRank() <= 20) { rank = "Bronze" }
    else if (calculadoraRank() <= 50) { rank = "Prata" }
    else if (calculadoraRank() <= 80) { rank = "Ouro" }
    else if (calculadoraRank() <= 90) { rank = "Diamante" }
    else if (calculadoraRank() <= 100) { rank = "Lendário" }
    else if (calculadoraRank() > 101) { rank = "Imortal" }
    return rank;
}

console.log(`O Herói tem saldo de ${calculadoraRank()} pontos, e seu rank é ${nivelRank()}.`);