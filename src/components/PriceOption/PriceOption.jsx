import PropTypes from "prop-types";
import Feature from "./Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-500 rounded-lg p-4 text-white text-center flex flex-col mt-6">
            <h2>
                <span className="text-5xl font-extrabold">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-4xl my-4">{name}</h4>
            <div className="pl-6 flex-grow">
                {features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)}
            </div>
            <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900 ">Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;