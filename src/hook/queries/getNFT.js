import React from 'react'
import axios from "axios"
import { BACKEND_URL } from '../../utils/config/config'

const getNFT = (data) => {
    return fetchNFTData = async () => {
        const response = await axios.get(`${BACKEND_URL}/collectibles/${data.contractAddress}/${data.tokenId}`)
        console.log(response.data.details.metadata);
        return response.data.details;
    }
}

export default getNFT
