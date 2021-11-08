fetch('https://api.chucknorris.io/jokes/random')
    .then(x => x.json())
    .then(x => {
        let p = document.querySelector('p')
        p.innerText = x.value
    })
