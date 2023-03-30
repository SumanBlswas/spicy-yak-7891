import axios from 'axios'

export const cartAPI =async (headers)=>{
    const res = await axios.get(`https://maroon-sea-urchin-tam.cyclic.app/cart`,{headers})
    return res.data
}

export const cartaddAPI =async (payload,headers)=>{
    const res = await axios.post(`https://maroon-sea-urchin-tam.cyclic.app/cart/add`,payload,{headers})
    return res.data
}

export const cartdeleteAPI =async (id,headers)=>{
    const res = await axios.delete(`https://maroon-sea-urchin-tam.cyclic.app/cart/delete/${id}`,{headers})
    return res.data
}

export const cartupdateAPI =async (payload,id,headers)=>{
    const res = await axios.patch(`https://maroon-sea-urchin-tam.cyclic.app/cart/updates/${id}`,payload,{headers})
    return res.data
}