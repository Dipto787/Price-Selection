import Priceoption from "./Priceoption";

 const PriceSelect = () => {
    const priceOptions=[
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "1 group fitness class per week",
            "Open gym access during business hours"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 45,
          "currency": "USD",
          "features": [
            "Unlimited access to gym equipment",
            "Locker facilities",
            "5 group fitness classes per week",
            "Open gym access 24/7",
            "Access to sauna and steam room"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 75,
          "currency": "USD",
          "features": [
            "Unlimited access to gym equipment",
            "Personal locker",
            "Unlimited group fitness classes",
            "Open gym access 24/7",
            "Access to sauna, steam room, and pool",
            "1 personal training session per month"
          ]
        },
   
      ];
      
    return (
        <div className="m-12">
            <h1 className="text-5xl font-bold text-white">Best Price Of The Town</h1>
          <div className="grid md:grid-cols-3 gap-5">
          {
             priceOptions.map(prices=><Priceoption prices={prices}></Priceoption>)
           } 
          </div>
        </div>
    );
};

export default PriceSelect;