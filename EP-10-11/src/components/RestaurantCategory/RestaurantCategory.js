import {GREEN_STAR_LOGO} from '../../constants.js';

const RestaurantCategoryComponent = ({category, colapse, setColapse}) => {
    return (
        <div className="w-full">
            <div
                className="w-7/12 mx-auto bg-gray-100 shadow-lg p-4 my-3 flex justify-between"
                onClick={() => {setColapse()}}
            >
                <span className="font-bold text-lg">{category.type} ({category.cards.length})</span>
                {colapse ? <span>⌵</span> : <span>⌃</span>}
            </div>
            {
                colapse
                && (
                    <div className="w-7/12 mx-auto p-4 my-3 flex-row justify-between">
                        {category.cards.map((item) => {
                            return (
                                <div className="flex justify-between border-b-1 border-solid mt-4 border-gray-200 h-50 p-2" key={item.id}>
                                    <div className="">
                                        <div className="font-semibold text-gray-700">{item.name}</div>
                                        <div className="text-sm">₹ {item.price}</div>
                                        {item.rating && (
                                            <div className="flex items-center pt-2">
                                                <img className="w-4 h-4" src={GREEN_STAR_LOGO} />
                                                <span className="text-sm text-green-600">{item.rating}</span>
                                            </div>
                                        )}
                                        <div className="pt-4 pr-8 text-gray-500 text-xs">{item.description}</div>
                                    </div>
                                    <div className="">
                                        <div className="absolute">
                                            <button
                                                className="bg-white pl-5 pr-5 pt-1 pb-1 mx-18 my-30 border-2 border-gray-300 rounded-lg"
                                                type="button"
                                            >
                                                <span className="text-sm text-green-600">Add</span>
                                            </button>
                                        </div>
                                        <img
                                            className="w-62 h-35"
                                            src={item.photoLink}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            }
        </div>
    )
};

export default RestaurantCategoryComponent;
