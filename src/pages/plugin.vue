<template>
    <div id="plugin">
        <page-title>Plug-in</page-title>
        <ul>
            <li>
                <a href="https://simplizm-company.github.io/eclipse/" target="_blank">
                    <div class="image">
                        <div class="inner"><img src="~/static/images/plugin/eclipse.gif" alt=""></div>
                    </div>
                    <div class="disct">
                        <cut class="title">Eclipse</cut>
                        <cut class="text">jQuery slider</cut>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#plugin {padding: 50px 0 100px;
    ul {display: flex; flex-wrap: wrap; margin: 0 0 -5%;
        @include mobile {margin: 0 0 -10%;}
        li {width: 30%; margin: 0 5% 5% 0;
            @include desktop {
                &:nth-child(3n) {margin: 0 0 5% 0;}
            }
            @include tablet {width: 47.5%;
                &:nth-child(2n) {margin: 0 0 5% 0;}
            }
            @include mobile {width: 100%; margin: 0 0 10% !important;}
            a {display: block;
                .image {flex: 0 0 300px; position: relative; padding: 100% 0 0;
                    .inner {position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center; background: #f7f7f7;
                        img {max-width: 80%;}
                    }
                }
                .disct {margin: 20px 0 0;
                    .title {font-family: NanumSquare; font-weight: 700; font-size: 17px; color: #000000;}
                    .text {font-family: NanumSquare; font-size: 17px; color: #000000; margin: 10px 0 0;}
                }
            }
        }
    }
}
</style>
