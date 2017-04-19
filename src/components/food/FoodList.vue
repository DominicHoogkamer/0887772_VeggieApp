<template>
<div>
    <div class="container">
        <ul class="dailey-food-list">
            <li v-for="foodItem in foodItems">
                <p>{{ foodItem.daypart}}</p>
                <h3> {{ foodItem.name }}</h3>
                <router-link to="/products/product/513fceb675b8dbbc21001eaf">Link</router-link>
            </li>
            <router-link to="/products/info">See Dailey Information</router-link>
        </ul>

        <h3>Yesterday: {{this.yesterday}}</h3>

        <ul class="dailey-food-list">
            <li v-for="staticData in staticDatas">
            <h3> 1 {{ staticData.name }}</h3>
            <p>{{ staticData.iron }}</p>
            </li>
        </ul>
    </div>

</div>
</template>


<script>
    import moment from 'moment';

    export default {
        data () {
            return {
                staticDatas: [
                    {name: 'apple', iron: '4'},
                    {name: 'apple', iron: '4'},
                    {name: 'apple', iron: '4'},
                    {name: 'apple', iron: '4'},
                ],
                foodItems: [],
                foodArray:[],
                yesterday : moment().add(-1, 'days').format("DD-MM-YYYY"),
            }
        },
        created () {
            this.fillArray();
        },
        methods: {
            fillArray () {
                let dataObj = JSON.parse(localStorage.getItem('itemsArray')),
                products = '',
                productId = '',
                dayPart = ''

                this.foodArray.push(dataObj);


                for(let i = 0; i < dataObj.length; i++) {
                    products = dataObj[i].products[0];
                    dayPart = products.daypart;
                    productId = products.id;

                    this.$http.get(`https://api.nutritionix.com/v1/item/${productId}?appId=66d550ab&appKey=8f367946eb8f7f451a2b4e52df031158`)
                    .then(response => {
                        
                        let productObject = {
                            index: i,
                            daypart: dayPart,
                            name: response.body.item_name,
                            iron: response.body.nf_iron_dv,
                        }
                        this.foodItems.push(productObject)
                    }, error => {
                    console.log(error);
                    }); 

                }
            }
        }
    }
</script>

<style>
body {
    background: #fff;
}

.container {

}

.dailey-food-list {
    padding: 10px;
    background: #FFF;
    box-shadow: -1px 3px 14px 1px rgba(141,191,224,0.2);
    color: #7D808B;
}

.dailey-food-list h3 {
    color: #4BB5FF;
}

</style>