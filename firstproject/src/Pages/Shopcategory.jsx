import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assetss/dropdown_icon.png'
import Items from '../Components/Items/Items'
import {Link} from 'react-router-dom'
 const Shopcategory = (props) => {
    const {all_product}=useContext(ShopContext);

  return (
    <div className='shop-category'>
        <img  className='shopcategory-banner' src={props.banner} alt=""/>
        < div className='shopcategory-indexSort'>
            <p>
                <span>Showing 1-12</span>out of 36 Products
            </p>
            < div className='shopcategory-sort'>
                Sort by <img src={dropdown_icon} alt=""/>
            </div>
        </div>
        < div className='shopcategory-products'>
            {all_product.map((item,i)=>{
                if (props.category===item.category){
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                }
                else{
                    return  null;
                }
            })}
          
        </div>
        <div className='shopcategory-loadmore'>
                    <Link to="/newcollection"><button className='ex'> Explore More</button></Link>
            </div>
    </div>
  )
}
export default Shopcategory