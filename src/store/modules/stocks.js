import {getStocks} from '../../services/stocks';
// import stocks from '../../services/stocks';

const state = {
    stocks: []
};

const mutations = {
    'INIT_STOCKS': (state, stocks) => {
        state.stocks = stocks;
    }
};

const actions = {
    getStocks: ({commit}) => {
        getStocks()
        .then(data => { 
            if (data) {
                console.log('rrrrrrrr', data)
                commit('INIT_STOCKS', data.data.stocks);
            }
        })
        // commit('INIT_STOCKS', stocks);
    },
    buyStocks: ({commit}, order) => {
        // buyStocks(order)
        // .then(r => {
        //     commit('BUY_STOCKS', r);
        // })
        commit('BUY_STOCKS', order);
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}