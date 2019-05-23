<template>
    <div class='more-list'>
        <div class="wrapper">
            <h3>{{ this.$route.params.title }}</h3>
            <VuePullRefre  :on-refresh='onRefresh'>
                <router-link :to='{name:"MusicPlay",params:{songid:item.song_id}}' class="info url log" v-for="(item,index) in moreListData" :key="index">
                    <div class="poster">
                        <img :src="item.pic_big" :alt="item.title">
                    </div>
                    <div class="text-wrap">
                        <div class="title">{{ item.title }}</div>
                        <div class="author">{{ item.artist_name }}</div>
                    </div>
                </router-link>
            </VuePullRefre>
        </div>
    </div>
</template>

<script>
import VuePullRefre from 'vue-pull-refresh'

export default {
    name:'',
    data () {
        return {
            moreListData:[],
            offset:12,
            billboard:0
        }
    },
    components:{
        VuePullRefre
    },
    mounted(){
        const moreListUrl = this.HOST + '/v1/restserver/ting?method=baidu.ting.billboard.billList&type='+this.$route.params.type+'&size=12&offset=0'
        this.$axios.get(moreListUrl)
            .then(res => {
                console.log(res.data.billboard.billboard_songnum)
                this.moreListData = res.data.song_list
                this.billboard = res.data.billboard.billboard_songnum
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods:{
        //下拉的时候触发
        onRefresh:function(){
            var that = this;
            const moreListUrl = this.HOST + '/v1/restserver/ting?method=baidu.ting.billboard.billList&type='+this.$route.params.type+'&size=12&offset=' + this.offset
            return new Promise(function(resolve,reject){
                setTimeout(() => {
                    that.$axios.get(moreListUrl)
                        .then(res => {
                            that.offset >= that.billboard -12  ?that.offset = 0 : that.offset += 12
                            console.log(that.offset)
                            console.log(that.billboard)                            
                            that.moreListData = res.data.song_list
                            // that.moreListData = that.moreListData.concat(res.data.song_list)   //迭代添加
                            resolve();
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
            })
        }

    }
}
</script>

<style scoped>
    .wrapper{
        padding-top: 13px;
        text-align: center;
        margin-bottom: 10px;
        background-color: #fff;
        clear: both;
        overflow: hidden;
    }

    h3{
        font-size: 22px;
        text-align: left;
        margin-left:17px;
        margin-bottom: 5px;
    }

    .wrapper .info{
        width: 42%;
        float:left;
        text-align: center;
        padding-left: 17px;
        display: block;
        text-align: left;
        margin-bottom: 10px;
        position: relative;
    }
    .title,.author{
        height: 21px;
        overflow: hidden;
    }
</style>