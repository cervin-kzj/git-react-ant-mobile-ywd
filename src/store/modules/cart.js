/**
 * initState
 */
const initState = {
    cart: [
        {
            user_phone: "15168828761",
            goods_id: "00002",
            goods_name: "圣罗兰/YSL 指甲油50ml",
            goods_thumb: "http://47.106.12.223:8569/static/img/01.png",
            goods_attr: ["2L", '3岁以下'],
            original_price: 100,
            reduct_price: 69,
            goods_number: 2,
            goods_total: 254,
            shop_id: 99,
            shop_name: "杭州保税区",
            add_time: "1546515637000",
            is_check: true,
            cost_price: 138
        },
        {
            user_phone: "15168828761",// 用户名
            goods_id: "00001",// 商品编号
            goods_name: "美国/SUPER MILD沐浴露500ml",// 商品名称
            goods_thumb: "http://47.106.12.223:8569/static/img/01.png",// 商品缩略图
            goods_attr: ["1L", '5岁以下'],// 商品属性
            original_price: 96,// 原始价格
            reduct_price: 88,// 优惠价格
            goods_number: 1,// 购买数量
            goods_total: 254,// 商品库存
            shop_id: 98,// 店铺编号(写死)
            shop_name: "济南保税区",// 店铺名称(写死)
            add_time: "1546515637000",// 添加时间
            is_check: true,// 是否选中
            cost_price: 88// 购买数量*优惠价格
        },
        {
            user_phone: "15168828761",
            goods_id: "00003",
            goods_name: "圣罗兰/YSL 指甲油20ml",
            goods_thumb: "http://47.106.12.223:8569/static/img/01.png",
            goods_attr: ["2L", '3岁以下'],
            original_price: 100,
            reduct_price: 69,
            goods_number: 1,
            goods_total: 254,
            shop_id: 99,
            shop_name: "杭州保税区",
            add_time: "1546515637000",
            is_check: false,
            cost_price: 69
        }
    ]
}

/**
 * action creater
 */
export const addCartInfoAction = (cartInfo) => {
    return {
        type: "addCartInfoAction",
        cartInfo: cartInfo
    }
}
export const editIsCheckCartInfoAction = (goodsId) => {
    return {
        type: "editIsCheckCartInfoAction",
        goodsId: goodsId
    }
}
export const editIsCheckAllCartInfoAction = (bool) => {
    return {
        type: "editIsCheckAllCartInfoAction",
        is_check: bool
    }
}
export const deleteCartInfoAction = (goodsId) => {
    return {
        type: "deleteCartInfoAction",
        goodsId: goodsId
    }
}
export const editCartGoodsNumberInfoAction = (goods_id, goods_number, changeType) => {
    return {
        type: "editCartGoodsNumberInfoAction",
        goodsId: goods_id,
        goodsNumber: goods_number,
        changeType: changeType
    }
}
export const checkOutInfoAction = (goodsIds) => {
    return {
        type: "checkOutInfoAction",
        goodsIds,
    }
}
/**
 * reducer
 * @param {*} state 
 * @param {*} action 
 */
export const reducerCartAction = (state = initState, action) => {
    switch (action.type) {
        case "addCartInfoAction":
            let add = Object.assign({}, state, state.cart.push(action.cartInfo));
            return add;
            break;
        case "editIsCheckCartInfoAction":
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].goods_id == action.goodsId) {
                    state.cart[i].is_check = !state.cart[i].is_check;
                }
            }
            return Object.assign({}, state);
            break;
        case "editIsCheckAllCartInfoAction":
            for (let i = 0; i < state.cart.length; i++) {
                state.cart[i].is_check = !action.is_check;
            }
            return Object.assign({}, state);
            break;
        case "deleteCartInfoAction":
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].goods_id == action.goodsId) {
                    state.cart.splice(i, 1)
                }
            }
            return Object.assign({}, state);
            break;
        case "editCartGoodsNumberInfoAction":
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].goods_id == action.goodsId && state.cart[i].is_check) {
                    if (action.changeType == "minus") {
                        state.cart[i].goods_total += action.goodsNumber
                    }
                    else if (action.changeType == "plus") {
                        state.cart[i].goods_total -= action.goodsNumber
                    }
                    state.cart[i].goods_number = action.goodsNumber
                    state.cart[i].cost_price = state.cart[i].goods_number * state.cart[i].reduct_price
                }
            }
            return Object.assign({}, state);
            break;
        case "checkOutInfoAction":
            for (let i = 0; i < state.cart.length; i++) {
                for (let j = 0; j < action.goodsIds.length; j++)
                    if (state.cart[i].goods_id == action.goodsIds[j]) {
                        state.cart.splice(i, 1)
                    }
            }
            return Object.assign({}, state);
            break;
        default:
            return state;
            break;
    }
}

/**
 * getCartInfo
 * @param {*} state 
 */
export const getCartInfo = (state) => {
    return state.cart.cart
}