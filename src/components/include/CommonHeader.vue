<template>
    <header id="header">
        <h1 class="logo"><nuxt-link to="/">Simplizm</nuxt-link></h1>
        <button class="gnb-toggle"><div>전체메뉴</div></button>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
#header {display: flex; justify-content: space-between; align-items: center; position: fixed; top: 10px; right: 10px; left: 10px; z-index: 100; height: 80px; padding: 0 30px; margin: 0 auto; border: 1px solid #000000;
    .logo {font-family: NanumSquare; font-weight: 700; font-size: 30px; color: #000000;}
    .gnb-toggle {position: relative; width: 50px; height: 28px;
        &:before {display: block; content: ''; position: absolute; top: 0; left: 0; width: 50px; height: 4px; border: 1px solid #000000;}
        div {position: absolute; top: 12px; left: 0; width: 100%; height: 4px; border: 1px solid #000000; text-indent: -9999em;}
        &:after {display: block; content: ''; position: absolute; top: 24px; left: 0; width: 50px; height: 4px; border: 1px solid #000000;}
    }
}
</style>
