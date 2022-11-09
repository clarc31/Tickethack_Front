/* fetch('http://localhost:3000/trips') 
    .then(response => response.json()) 
    .then(data => { */
        
document.querySelector('#btn-search').addEventListener('click', function() {
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const calendar = document.querySelector('#calendar').value;
    if (arrival && departure && calendar) {
        fetch('http://localhost:3000/trips', {
            method: 'POST',
            hearders: {'Content-Type': 'application/json'},
            body: JSON.stringify({departure, arrival, calendar})
        }).then(response => response.json())
        .then(data => {
            if (data.result) {
                console.log(data)
            }
        })
    }
})
