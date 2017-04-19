<template>
    <div class="container">
        <div class="jumbotron">
            <h1>Please fill in .....</h1>
            <p>So we can help you with your progress!</p>
        </div>
        <input type="text" v-model="searchString" placeholder="Search for food" @keyup="fillArray"> 
        <ProductList :products="products"  :search="searchString" :active="active"></ProductList>      
        <button class="end-button" >See your added products</button>
    </div>
</template>

<script>
import ProductList from '@/components/home/ProductList'

export default {
    data () {
        return {
            active: false,
            searchString: '',
            products: [{
            }]
        }
    },
    components: {
        ProductList
    },
    methods: {
      fillArray () {
        this.addInput();
        this.$http.get(`https://api.nutritionix.com/v1_1/search/${this.searchString}?results=0%3A5&?fields=item_name%2Citem_id%2Cbrand_name&appId=e04cdea6&appKey=a9e5f13309aa5afb4086ab88774eab9f`)
        .then(response => {
          this.products = response.body.hits
        }, error => {
          console.log(error);
        });       
      },
      addInput () {
        if(this.searchString !== '') {
          this.active = true
        } else {
          this.active = false
        }
      }
    }
}

</script>

<style>
body {
  margin: 0;
  background: #f7f7f7!important;
}

.jumbotron {
  background-image: url('https://images.unsplash.com/photo-1489444444961-d0fda97f0986');
  background-size: cover;
  width: 100%;
  height: 250px;
  color: #FFF;
  text-align:left;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5B5B5D;
}
h1 {
  font-weight: bold;
  font-size: 25px;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  
}
li {
    display: inline-block;
    /* margin: 0 10px; */
    width: 85%;
    padding: 10px;
    background: #FFF;
    text-align: left;
    font-size: 14px;
    border-bottom: 1.8px solid #E2E2E2;
    padding-bottom: 16px;
    font-weight: bold;
}
a {
  color: #42b983;
}
.add-button {
  padding: 5px 30px 5px 30px;
    border: none;
    color: #FFF;
    background-color: #e2e2e2;
}
.end-button {
  position : absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  border: none;
  background-color: #00b52a;
  color: #FFF;
}
input {
  margin-top: 20px;
  margin-bottom: 20px;
  border:none;
  padding: 15px;
  font-size: 20px;
  color: #5b5b5d;
  box-shadow: -1px 4px 27px -5px rgba(0,0,0,0.1);
      position: relative;
    top: -46px;
  
}
::-webkit-input-placeholder {
    color:    #5b5b5d;
}
input:focus{
  outline: none;
}
</style>