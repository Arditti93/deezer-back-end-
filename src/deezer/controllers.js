const axios = require('axios');

const getMusic = async (req, res) => {
    try {
        let artist
        axios.get('https://api.deezer.com/artist/27')
        .then((response) => {
            let artist = response.data
            
            res.status(201).json({
                message: "Successfully registered",
                artist: {artist}
            })
        });

    } catch (error) {
        res.status(501).json({errorMessage:error.message, error:error})
        
    }
}



module.exports = {
    getMusic,
}