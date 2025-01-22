document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown buttons
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    
    // Add click handler to each button
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the next sibling dropdown content
            const dropdownContent = this.nextElementSibling;
            
            // Toggle the visibility
            if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
                dropdownContent.style.display = 'block';
            } else {
                dropdownContent.style.display = 'none';
            }
        });
    });
});

document.getElementById('addAdminButton').addEventListener('click', () => {
    document.getElementById('adminForm').classList.toggle('hidden');
});

document.getElementById('adminDetailsForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const row = document.createElement('tr');

    [
        'fullName',
        'department',
        'nextOfKin',
        'nssfNumber',
        'email',
        'contactNumber',
        'role',
        'nextOfKinPhone'
    ].forEach(field => {
        const cell = document.createElement('td');
        cell.classList.add('py-2', 'px-4', 'border-b');
        cell.textContent = formData.get(field);
        row.appendChild(cell);
    });

    document.getElementById('adminTableBody').appendChild(row);
    event.target.reset();
    document.getElementById('adminForm').classList.add('hidden');
});

const addNewsButton = document.getElementById('addNewsButton');
const newsModal = document.getElementById('newsModal');
const closeModal = document.getElementById('closeModal');
const newsForm = document.getElementById('newsForm');

addNewsButton.addEventListener('click', () => {
    newsModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    newsModal.classList.add('hidden');
});

newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(newsForm);
    // Handle form submission here
    newsModal.classList.add('hidden');
    // Add success notification or redirect
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === newsModal) {
        newsModal.classList.add('hidden');
    }
});