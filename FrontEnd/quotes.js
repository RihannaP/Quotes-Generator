
  const quoteLine = document.querySelector("#quote");
  const authorLine = document.querySelector("#author");
  const newQuoteButton = document.querySelector("#new-quote");

  const form = document.querySelector("#add-quote-form");
  const quoteInput = document.querySelector("#new-quote-text");
  const authorInput = document.querySelector("#new-quote-author");
  const formMessage = document.querySelector("#form-message");

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

// Handle new quote submissions
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newQuote = quoteInput.value.trim();
  const newAuthor = authorInput.value.trim();

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quote: newQuote, author: newAuthor }),
    });

    if (!response.ok) throw new Error("Failed to submit quote");

    formMessage.textContent = "Quote added successfully!";
    quoteInput.value = "";
    authorInput.value = "";

  } catch (err) {
    formMessage.textContent = "Error submitting quote.";
    console.error(err);
  }
});

    window.onload = fetchQuote;

  newQuoteButton.addEventListener("click", fetchQuote);
 



