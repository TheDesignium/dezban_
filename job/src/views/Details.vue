<template>
    <v-app>
        <main class="back flex">
                <v-card
                class="pa-0"
                color="white"
                outlined
                max-width="max"
                >
                   <v-card-subtitle > 
                        <v-btn icon to="/"><v-icon color="red" large class="pl-0">mdi-chevron-left</v-icon></v-btn>
                        <div class="text-c font-weight-light pl-3 pb-2 pt-1">⛄除雪クラウド</div>
                    
                            <h2 class="pl-3 pb-1" font-family="sans-seif">
                                帳票のプレビュー高速化<v-chip class="ml-2">SP:89</v-chip>
                            </h2>
                    </v-card-subtitle>
                    <v-card-text>
                        <div class="pl-3 pb-1">納期: 2020/10/24</div>
                        <div class="hass pl-3 pb-3 pt-1">＃未経験可＃JavaScript#Vue.JS</div>
                    </v-card-text>
                </v-card>
                <br>
                <div class="font-G pl-3">プロジェクト背景</div>
                <v-card
                    class="pt-0"
                    color="white"
                    outlined
                    max-width="max"
                >
                   <v-card-text
                    class="black--text"
                   >
                       手入力や目視確認で行われている除雪の記録やレポートの業務を効率化することで,降雪地帯
                   の生活インフラ整備に従事する人たちの負担を軽減します。
                   </v-card-text>
                </v-card>
                 <br>
                <div class="font-G pl-3">要件</div>
                <v-card
                    class="pt-10pt-0"
                    color="white"
                    outlined
                    max-width="max"
                >
                    <v-card-text
                        class="black--text"
                    >
                        Vue.JSで実装されているコードをネイティブのJavascriptに置き換えてください。
                    </v-card-text>
                </v-card>
                <br>
                <br>
                <center><v-btn color="white"><v-icon>mdi-github</v-icon>GithubでIssuを確認</v-btn></center> 
                
                
        </main>
        <v-btn 
        class="center" 
        color="rgb(167, 48, 48)" 
        dark
        @click="dialog=true"
        to="/submit"
        >この案件に応募</v-btn>
        <v-dialog
            v-model="dialog"
            width="400px"
        >
        <v-card >
            <v-container> 
            <v-card-title>
                <v-row>
                    <v-col cols=12 lg=12 md=12 sm=12 align="center">
                        🙏
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols=12 lg=12 md=12 sm=12 align="center">
                         ありがとうございます。<br>
                         続けてスキルを登録・追加するとスキルに合った案件をお届けします。
                    </v-col>
                </v-row>
            </v-card-text>
            <v-btn width="49%" class="pl-1">今はしない</v-btn>   <v-btn width="49%" class="pr-1" color="red" dark>登録する</v-btn>
            </v-container>
        </v-card>
        </v-dialog>
    </v-app>
</template>
<script>
export default {
    data:function(){
        return{
        dialog:false
        }
    },
    methods:{
        
    }
  }
</script>
<style scoped>
    .back{
        background-color:rgb(238, 241, 243);
    }
    .text-c{
        color:rgb(206, 199, 199);
        font-family: sans-serif;
    }
    .hass{
        color: rgb(61, 61, 201);
    }
    .font-G{
        font-family:sans-serif;
    }
    .center{
        margin-right: auto;
        margin-left: auto;
        width: 100%;
        border-color: rgb(167, 48, 48);
        font-size: 110%;
    }
    .flex{
        flex-grow: 1;
    }
    .cen{
         margin-right: auto;
         margin-left: auto;
    }
</style>