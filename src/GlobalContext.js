import {useContext, createContext, useEffect, useState} from 'react';
import {db} from './firebase';

const GlobalContext = createContext(undefined);
const GlobalProvider =  ({children}) => {
    const [value,setValue]=useState({products: {}});
    console.log(value);
    // const [products,setProducts]=useState([]);

    // const getProducts = async ()=>{
    //     db.collection('records').onSnapshot((snapshot) => setProducts(
    //         snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data(),
    //         }))
    //     ))
    // }

    const getProducts = async ()=>{

        const products = await db.collection('records').get();
        const productsIndexedArray = {};
        
        for (var snap of products.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsIndexedArray[data.ID] = data;
            // productsArray.push({
            //     ...data
            // })
            //if(productsArray.length === products.docs.length){
                setValue({...value,products: productsIndexedArray});
            //}
        }
    }

    // const removeProduct = async (ID) => {
       
    //     try {
    //       var currentRecord = db.collection("records").doc(ID);
    //       currentRecord.delete();
    //   } catch(err) {
    //     return alert(err.message);
    //   }
    // }

    useEffect(() => {
        getProducts();
    }, [])

    return <GlobalContext.Provider value={value}>
        {
            children
        }
    </GlobalContext.Provider>
}

const useGlobalProvider = () => {
    const context = useContext(GlobalContext);
    if(context==undefined){
        throw new Error('useContext is not inside globalConext');
    }
    return context;
}

export {useGlobalProvider, GlobalProvider};