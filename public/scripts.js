let fullData = []; // Αποθηκεύει όλα τα δεδομένα
let visibleFields = []; // Αποθηκεύει τα επιλεγμένα ορατά πεδία

// Φέρνει δεδομένα από API
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'success') {
            return data.data;
        } else {
            alert('Error fetching data');
            return [];
        }
    } catch (error) {
        console.error(error);
        alert('Error connecting to server');
        return [];
    }
};

// Δημιουργεί checkboxes για τα ορατά πεδία
const createFieldOptions = (fields) => {
    const fieldOptions = document.getElementById('fieldOptions');
    fieldOptions.innerHTML = '';

    fields.forEach((field) => {
        if (field === 'id') return; // Απόκρυψη του ID

        const checkbox = document.createElement('div');
        checkbox.className = 'form-check';
        checkbox.innerHTML = `
            <input class="form-check-input" type="checkbox" id="${field}" value="${field}" checked>
            <label class="form-check-label" for="${field}">${field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
        `;
        fieldOptions.appendChild(checkbox);
    });

    visibleFields = fields.filter((field) => field !== 'id'); // Αρχικά όλα τα πεδία εκτός του ID
};

// Ενημερώνει τον πίνακα
const updateTable = (data) => {
    fullData = data; // Αποθήκευση όλων των δεδομένων
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');

    // Καθαρισμός πίνακα
    tableHeader.innerHTML = '';
    tableBody.innerHTML = '';

    if (data.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="100%">No data available</td></tr>';
        return;
    }

    // Δημιουργία κεφαλίδων
    visibleFields.forEach((field) => {
        const th = document.createElement('th');
        th.textContent = field.replace(/([A-Z])/g, ' $1').toUpperCase();
        tableHeader.appendChild(th);
    });

    // Δημιουργία γραμμών
    data.forEach((row) => {
        const tr = document.createElement('tr');
        visibleFields.forEach((field) => {
            const td = document.createElement('td');
            td.textContent = row[field] || '-';
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
};

// Ενημέρωση ορατών πεδίων
document.getElementById('updateFields').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('#fieldOptions .form-check-input:checked');
    visibleFields = Array.from(checkboxes).map((checkbox) => checkbox.value);
    updateTable(fullData);
});

// Εξαγωγή εμφανιζόμενων δεδομένων
document.getElementById('exportJson').addEventListener('click', () => {
    const displayedData = fullData.map((row) =>
        visibleFields.reduce((acc, field) => {
            acc[field] = row[field];
            return acc;
        }, {})
    );
    const blob = new Blob([JSON.stringify(displayedData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'displayed_data.json';
    a.click();
    URL.revokeObjectURL(url);
});

// Παράδειγμα: Fetch All Countries
document.getElementById('fetchAll').addEventListener('click', async () => {
    const data = await fetchData('/api/v1/countries');
    if (visibleFields.length === 0) createFieldOptions(Object.keys(data[0])); // Δημιουργία επιλογών αν δεν υπάρχουν
    updateTable(data);
});

// Fetch Cost of Living
document.getElementById('fetchCostOfLiving').addEventListener('click', async () => {
    const type = document.getElementById('costType').value;
    const limit = document.getElementById('limit').value;
    const data = await fetchData(`/api/v1/countries/cost-of-living?type=${type}&limit=${limit}`);
    if (visibleFields.length === 0) createFieldOptions(Object.keys(data[0]));
    updateTable(data);
});

// Fetch Restaurant Prices
document.getElementById('fetchRestaurantPrice').addEventListener('click', async () => {
    const type = document.getElementById('restaurantType').value;
    const limit = document.getElementById('limit').value;
    const data = await fetchData(`/api/v1/countries/restaurant-price?type=${type}&limit=${limit}`);
    if (visibleFields.length === 0) createFieldOptions(Object.keys(data[0]));
    updateTable(data);
});

// Fetch Quality of Life
document.getElementById('fetchQualityOfLife').addEventListener('click', async () => {
    const type = document.getElementById('lifeType').value;
    const limit = document.getElementById('limit').value;
    const data = await fetchData(`/api/v1/countries/quality-of-life?type=${type}&limit=${limit}`);
    if (visibleFields.length === 0) createFieldOptions(Object.keys(data[0]));
    updateTable(data);
});

// Fetch Adventure
document.getElementById('fetchAdventure').addEventListener('click', async () => {
    const type = document.getElementById('adventureType').value;
    const limit = document.getElementById('limit').value;
    const data = await fetchData(`/api/v1/countries/adventure?type=${type}&limit=${limit}`);
    if (visibleFields.length === 0) createFieldOptions(Object.keys(data[0]));
    updateTable(data);
});

// Fetch Cultural Heritage
document.getElementById('fetchCulturalHeritage').addEventListener('click', async () => {
    const type = document.getElementById('heritageType').value;
    const limit = document.getElementById('limit').value;
    const data = await fetchData(`/api/v1/countries/cultural-heritage?type=${type}&limit=${limit}`);
    if (visibleFields.length === 0) createFieldOptions(Object.keys(data[0]));
    updateTable(data);
});

// Fetch Safety Index
document.getElementById('fetchSafetyIndex').addEventListener('click', async () => {
    const limit = document.getElementById('limit').value;
    const data = await fetchData(`/api/v1/countries/routecontroler?limit=${limit}`);
    if (visibleFields.length === 0) createFieldOptions(Object.keys(data[0]));
    updateTable(data);
});
