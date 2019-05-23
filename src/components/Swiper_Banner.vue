<template>
    <div class='banner'>
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide><img src="../assets/img/b1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/b2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/b3.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name:'',
    data () {
        return {
            swiperOption:{
                autoplay:true,
                pagination:{
                    el:'.swiper-pagination'
                }
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style scoped>
    .banner{
        margin: 15px 0;
    }
</style>