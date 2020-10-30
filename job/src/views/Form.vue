<template>
    <v-app>
        <main class="form">
        <header class="block">
            <div class="py-2 px-2" align="right">
                <v-btn v-if="login" icon color="grey" to="/account">
                    <v-icon
                        large
                    >
                        {{ icons.mdiAccountCircle }}
                    </v-icon>
                    </v-btn>
                    <div v-else>
                        <v-btn text color="red">
                            登録
                        </v-btn>
                        <v-btn text color="red">
                            ログイン
                        </v-btn>
                </div>
            </div>       
            <div align="center">
                <h2>デザイニウム インターンシップ<br>ジョブボード</h2>
            </div>
            <div align="center">
                <p>サービスの説明。オリエンをするかしないかによっ<br>て内容が変わる。無しなら図示もする。</p>
            </div>
            <v-container>
                <v-row
                    justify="center"
                    align-content="center"
                >
                    <v-col
                        cols=8
                    >
                        <v-text-field filled label="検索（スキルリスト表示）" color="grey" prepend-inner-icon="mdi-magnify" @click="dialog = true">
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols=1
                    >
                        <v-btn icon>
                            <v-icon
                                large
                            >
                                {{ icons.mdiFormatLineSpacing }}
                            </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-dialog
                v-model="dialog"
                width="400px"
            >
                <v-card>
                    <v-card-title>
                        <v-icon>{{ icons.mdiMagnify }}</v-icon>検索（スキルリスト表示）
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-btn class="my-2 mx-2">#未経験可</v-btn><v-btn class="my-2 mx-2">#JavaScript</v-btn>
                        <v-btn class="my-2 mx-2">#Go言語</v-btn><v-btn class="my-2 mx-2">#Python</v-btn><v-btn class="my-2 mx-2">#Vue.JS</v-btn>
                        <v-btn class="my-2 mx-2">#React</v-btn>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </header>
        <body class="my-8">
            <v-card tile>
                <v-list class="text-center" flat>
                    <v-list-item-group color="grey">
                    <v-list-item v-for="(item, i) in alwaystask" :key="i">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-text="item.tags"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-list-item-action-text v-text="item.deadline" class="black--text pr-2"></v-list-item-action-text>
                            <v-chip x-small>
                                {{ item.sp }}
                            </v-chip>
                        </v-list-item-action>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
                <v-list class="text-center" flat>
                    <v-list-item-group>
                        <v-divider></v-divider>
                    <v-list-item v-for="(item, i) in taskitems" :key="i" :to="item.pass" class="my-3">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title + item.text"></v-list-item-title>
                            <v-list-item-subtitle v-text="item.tags"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-list-item-action-text v-text="item.deadline" class="black--text pr-1"></v-list-item-action-text>
                            <v-chip x-small>
                                {{ item.sp }}
                            </v-chip>
                        </v-list-item-action>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </body>
        </main>
    </v-app>
</template>

<script>
  import {
    mdiAccountCircle,
    mdiFormatLineSpacing,
    mdiMagnify
  } from '@mdi/js'

  export default {
    data: () => ({
        dialog: false,
        login: true,
        icons: {
            mdiAccountCircle,
            mdiFormatLineSpacing,
            mdiMagnify
        },
        alwaystask:[
            { title: "🤝ペアプログラミング", deadline: "常時", tags: "スキル/希望に応じた案件を紹介します。", sp: "2/h"}
        ],
        taskitems: [
            { title: "⛄️[除雪]", text: "帳票のプレビュー高速化", deadline: "10/24", tags: "#JavaScipt #Vue.JS", sp: "89", pass: '/details'}
            ,{ title: "🗾[MaaS]", text: "位置情報の取得", deadline: "10/21", tags: "#JavaScipt #Vue.JS", sp: "13"}
            ,{ title: "⛄️[除雪]", text: "帳票のプレビュー高速化", deadline: "10/24", tags: "#JavaScipt #Vue.JS", sp: "89", pass: '/details'}
            ,{ title: "⛄️[除雪]", text: "帳票のプレビュー高速化", deadline: "10/24", tags: "#JavaScipt #Vue.JS", sp: "89", pass: '/details'}
            ,{ title: "⛄️[除雪]", text: "帳票のプレビュー高速化", deadline: "10/24", tags: "#JavaScipt #Vue.JS", sp: "89", pass: '/details'}
            ,{ title: "⛄️[除雪]", text: "帳票のプレビュー高速化", deadline: "10/24", tags: "#JavaScipt #Vue.JS", sp: "89", pass: '/details'}
            ,{ title: "⛄️[除雪]", text: "帳票のプレビュー高速化", deadline: "10/24", tags: "#JavaScipt #Vue.JS", sp: "89", pass: '/details'}
            ,{ title: "⛄️[除雪]", text: "帳票のプレビュー高速化", deadline: "10/24", tags: "#JavaScipt #Vue.JS", sp: "89", pass: '/details'}
            ,{ title: "⛄️[除雪]", text: "帳票のプレビュー高速化", deadline: "10/24", tags: "#JavaScipt #Vue.JS", sp: "89", pass: '/details'}
    ],
    }),
  }
</script>

<style scoped>
    .block{
        background-color: white;
    }
    .form{
        background-color: lightgray;
    }
</style>