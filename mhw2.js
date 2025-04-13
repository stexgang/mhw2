


const macImg = document.querySelector('.macc');
const originalSrc = macImg.src;
const hoverSrc = 'nuova-immagine.png'; 

macImg.addEventListener('mouseenter', () => {
    macImg.src = hoverSrc;
});

macImg.addEventListener('mouseleave', () => {
    macImg.src = originalSrc;
});


const appleIcon = document.querySelector('#logo');
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu', 'hidden');

const accediOption = document.createElement('div');
accediOption.textContent = 'Accedi';
dropdownMenu.appendChild(accediOption);

const registratiOption = document.createElement('div');
registratiOption.textContent = 'Registrati';
dropdownMenu.appendChild(registratiOption);

document.body.appendChild(dropdownMenu);

dropdownMenu.style.backgroundColor = '#f9f9f9';
dropdownMenu.style.border = '1px solid #ccc';
dropdownMenu.style.borderRadius = '8px';
dropdownMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
dropdownMenu.style.padding = '10px';
dropdownMenu.style.minWidth = '150px';
dropdownMenu.style.fontFamily = 'San Francisco, Arial, sans-serif';
dropdownMenu.style.fontSize = '14px';
dropdownMenu.style.color = '#333';
dropdownMenu.style.zIndex = '1000';


const menuOptions = dropdownMenu.querySelectorAll('div');
menuOptions.forEach(option => {
    option.style.padding = '8px 12px';
    option.style.cursor = 'pointer';
    option.style.borderRadius = '4px';
    option.addEventListener('mouseenter', () => {
        option.style.backgroundColor = '#e5e5e5';
    });
    option.addEventListener('mouseleave', () => {
        option.style.backgroundColor = 'transparent';
    });
});
appleIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    const rect = appleIcon.getBoundingClientRect();
    dropdownMenu.style.position = 'absolute';
    dropdownMenu.style.top = `${rect.bottom}px`;
    dropdownMenu.style.left = `${rect.left}px`;
});


document.addEventListener('click', (event) => {
    if (!appleIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

const searchIcon = document.querySelector('#ricerca');
const searchBox = document.createElement('div');
searchBox.classList.add('search-box', 'hidden');

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Cerca su Apple';
searchInput.style.width = '200px';
searchInput.style.padding = '8px';
searchInput.style.border = '1px solid #ccc';
searchInput.style.borderRadius = '8px';
searchInput.style.fontFamily = 'San Francisco, Arial, sans-serif';
searchInput.style.fontSize = '14px';
searchInput.style.outline = 'none';

searchBox.appendChild(searchInput);
document.body.appendChild(searchBox);


searchBox.style.backgroundColor = '#f9f9f9';
searchBox.style.border = '1px solid #ccc';
searchBox.style.borderRadius = '8px';
searchBox.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
searchBox.style.padding = '10px';
searchBox.style.zIndex = '1000';
searchBox.style.position = 'absolute';

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('hidden');
    const rect = searchIcon.getBoundingClientRect();
    searchBox.style.top = `${rect.bottom}px`;
    searchBox.style.left = `${rect.left}px`;
});


document.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target) && !searchBox.contains(event.target)) {
        searchBox.classList.add('hidden');
    }
});
