<template>
<v-app>
 <main class="back flex"> 
        <v-app-bar 
        app 
        color="white"
        >
          <v-icon color="red" class="cc" large>mdi-account-circle</v-icon>
        </v-app-bar>
        <br>
        <v-content>
          <v-card
            class="pa-0"
            outlined
            max-width="max"
          >
          <v-card-title>
              <h5 v-text="name" class="pl-0"></h5>  
          </v-card-title>
          <v-card-subtitle>   
              <h3 v-text="mail"></h3>
          </v-card-subtitle>
          </v-card>
          <br>
          <v-card
            outlined
            max-width="max"
            >
            <v-card-title 
            class="font-weight-middlepl-2"
            >
            <h5>SP残高</h5>
            <pre>   </pre>
            <h6> 次回支払予定日 2021/02/10</h6>
            <div class="aa"><v-chip color="lightgray" class="back">210</v-chip></div>
            <v-icon large>mdi-chevron-right</v-icon>
            </v-card-title>
          </v-card>
          <br>
          <h6 class="pl-2">スキル経験</h6>
         <v-text-field
          prepend-inner-icon="mdi-magnify"
          class="mx-2"
          placeholder="検索（スキルリスト）"
          filled
          color="gray"
          background-color="white"
        ></v-text-field>
        <v-card
          outlined
          max-width="max"
            >
            <v-card-title>
            <h4>JavaScript</h4>
            <div class="aa">
            <v-btn
            icon
            ><v-icon>mdi-close-circle</v-icon>
            </v-btn>
            </div>
            </v-card-title>
            <v-slider
              v-bind:max="3"
              v-bind:tick-labels="labels"
              class="mx-4"
              ticks
              tick-size="6"
              color="gray"
              track-color="gray"
              thumb-color="red"
            >
            </v-slider>
        </v-card>
        <br>
        <v-card
          outlined
          max-width="max"
        >
         <v-card-title>
            <h4>Vue.js</h4>
            <div class="aa">
            <v-btn
            icon
            ><v-icon>mdi-close-circle</v-icon>
            </v-btn>
            </div>
            </v-card-title>
            <v-slider
              v-bind:max="3"
              v-bind:tick-labels="labels"
              class="mx-4"
              ticks
              tick-size="6"
              color="gray"
              track-color="gray"
              thumb-color="red"
            >
            </v-slider>
        </v-card>
        <br>
        </v-content> 
 </main>
  </v-app>
</template>

<script>
export default {
data:function(){
  return{
    name:'会津太郎',
    mail:'taro@u-aizu.ac.jp',
    labels: ['経験なし', '経験あり', 'LTできる', '教えられる'],
  }
}
};
</script>
<style scoped>
 .back-w{
   background-color: white;
 }
 .back{
   background-color:rgb(238, 241, 243);
 }
 .cc { 
   margin-right: auto;
   margin-left: auto;
 }
 .aa{
   margin-left: auto;
 }
 .flex{
        flex-grow: 1;
    }
</style>
