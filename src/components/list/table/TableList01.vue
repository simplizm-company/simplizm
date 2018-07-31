<template>
    <table class="_table-list-01">
        <slot></slot>
    </table>
</template>

<style lang="scss">
._table-list-01 {border-top: 1px solid #333333;
    thead {
        tr th {
            padding: 10px; border-bottom: 1px solid #eeeeee; background: #f7f7f7; font-family: NanumSquare; font-weight: 700; font-size: 17px; color: #000000;
        }
    }
    tbody {
        tr td {padding: 10px; text-align: center; border-bottom: 1px solid #eeeeee; font-size: 15px;
            .title {display: flex;
                a {flex: 0 1 auto; padding: 0 10px; text-align: left; @include ellipsis;}
                .somthing {flex: 0 0 auto;}
            }
        }
    }
}
</style>
