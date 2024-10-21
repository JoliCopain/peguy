const sections = document.querySelectorAll('section');

        function toggleSections() {
            sections.forEach(section => {
                section.classList.toggle('show');
            });
        }

        // Optional: Show sections on page load
        window.onload = () => {
            sections.forEach(section => {
                section.classList.add('show');
            });
        };