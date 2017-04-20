<template>
<div>
    <div class="container">
            <h3 class="date"><strong>Today: {{this.today}}</strong></h3>
        <router-link to="/products/info" tag="a" class="button is-success btn-info">See Dailey Information<i  style="padding-left: 10px"class="fa fa fa-arrow-right fa-lg"></i></router-link>
        <ul class="card-container">
            <li v-for="foodItem in foodItems" class="card">
                <div class="card-content">
                    <p><strong>{{ foodItem.daypart}}</strong></p>
                    <h3> {{ foodItem.name }}</h3>
                    <br>
                    <p><strong>Iron</strong>: {{foodItem.iron}} g</p>
                    <p><strong>Protein</strong>: {{foodItem.protein}} g</p>
                    <router-link :to="'/products/product/' + foodItem.id"><a class="button is-success">See Info</a></router-link>
                </div>
            </li>
        </ul>

        <h3 class="date"><strong>Yesterday: {{this.yesterday}}</strong></h3>
                <router-link to="/products/info" tag="a" class="button is-success">See Dailey Information<i  style="padding-left: 10px"class="fa fa fa-arrow-right fa-lg"></i></router-link>
        <ul class="card-container">
            <li v-for="staticData in staticDatas"  class="card">
            <div class="card-content">
                <p> <strong>{{ staticData.daypart }}</strong> </p>
                <p>{{ staticData.name }}</p>
            </div>
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
                    {daypart: 'Breakfest', name: 'Egg, whole, raw, fresh - 1 cup (4.86 large eggs)'},
                    {daypart: 'lunch', name: 'Spinach Feta and Tomato Omelet - 1 cup'},
                    {daypart: 'Snacks', name: 'Snicker 1 bar'},
                    {daypart: 'Dinner', name: 'Tomato salad'},
                    {daypart: 'Dinner', name: 'Veggie Burger'},
                ],
                foodItems: [],
                foodArray:[],
                yesterday : moment().add(-1, 'days').format("DD-MM-YYYY"),
                today: moment().format("DD-MM-YYYY")
            }
        },
        created () {
            this.fillArray();
        },
        methods: {
            fillArray () {
                localStorage.removeItem('nutsArray');
                let dataObj = JSON.parse(localStorage.getItem('itemsArray')),
                products = '',
                productId = '',
                dayPart = ''

                let newItem = {}

                let oldItems = JSON.parse(localStorage.getItem('nutsArray')) || [];

                this.foodArray.push(dataObj);


                for(let i = 0; i < dataObj.length; i++) {
                    products = dataObj[i].products[0];
                    dayPart = products.daypart;
                    productId = products.id;

                    this.$http.get(`https://api.nutritionix.com/v1/item/${productId}?appId=a47256fa&appKey=ad60d4a30bd7aac0ff4b0a32f349c93a`)
                    .then(response => {
                        
                        let productObject = {
                                daypart: dayPart,
                                id: productId,
                                name: response.body.item_name,
                                iron: response.body.nf_iron_dv,
                                protein: response.body.nf_protein
                        }
                        oldItems.push(productObject);

                        localStorage.setItem('nutsArray', JSON.stringify(oldItems));
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

.btn-info {
    
}

.date{
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: left;
    padding-left: 20px;
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