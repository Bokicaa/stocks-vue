import {getStocks, saveData} from '../../services/stocks';

const state = {
    funds: 10000,
    stocks: [],
    existingPortfolio: []
};

const mutations = {
    'BUY_STOCKS': (state, {stockId, quantity}) => {
        const record = state.stocks.find(el => el.id == stockId);
        if(record) {
            record.quantity += quantity;
        }
        else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
    },
    'SELL_STOCKS': (state, {stockId, quantity}) => {
        const record = state.stocks.find(el => el.id == stockId);
        if(record.quantity > quantity) {
            record.quantity -= quantity
        }
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
    },
    'LOAD_PORTFOLIO': (state, portfolio) => {
        state.existingPortfolio = portfolio;
        console.log('portfolio', state.existingPortfolio)
    },
    'SAVE_DATA': (state, data) => {
        state.stocks.push({data});
    }
};

const actions  = {
    // sellStocks: ({commit}, order) => {
    //     stocks.sellStocks(order)
    //     .then(r => {
    //         commit('SELL_STOCKS', r);
    //     })
    // }
    loadPortfolio: ({commit}) => {
        getStocks()
        .then(r => {
            console.log('Portfolio', r.data.stockPortfolio)
            commit('LOAD_PORTFOLIO', r.data.stockPortfolio);
        })
    },

    saveData: ({commit}, data) => {
        saveData(data)
        .then(r => {
            commit('SAVE_DATA', r);
        })
    }
};

const getters = {
    stockPortfolio: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => stock.id == el.id);
            return state.existingPortfolio.push(
                {
                    id: stock.id,
                    quantity: stock.quantity,
                    company: record.company,
                    price: record.price
                }
            )
        });

    },
    funds: (state) => {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}