import React from 'react'
import axios from "axios"
import { BACKEND_URL } from '../../utils/config/config';

const useListNft = async(data) => {
        const response = await axios.post(
            `${BACKEND_URL}/listings/create`,data
        );
        console.log(response.data);
        return response.data;
}

export default useListNft
