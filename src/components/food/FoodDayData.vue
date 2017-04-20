<template>
    <div>
        <h1 class="title"><strong>Title</strong></h1>
        <h2 class="subtitle">Subtitle</h2>
        <p>Protein this day</p>
        <h2><strong>{{ totalProtein}}</strong></h2>
        <h4>Yesterday: 60</h4>
        <p>Good Job!</p>
        <CommitChart></CommitChart>
                <p>You saved 2 cows today and with that you have saved 20 liters of water with the meal you have ate today</p>

        
        <p>Recommend Recipes</p>
        <h4>39.7%</h4>

        <p>Meal Plan</p>
        <h4>39.7%</h4> 

    </div>
</template>

<script>
import CommitChart from '@/components/ActivityGraph/CommitChart'

    export default {
        data () {
            return {
            foodItems: [],
                totalIron: '56 g',
                totalProtein: '56 g'
            }
        },
        components: {
            CommitChart
        },
        created () {
            //this.fillArray();
        },
        methods: {
            fillArray () {
                let dataObj = JSON.parse(localStorage.getItem('itemsArray')),
                products = '',
                productId = '',
                dayPart = '',
                foodItems = []
                length = dataObj.length;


                for(let i = 0; i < dataObj.length; i++) {
                    products = dataObj[i].products[0];
                    dayPart = products.daypart;
                    productId = products.id;

                    console.log(dataObj[i].count)

                    this.$http.get(`https://api.nutritionix.com/v1/item/${productId}?appId=e04cdea6&appKey=a9e5f13309aa5afb4086ab88774eab9f`)
                    .then(response => {  
                        this.foodItems.push( { iron: response.body.nf_iron_dv  } );
                    }, error => {
                    console.log(error);
                    }); 
                }

            }
        }
    }

</script>


<style lang="css" scoped>

body{
    background: #FAFAFA
}

canvas {
    width: 200px!important;
    height: auto;
}
</style>