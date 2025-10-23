
  const quoteLine = document.querySelector("#quote");
  const authorLine = document.querySelector("#author");
  const newQuoteButton = document.querySelector("#new-quote");

  const backendUrl = 'https://rihannap-quotes--generator-backend.hosting.codeyourfuture.io/';

async function fetchQuote() {
  try {
    const response = await fetch(backendUrl);
    const text = await response.text();
    const [_, quote, author] = text.match(/"(.*)"\s*-(.*)/) || [];
    quoteLine.textContent = quote?.trim() || text;
    authorLine.textContent = author?.trim() || "";
  } catch {
    quoteLine.textContent = "Error fetching quote.";
    authorLine.textContent = "";
  }
}

    window.onload = fetchQuote;

  newQuoteButton.addEventListener("click", fetchQuote);
 



