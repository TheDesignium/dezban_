<template>
    <v-app>
        <main class="back flex">
            <header>
                <v-card
                class=""
                color="white"
                outlined
                max-width="max"
                >
                    <v-card-subtitle 
                        class="pb-0"
                    > 
                        <div
                            align="right"
                        >
                            <v-btn
                            icon
                            to="/details"
                            >
                                <v-icon color="grey" large>mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <div class="text-c font-weight-light">⛄除雪クラウド</div>
                    </v-card-subtitle>
                    <v-card-title>
                        <h3 font-family="sans-seif">
                            帳票のプレビュー高速化<v-chip class="ml-2">SP:89</v-chip>
                        </h3>
                    </v-card-title>
                    <v-card-text>
                        <div class="pb-1">納期: 2020/10/24</div>
                        <div class="hass pt-1">＃未経験可＃JavaScript#Vue.JS</div>
                    </v-card-text>
                </v-card>
            </header>
            <body>
                <h4 class="my-2 mx-2">スキル経験</h4>
                <v-card
                outlined
                max-width="max"
                >
                <v-card-title>
                    JavaScript
                </v-card-title>
                <v-slider
                :max="3"
                :tick-labels="labels"
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
                        Vue.js
                    </v-card-title>
                    <v-slider
                    :max="3"
                    :tick-labels="labels"
                    class="mx-4"
                    ticks
                    tick-size="6"
                    color="gray"
                    track-color="gray"
                    thumb-color="red"
                    >
                    </v-slider>
                </v-card>
                <center><v-btn color="grey" class="px-15 mt-2 white--text btnhover" to="/details">応募を確定</v-btn></center>
            </body> 
        </main>
    </v-app>
</template>

<script>
export default {
    data: () => (
        {
            labels: ['経験なし', '経験あり', 'LTできる', '教えられる'],
        }
    )
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
</style>
