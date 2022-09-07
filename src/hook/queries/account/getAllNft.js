import React from 'react'
import axios from "axios"
import { BACKEND_URL } from '../../../utils/config/config'

const getAllNft = async(data) => {
        const response = await axios.get(`${BACKEND_URL}/account/collectibles/${data}`)
        console.log(response.data);
        return response.data;
}

export default getAllNft
