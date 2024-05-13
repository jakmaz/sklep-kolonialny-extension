var element = document.getElementById("sundayOverlay");
if (element) {
    element.parentNode.removeChild(element);
}

if (window.location.href.startsWith("https://cejrowski.com/sklep/produkt/")) {
    setTimeout(()=>{cart.appendChild(btn)}, 1000);
    const cart = document.querySelector(".cart");
    const btn = document.createElement("button")
    const inputIds = document.querySelector(".cart>.woobt-ids");
    btn.setAttribute("type", "submit");
    btn.setAttribute("name", "add-to-cart");
    btn.setAttribute("value", inputIds.getAttribute("data-id"));
    btn.classList.add(["single_add_to_cart_button", "button", "alt", "wp-element-button"]);
    btn.innerText = "Dodaj do koszyka";
}

if (window.location.href.startsWith("https://cejrowski.com/koszyk/")) {
    // Find the parent div element with class "cross-sells"
    const crossSellsDiv = document.querySelector('.actions');
    // Create the new div element with the specified HTML
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <a href="https://cejrowski.com/zamowienie/" class="checkout-button button alt wc-forward wp-element-button" style="margin-top: 10px;">
            Przejdź do płatności
        </a>
    `;

    // Append the new div to the "cross-sells" div
    crossSellsDiv.appendChild(newDiv);

}

