import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ZTgNGsaukScfLyFshWZ9grhIKBOze8v2xP-U6jcd4OtTp5EpCwOUNS_Q7nDMBqAJK-yOEcm3-3myfsnfjLJ2U0DUaxh7LXc-pB0g1lnO3eA9vsPDAtSPOPuPIV-0XnYx'
    }
});