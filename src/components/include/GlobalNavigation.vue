<template>
    <nav id="_global-navigation">
        <ul>
            <li><nuxt-link to="/resume">Resume</nuxt-link></li>
            <li><nuxt-link to="/project">Project</nuxt-link></li>
            <li><nuxt-link to="/plugin">Plug-in</nuxt-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
#_global-navigation {display: flex; justify-content: center; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000; background: rgba(0, 0, 0, 0.9);
    ul {width: 1020px; padding: 10px;
        li {
            a {display: block; font-family: NanumSquare; font-weight: 700; font-size: 60px; line-height: 2; color: #ffffff;}
        }
    }
}
</style>
