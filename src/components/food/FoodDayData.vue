<template>
    <div>

    <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Your Progress on:
      </h1>
      <h2 class="subtitle">
        {{today}}
      </h2>
    </div>
  </div>
</section>
    <div class="daileynut">
        <p>PROTEIN THIS DAY</p>
        <h2 style="font-size: 40px;"><strong>{{ Math.round(totalProtein)}}</strong></h2>
        <h4>Yesterday: <strong>60</strong></h4>
            <p>Average: <strong>70</strong></p>
    </div>
    <a class="button is-primary">Keep it up!<i style="padding-left: 10px" class="fa fa fa-check fa-lg"></i></a>
        <div class="chart">
            <CommitChart :width="250" :height="250"></CommitChart>
            <p class="chart-info">20</p>
        </div>
    <div class="daileynut">
    <p>IRON THIS DAY</p>
    <h2 style="font-size: 40px;"><strong>{{ Math.round(totalIron)}}</strong></h2>
    <h4>Yesterday: <strong>70</strong></h4>
    <p>Average: <strong>56</strong></p>
</div>
<a class="button is-danger">This needs better!<i style="padding-left: 10px" class="fa fa fa-times fa-lg"></i></a>

<div class="card-container">
<div class="card">
  <div class="card-content">
    <div class="content">
      You saved 2 cows today and with that you have saved 20 liters of water with the meal you have ate today
      <a>@safethecows!</a>. <a>#veggie</a> <a>#hro</a>
      <br>
    </div>
  </div>
  <footer class="card-footer">
    <a class="card-footer-item">Share</a>
    <a class="card-footer-item">Save</a>
    <a class="card-footer-item">Delete</a>
  </footer>
</div>


        <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Recommend Recipe</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@recipefinder</a>.
      <a>#spinach</a> <a>#meal</a>
      <br>
    </div>
  </div>
</div>
</div>

    </div>
</template>

<script>
    import moment from 'moment';

import CommitChart from '@/components/ActivityGraph/CommitChart'

    export default {
        data () {
            return {
                totalIron: 0,
                totalProtein: 0,
                today: moment().format("DD-MM-YYYY")
            }
        },
        components: {
            CommitChart
        },
        created () {
            for(let i = 0; i < JSON.parse(localStorage.getItem('nutsArray')).length; i++) {
              this.totalIron += JSON.parse(localStorage.getItem('nutsArray'))[i].iron;
              this.totalProtein += JSON.parse(localStorage.getItem('nutsArray'))[i].protein;
            }
        },
        methods: {

        }
    }

</script>


<style lang="css" scoped>


.card {
    margin-bottom: 10px;
    margin-top: 20px;
}

body{
    background: #FAFAFA
}

.chart{
    position:relative;
    display: flex;
    justify-content: center;
    margin: 20px 0 20px 0;
}

.chart-info{
    position: absolute;
    top: 38%;
    font-size: 36px;
    font-weight: bold;
}

.daileynut{
    margin: 30px;
}
</style>