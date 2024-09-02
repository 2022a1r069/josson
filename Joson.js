document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');

    // Handle the search action
    searchButton.addEventListener('click', handleSearch);

    // Make the search responsive: trigger search on Enter key press
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (!query) {
            alert('Please enter a search term.');
            return;
        }

        const sections = [
            { id: 'home', content: 'joson technology' },
            { id: 'about', content: 'empowering businesses with innovative technology solutions. your success is our mission.' },
            { id: 'services', content: 'hotels, colleges & universities, institutes & coaching centers, petrol pumps, factories, clubs & trusts, ngos, and many more.' },
            { id: 'contact', content: 'contact us, email, whatsapp, location' }
        ];

        const match = sections.find(section => section.content.includes(query));

        if (match) {
            document.getElementById(match.id).scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('No matches found.');
        }
    }
});
