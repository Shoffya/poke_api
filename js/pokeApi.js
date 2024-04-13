const btnPo = document.querySelector('.btnSearch');

btnPo.addEventListener('click', () => {
    const namePo = document.querySelector('#name');

    const texto = namePo.value.trim();

    const apiLink = 'https://pokeapi.co/api/v2/pokemon/';

    const request = new Request(`${apiLink}${texto}`, { method: 'GET' });

    fetch(request).then(response => {
        if (response.status == 200) {
            return response.json();
        }

        else {
            throw new Error("Request failed.")
        }
    }).then(response => {
        let fields = ["name", "abilities", "sprites"]
        let result = {}

        for (let i = 0; i < fields.length; i++) {
            let pokemon = response[fields[i]]
            result[fields[i]] = pokemon
        }

        let img = result["sprites"]["front_default"]
        console.log(result)
        console.log(img)
    })
})
