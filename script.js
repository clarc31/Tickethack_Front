document.querySelector('#btn-search').addEventListener('click', function() {
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const calendar = document.querySelector('#calendar').value;
    if (arrival && departure && calendar) {
        fetch('http://localhost:3000/trips', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({departure: departure, arrival: arrival, date: calendar})
        }).then(response => response.json())
        .then(data => {
            {
                console.log(data)
            }
        })
    }
})

// How to convert array to objet ?
