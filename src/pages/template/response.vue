<template>
    <div id="response">
        <div>
            <cut class="vw">변화하는 vw단위가 적용되어있는 텍스트입니다.</cut>
        </div>
    </div>
</template>

<style lang="scss">
#response {
    .vw {font-size: 17px;
        @include desktop {font-size: pv(17);}
        @include tablet {font-size: tv(28);}
        @include mobile {font-size: mv(30);}
    }
}
</style>
