
  const quoteLine = document.querySelector("#quote");
  const authorLine = document.querySelector("#author");
  const newQuoteButton = document.querySelector("#new-quote");


 async function fetchQuote() {
  try {
    const response = await fetch("http://127.0.0.1:3000/");
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();
    quoteLine.textContent = data.quote;
    authorLine.textContent = `— ${data.author}`;
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    quoteLine.textContent = "Error fetching quote.";
    authorLine.textContent = "";
  }
}

    window.onload = fetchQuote;

// Update the displayed quote when the button is clicked
  newQuoteButton.addEventListener("click", fetchQuote);
 



