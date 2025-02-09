function getResult() {
    var val = document.getElementById('num').value.trim();
    
    if (val === "") {
        alert("Please enter your registration number!");
        return;
    }
    
    if (val.length !== 12 || isNaN(val)) {
        alert("Invalid Registration Number! Must be 12 digits.");
        return;
    }

    // Simulate fetching the SGPA (random number between 5.0 and 10.0)
    const sgpa = (Math.random() * (10 - 5) + 5).toFixed(2);

    document.getElementById('Results').innerText = `SGPA: ${sgpa}`;
}