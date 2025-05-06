function handleSearch() {
    const input = document.getElementById('searchInput').value.trim();
    const feedback = document.getElementById('feedback');

    if (!input) {
      feedback.textContent = 'Please enter a valid search query.';
    } else if (input.length < 3) {
      feedback.textContent = 'Search term must be at least 3 characters.';
    } else {
      feedback.textContent = `No results found for "${input}".`;
    }
  }