<template>
    <div class='index'>
        <ul>
            <li>
                <router-link to="/home">
                    <img src="../assets/logo-ea5.png" alt="logo">
                </router-link>
            </li>
            <li>
                <router-link to="/artists">
                    歌手
                </router-link>
            </li>
            <li>
                <router-link to="/listcate">
                    榜单
                </router-link>
            </li>
            <li>
                <router-link to="/ucenter">
                    我的
                </router-link>
            </li>
            <li>
                <router-link to="/search">
                    搜索
                </router-link>
            </li>
        </ul>
        <router-view />
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
    
.index ul{
    display:flex;
    height: 50px;
    line-height: 50px;
    background: #f9f9f9;
    align-items: center;
}

.index img{
    width: 26px;
    height: 26px;
}

.index ul li{
    flex: 1;
    text-align:center;
}

.index ul li a{
    font-size: 16px;
    color: #999;
}
</style>