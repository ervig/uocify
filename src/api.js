export const getPlaylists = async () => {
    try {
        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists/'
        const resposta = await fetch(url)
        const json = await resposta.json()
        return json
    }
    catch (errors) {
        console.log("error = " + errors)
    }
};

export const getTrack = async (id) => {
    try {
        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/'+id
        const resposta = await fetch(url)
        const json = resposta.json()
        return json
    }
    catch (errors) {
        console.log("error = " + errors)
    }
};

export const getTracks = async (query) => {
    try {
        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+query
        const resposta = await fetch(url)
        if(resposta.ok){
            //console.log("getTracks estat promesa : "  + resposta.status )
            const json = await resposta.json()
            return json
        } else {
            return "Consulta Tracks Incorrecte"
        }
    }
    catch (errors) {
        return "Problema en la petició fetch Tracks"
    }
};

export const getAlbums = async (query) => {
    try {
        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+query
        const resposta = await fetch(url)
        if(resposta.ok){
            const json = await resposta.json()
            return json
        } else {
            return "Consulta Albums Incorrecte"
        }
    }
    catch (errors) {
        return "Problema en la petició fetch Albums"
    }
};

export const getArtists = async (query) => {
    try {
        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='+query
        const resposta = await fetch(url)
        if(resposta.ok){
            const json = await resposta.json()
            return json
        } else {
            return "consulta Artists Incorrecte"
        }
    }
    catch (errors) {
        return "Problema en la petició fetch Artists"
    }
};


