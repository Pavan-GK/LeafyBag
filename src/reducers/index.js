import {
  AddProdToCart,
  SET_ORIGDATA,
  REMOVEFROMCART,
  USERCRED,
  SEARCH,
  UPDATESIGNUP,
} from "../actionTypes";

const initialState = {
  cartProducts: [],
  originaldata: [],
  Products: [],
  userDetails: [
    { Name: "Pavan", Password: 111, LastName: "", Email: "" },
    {
      Name: "Pavithra",
      Password: 121,
      LastName: "",
      Email: "",
    },
  ],
  creadentials: { name: null, loggedin: null },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AddProdToCart:
      const item1 = payload;
      let updateAddCart = [];
      var boolean1 = true;
      // let updateproducts1 = "";

      // {
      //   state.cartProducts.length &&
      //     state.cartProducts.forEach((product) => {
      //       if (product.id === item.id) {
      //         product.quantity = product.quantity + 1;
      //         boolean1 = false;
      //       }
      //     });
      // }

      // if (boolean1) {
      //   item.quantity = 1;
      //   updateproducts1 = [...state.cartProducts, item];
      // }

      {
        state.cartProducts?.forEach((item) => {
          if (item.id === item1.id) {
            {
              boolean1 = false;
              item.quantity += 1;
            }
            updateAddCart.push(item);
          } else {
            updateAddCart.push(item);
          }
        });
      }

      if (boolean1) {
        item1.quantity = 1;
        updateAddCart.push(item1);
      }

      return {
        ...state,
        cartProducts: [...updateAddCart],
      };

    case SET_ORIGDATA:
      return {
        ...state,
        originaldata: [...payload],
        Products: [...payload],
      };

    case REMOVEFROMCART:
      const removeitem = payload;
      let updatedcart = [];

      {
        state.cartProducts?.forEach((item) => {
          if (removeitem.id === item.id) {
            if (item.quantity > 1) {
              item.quantity = item.quantity - 1;
              updatedcart.push(item);
            } else {
              item.quantity = 0;
            }
          } else {
            updatedcart.push(item);
          }
        });
      }

      return {
        ...state,
        cartProducts: [...updatedcart],
      };

    case USERCRED:
      return {
        ...state,
        creadentials: { ...payload },
      };

    case SEARCH:
      const searchvalue = payload;
      let updateProd;
      {
        console.log("Searchvalue", searchvalue);
        searchvalue
          ? (updateProd = state.Products.filter(({ name }) =>
              name.toLowerCase().includes(searchvalue.toLowerCase())
            ))
          : (updateProd = state.originaldata);

        console.log("updateProd", updateProd);
      }

      return {
        ...state,
        Products: [...updateProd],
      };

    case UPDATESIGNUP:
      debugger;
      return {
        ...state,
        userDetails: [...state.userDetails, payload],
      };
    default:
      return state;
  }
};
