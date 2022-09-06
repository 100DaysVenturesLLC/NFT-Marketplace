import React from 'react'
import axios from "axios"
import { BACKEND_URL } from '../../utils/config/config';

const getAllCollections = async() => {
    // return fetchCollectionsData = async () => {
        const response = await axios.get(
            `${BACKEND_URL}/collections/all`
        );
        console.log(response.data);
        return response.data;
    // };
}

export default getAllCollections
