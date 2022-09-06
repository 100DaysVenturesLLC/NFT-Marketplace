import React from 'react'
import axios from "axios"
import { BACKEND_URL } from '../../utils/config/config';

const getCollection = async(data) => {
        const response = await axios.get(
            `${BACKEND_URL}/collections/:${data.contractAddress}`
        );
        console.log(response.data);
        return response.data;
}

export default getCollection
