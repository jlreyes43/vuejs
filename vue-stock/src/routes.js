import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
import StocksStock from './components/stocks/Stock.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import PortfolioStock from './components/portfolio/Stock.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/stocks', component: Stocks, children: [
        {path: '/stock', component: StocksStock}
    ] },
    {path: '/portfolio', component: Portfolio, children: [
        {path: '/stock', component: PortfolioStock}
    ] }
];
