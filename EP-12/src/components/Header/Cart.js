import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../CartSlice";
import {GREEN_STAR_LOGO} from '../../constants';

const CartComponent = () => {
    const dispatch = useDispatch();

    const {items, restaurant} = useSelector((store) => store.Cart);

    const handleCartClearAction = () => {
        if (confirm('Are you sure to clear cart')) {
            return dispatch(clearCart());
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <div className="flex justify-between gap-x-90">
                {!!items.length && <div className="text-3xl font-bold">Cart items - {restaurant?.resName}</div>}
                {!items.length && <div className="text-3xl font-bold">No Cart items</div>}

                {!!items.length && (
                    <button
                        type="button"
                        className="p-2 bg-orange-500 text-white rounded-lg"
                        onClick={() => handleCartClearAction()}
                    >
                        Clear Cart
                    </button>
                )}
            </div>
            {!!items.length && (
                <div className="w-7/12 mx-auto p-4 my-3 flex-row justify-between">
                    <ul>
                        {
                            items.map((item) => {
                                return (
                                    <li key={item.id}>
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
                                                <img
                                                    className="w-62 h-35"
                                                    src={item.photoLink}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )}

            {!items.length && (
                <div className="italic text-sm text-gray-500">
                    Cart is empty please add items to card
                </div>
            )}
        </div>
    )
};

export default CartComponent;
