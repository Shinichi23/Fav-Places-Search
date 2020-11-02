import axios from 'axios'

const search= axios.create({
    baseURL: 'https://api.foursquare.com/v2/venues',
 })

export default search