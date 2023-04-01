import axios from "axios"

export const getMensProductsAPI = async (page) => {
    let res = await axios.get(`https://puce-busy-zebra.cyclic.app/MensData?_limit=10&_page=${page}`)
    // console.log(res.data)
    return res
}

export const getSingleProductAPI = async (id) => {
    let res = await axios.get(`https://puce-busy-zebra.cyclic.app/MensData/${id}`)
    return res
}


// sorting api calls

let baseURL = `https://puce-busy-zebra.cyclic.app/MensData?_limit=10&`

export const getProductsSorting = async (val, page) => {
    if (val === "PriceLTH") {
        let res = await axios.get(`https://puce-busy-zebra.cyclic.app/MensData?_limit=10&_page=${page}&_sort=discounted_price&_order=asc`)
        return res
    }
    if (val === "PriceHTL") {

        let res = await axios.get(`https://puce-busy-zebra.cyclic.app/MensData?_limit=10&_page=${page}&_sort=discounted_price&_order=desc`)
        return res
    }

    if (val === "discount") {
        let res = await axios.get(`https://puce-busy-zebra.cyclic.app/MensData?_limit=10&_page=${page}&_sort=${val}&_order=desc`)
        return res

    } 
    
    if (val === "rating") {
        let res = await axios.get(`https://puce-busy-zebra.cyclic.app/MensData?_limit=10&_page=${page}&_sort=${val}&_order=desc`)
        return res

    } else {
        let res = await axios.get(`${baseURL}`)
        return res
    }
}
// filter 

export const getFilterByBrand = async(val,page)=>{
val = (val.toString())
// console.log(val)
    let res = await axios.get(`https://puce-busy-zebra.cyclic.app/MensData?_limit=10&_page=${page}&brand=${val}`)

    return res
    // console.log(res.data)

}

