<template>
    <div id="masonry">
        <div style="height: 400px;"><div></div></div>
        <div style="height: 300px;"><div></div></div>
        <div style="height: 500px;"><div></div></div>
        <div style="height: 600px;"><div></div></div>
        <div style="height: 700px;"><div></div></div>
        <div style="height: 400px;"><div></div></div>
        <div style="height: 300px;"><div></div></div>
        <div style="height: 500px;"><div></div></div>
        <div style="height: 600px;"><div></div></div>
        <div style="height: 700px;"><div></div></div>
        <div style="height: 800px;"><div></div></div>
    </div>
</template>

<style lang="scss">
#masonry {display: flex; align-items: flex-start; flex-wrap: wrap; margin: -5px;
    > div {display: flex; align-self: flex-start; flex: 0 1 calc(100% / 3); padding: 10px; margin: -5px;
        div {flex: 1 1 auto; background: #f7f7f7;}
    }
}
</style>
