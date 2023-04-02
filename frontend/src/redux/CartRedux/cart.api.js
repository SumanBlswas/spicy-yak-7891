// import axios from 'axios'

// export const cartAPI =async ()=>{
//     try{
//         let res = await axios.get('https://maroon-sea-urchin-tam.cyclic.app/cart',{
//           headers: {
//             Authorization: localStorage.getItem('token'),
//           }
//         })
//         // console.log(res);
//         return res;
//       }catch(err){
//         console.log(err);
//         console.log('Cannot get the Data')
//       }
// }

// export const cartdeleteAPI =async (id)=>{
//     const res = await axios.delete(`https://maroon-sea-urchin-tam.cyclic.app/cart/delete/${id}`,{
//       headers: {
//         Authorization: localStorage.getItem('token'),
//       }
//     })
//     return res.data;
// }
