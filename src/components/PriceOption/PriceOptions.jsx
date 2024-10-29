import PriceOption from "./PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 25,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 45,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group fitness classes",
                "Free Wi-Fi",
                "Discount on personal training"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 70,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group fitness",
                "Free Wi-Fi",
                "Personalized fitness plan",
                "Sauna and steam room "
            ]
        },
        {
            "id": 4,
            "name": "VIP Plan",
            "price": 100,
            "features": [
                "Access to all gym equipment",
                "Private locker",
                "Unlimited group and training ",
                "Priority booking for classes",
                "Sauna or steam room access",
                "Complimentary assessment",
                "Monthly health checkups"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }

            </div>
            
        </div>
    );
};

export default PriceOptions;