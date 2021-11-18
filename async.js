async function loadJson(url) {
    let response = await fetch(url)
    try {
        if (response.status === 200) {
          console.log(typeof response.status)
            return response.json()
        } else {
            throw new Error(response.status)
        }
    } catch (e) {
        alert(e.message)
    }
}

loadJson('no-such-user.json')
// .catch(alert); // Error: 404
