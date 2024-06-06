document.getElementById('importButton').addEventListener('click', function() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';

    // Listen for the CSV file selection
    input.addEventListener('change', function(event) {
        var file = event.target.files[0]; // Get the selected file clicked by the user
        if (file) {
            if (file.name.endsWith('.csv')) { // If CSV file is selected, redirect to createbookings.html
                window.location.href = 'createbookings.html';
            } else {
                alert('Please select a valid CSV file.');
            }
        }
    });
    input.click();
});
