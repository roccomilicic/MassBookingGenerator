function processCSVData(csvData) {
    // Parse the CSV data using a library like Papa Parse or a custom parser
    const rows = Papa.parse(csvData, { header: true }).data; // Assuming headers are present
  
    // Create the HTML table structure dynamically
    const table = document.createElement('table');
    table.classList.add('csv-data-table'); // Add a class for styling
  
    // Create table header row
    const headerRow = document.createElement('tr');
    for (const key in rows[0]) {
      const headerCell = document.createElement('th');
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
  
    // Add data rows
    for (const row of rows) {
      const dataRow = document.createElement('tr');
      for (const value of Object.values(row)) {
        const dataCell = document.createElement('td');
        dataCell.textContent = value;
        dataRow.appendChild(dataCell);
      }
      table.appendChild(dataRow);
    }
  
    // Replace the placeholder in the HTML with the created table
    const csvTableContainer = document.getElementById('csv-table');
    csvTableContainer.innerHTML = ""; // Clear previous content
    csvTableContainer.appendChild(table);
}

// Retrieve csvData from localStorage
const csvData = localStorage.getItem('csvData');

// Call the processCSVData function with csvData
processCSVData(csvData);
