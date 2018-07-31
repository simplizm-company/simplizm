<template>
    <div class="_btnbox">
        <slot></slot>
    </div>
</template>

<style lang="scss">
._btnbox {display: flex; position: relative; align-items: center; justify-content: center;
    &.sbw {justify-content: space-between;
        > div {display: flex;}
    }
    &.jcs {justify-content: flex-start;}
    &.jce {justify-content: flex-end;}
    &.bw10 {
        a,
        button {margin: 0 0 0 10px;
            &:first-child {margin-left: 0;}
        }
    }
    &.bw20 {
        a,
        button {margin: 0 0 0 20px;
            &:first-child {margin-left: 0;}
        }
    }
    
    .mra {margin-right: auto;}
    .mla {margin-left: auto;}
}
</style>
