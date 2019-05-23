<template>
    <div class='home'>
        <TodayRecommend title='今日榜单' musictype='1'/>
        <NewsMusic />
        <SwiperBanner />
        <MusicListNav />
        <keep-alive>
            <router-view />
        </keep-alive>
        <TodayRecommend title='热门歌单' musictype='24'/>
        
    </div>
</template>

<script>
import TodayRecommend from '../components/Today_Recommend'
import NewsMusic from '../components/News_Music'
import SwiperBanner from '../components/Swiper_Banner'
import MusicListNav from './musiclist/music_listnav'

export default {
    name:'home',
    data () {
        return {
            
        }
    },
    components:{
        TodayRecommend,
        NewsMusic,
        SwiperBanner,
        MusicListNav
    }
}
</script>

<style scoped>
    
</style>