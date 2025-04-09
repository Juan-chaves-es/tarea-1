function displayTerms(filteredTerms) {
    const dictionary = document.getElementById("dictionary");
    dictionary.innerHTML = "";
    filteredTerms.forEach(({ term, definition }) => {
        const wikiLink = `https://es.wikipedia.org/wiki/${encodeURIComponent(term)}`;
        dictionary.innerHTML += `
            <li>
                <strong>${term}:</strong> ${definition}
                <a href="${wikiLink}" target="_blank" class="def-link">[Más info]</a>
            </li>`;
    });
}
