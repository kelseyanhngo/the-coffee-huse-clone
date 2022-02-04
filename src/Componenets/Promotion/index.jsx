import React from 'react';
import PromotionFeature from '../PromotionFeature';


function Promotion(props) {
    const data = [
        {
        id: 1,
        image: "https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg",
        title: "Same price at $10",
        name: "Caramel Ice Machiato (M)",
        date: "Exprires at 31/10/2021",
        status: "Can be used immediately",
   
    },
    {
       id: 2,
       image: "https://minio.thecoffeehouse.com/image/admin/storage/852__C4_90o_CC_82_CC_80ng-gia_CC_81-29K_coupon.jpg",
       title: "30% off (maximum $10) order from 2 dishes",
       name: "Ice Machiato(M)",
       date: "Expires at 31/10/2021",
       status: "Can be used immediately",
   
   },
   {
       id: 3,
       image: "https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg",
       title: "20% off any Pickup 2 items",
       name: "Ice Machiato (M)",
       date: "Expires at 31/10/2021",
       status: "Can be used immediately",
   
   },
   {
       id: 4,
       image: "https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg",
       title: "Same price at $11",
       name: "Milk Tea (L)",
       date: "Expires at 31/10/2021",
       status: "Can be used immediately",
   
   },
   {
       id: 5,
       image: "https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg",
       title: "30% off any Pickup 3 items",
       name: "Coffee (M)",
       date: "Expires at 31/10/2021",
       status: "Can be used immediately",
   
   },
   {
       id: 6,
       image: "https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg",
       title: "35% off any Pickup 2 items",
       name: "Ice Machiato (M)",
       date: "Expires at 31/10/2021",
       status: "Can be used immediately",
   
   },
   ]
    return (
        <div>
            <PromotionFeature items = {data}/>
        </div>
    );
}

export default Promotion;