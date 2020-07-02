<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light border border-dark rounded">
		<router-link class="navbar-brand" to="/">Stock Trader</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link to="/portfolio" tag="li"  class="nav-item" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
				<router-link to="/stocks" tag="li"  class="nav-item" activeClass="active"><a class="nav-link">Stocks</a></router-link>
			</ul>
			<ul class="navbar-nav nav-right">
				<li class="nav-item"><a class="nav-link" href="#" @click="randomizeStocks">End Day</a></li>
				<li class="nav-item dropdown" @click="isDropdownOpen = !isDropdownOpen" >
					<a 
						class="nav-link dropdown-toggle" 
						href="#" id="navbarDropdown" 
						role="button" 
						data-toggle="dropdown" 
						aria-haspopup="true" aria-expanded="false">Save & Load</a>
					<div class="dropdown-menu" :class="{show: isDropdownOpen}" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#" @click="saveData">Save Data</a>
						<a class="dropdown-item" href="#" @click="loadData">Load Data</a>
					</div>
				</li>
			</ul>
			<strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
		</div>
	</nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
	data(){
		return{
			isDropdownOpen: false 
		}
	},
	computed: {
		funds(){
			return this.$store.getters.funds;
		}
	},
	methods:{
		...mapActions([
			'randomizeStocks'
		]),
		endDay(){
			this.randomizeStocks();
		},
		saveData(){
			const data = {
				funds: this.$store.getters.funds,
				stockPortfolio: this.$store.getters.stockPortfolio,
				stocks:this.$store.getters.stocks
			};
			this.$http.put('data.json', data);
		},
		loadData(){
			
		}
	}
}
</script>

<style scoped>
    nav{
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>>
    