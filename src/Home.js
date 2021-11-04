import './Home.css'
import banner from './assets/banner1.jpg';
import {Products} from './Products';
import am from './assets/am.jpg';
import logo from './assets/vinyl.png';
import {db} from './firebase';
import { useGlobalProvider } from './GlobalContext';
import {Product} from './Product';

import React, { useState, useEffect } from 'react';

function Home() {

    const {products: indexedProducts} = useGlobalProvider();
    const products=Object.values(indexedProducts);

    // const [products,setProducts]=useState([]);

    // const getProducts = async ()=>{
    //     db.collection('records').onSnapshot((snapshot) => setProducts(
    //         snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data(),
    //         }))
    //     ))
    //     console.log(products);
    // }

    // useEffect(() => {
    //     getProducts();
    // }, [])

    //  // state of products
    //  const [products, setProducts]=useState([]);

    //  // getting products function
    //  const getProducts = async ()=>{
    //      const products = await db.collection('records').get();
    //      const productsArray = [];
    //      for (var snap of products.docs){
    //          var data = snap.data();
    //          data.ID = snap.id;
    //          productsArray.push({
    //              ...data
    //          })
    //          if(productsArray.length === products.docs.length){
    //              setProducts(productsArray);
    //          }
    //      }
    //  }

     


    // Array<Product> records;
    //    records=[];
//   const [records, setRecords] = useState(<Product>[]);
// //    Array<Product> records;
// //    records=[];
//     useEffect((records) => {
//         var query = db.collection('records');
//         query.get().then(function (querySnapshot) {
//           querySnapshot.forEach(function (doc) {
//               setRecords(...records,doc.data());
//               //records.push(doc.data());
//               //records.push()
//           });
//         });
//         console.log(records);
//         return records;
        
//     },[records]);

    // useEffect(()=>{
    //     getProducts();
    // },[])

    return (
        <div className="home">
            <div className="home_container">
                <img className='home_image' src={banner} alt="Banner" />

                {products.length > 0 && (
                <div className='container-fluid'>
                    <div className='products-box'>
                         <Products products={products}/> 
                        {/* {products.map((product)=>(
        <Product key = {product.id} product={product} />))}; */}
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className='container-fluid'>Please wait....</div>
            )}
            
            {/* <div className="home_row">
                <Product 
            artist="Arctic Monkeys"
            album="AM"
            //title="Arctic Monkeys-AM"
            price={11.96}
            //rating={5}
            image={am}/>
            <Product 
            artist="Arctic Monkeys"
            album="AM"
            //title="Arctic Monkeys-AM"
            price={11.96}
            //rating={5}
            image={am}/>
            <Product 
            artist="Arctic Monkeys"
            album="AM"
            //title="Arctic Monkeys-AM"
            price={11.96}
            //rating={5}
            image={am}/>
            <Product 
            artist="Arctic Monkeys"
            album="AM"
            //title="Arctic Monkeys-AM"
            price={11.96}
            //rating={5}
            image={am}/>
                
            </div>
            <div className="home_row">
            <Product 
            artist="Arctic Monkeys"
            album="AM"
            //title="Arctic Monkeys-AM"
            price={11.96}
            //rating={5}
            image={am}/>
               <Product 
            artist="Arctic Monkeys"
            album="AM"
            //title="Arctic Monkeys-AM"
            price={11.96}
            //rating={5}
            image={am}/>
            <Product 
            artist="Arctic Monkeys"
            album="AM"
            //title="Arctic Monkeys-AM"
            price={11.96}
            //rating={5}
            image={am}/>
            <Product 
            artist="Arctic Monkeys"
            album="AM"
            //title="Arctic Monkeys-AM"
            price={11.96}
            //rating={5}
            image={am}/>
            </div>
            <div className="home_row">
                {/* Product */}
                {/* Product */}
            {/* </div> */} 
            </div>
        </div>
    )
}

export default Home