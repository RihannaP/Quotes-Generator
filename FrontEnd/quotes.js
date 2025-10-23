
  const quoteLine = document.querySelector("#quote");
  const authorLine = document.querySelector("#author");
  const newQuoteButton = document.querySelector("#new-quote");


async function fetchQuote() {
  try {
    const response = await fetch("http://127.0.0.1:3000/");
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
 



