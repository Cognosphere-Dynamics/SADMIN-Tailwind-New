document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownContent = button.nextElementSibling;
        dropdownContent.classList.toggle('hidden');
    });
});


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

//Messages and notifications

function toggleDropdown(dropdownId, event) {
    const dropdown = document.getElementById(dropdownId);
    const allDropdowns = document.querySelectorAll('[id$="Dropdown"]');
    
    event.stopPropagation();
    
    allDropdowns.forEach(d => {
        if (d.id !== dropdownId) {
            d.classList.add('hidden');
        }
    });

    dropdown.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('[id$="Dropdown"]');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('[id$="Dropdown"]');
        const buttons = document.querySelectorAll('button');
        
        let clickedOnButton = false;
        buttons.forEach(button => {
            if (button.contains(event.target)) {
                clickedOnButton = true;
            }
        });

        if (!clickedOnButton) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        }
    });
});