import Fetaure from "./Fetaure";
const Priceoption = ({prices}) => {
    const {price,name,features}=prices;
    return (
        <div className="bg-blue-500 p-4 mt-4 flex flex-col rounded-md text-white">
            <h2 className="text-center " >
                
                <span className="text-7xl font-extrabold">
                  {price}
                </span>
                /con
            </h2>
            <h4 className="text-4xl flex-grow text-center">{name}</h4>
            {
                features.map(feature=><Fetaure features={feature}></Fetaure>)
            }

            <button className="mt-12  bg-green-500 w-full py-3 rounded-lg font-bold hover:bg-green-900">Bye Now</button>
        </div>
    );
};

export default Priceoption;