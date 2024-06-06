document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('importButton').addEventListener('click', function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = '.csv';

        // Listen for the CSV file selection
        input.addEventListener('change', function (event) {
            var file = event.target.files[0]; // Get the selected file

            if (file) {
                if (file.name.endsWith('.csv')) { // If CSV file is selected

                    // Read the file content using FileReader
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        const csvData = event.target.result; // Get the file content as a string

                        // Store CSV data in localStorage
                        localStorage.setItem('csvData', csvData);

                        // Redirect to createbookings.html
                        window.location.href = 'createbookings.html';
                    };
                    reader.readAsText(file);
                } else {
                    alert('Please select a valid CSV file.');
                }
            }
        });
        input.click();
    });
});
