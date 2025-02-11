document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("faucet-btn").addEventListener("click", function () {
        alert("Hello, World!");
    });
});

async function fetchCryptoPrices() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,solana&vs_currencies=usd");
        const data = await response.json();

        document.getElementById("btc-price").textContent = data.bitcoin.usd;
        document.getElementById("sol-price").textContent = data.solana.usd;
    } catch (error) {
        console.error("Erreur lors de la récupération des prix:", error);
        document.getElementById("crypto-container").innerHTML = "<p>Erreur de chargement des prix</p>";
    }
}

document.addEventListener("DOMContentLoaded", fetchCryptoPrices);
