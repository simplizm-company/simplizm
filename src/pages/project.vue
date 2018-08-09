<template>
    <div id="project">
        <ul>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-newriver.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">뉴리버 (반응형)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-insper.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">인스퍼 (PC, Mobile)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li class="black">
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-bnc.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">브랜드앤컴퍼니 (적응형)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-momntalk.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">맘앤톡 (PC, Mobile)</cut>
                    <cut class="text">퍼블리싱 (참여율 95%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-genedoctor.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">진닥터 (PC, Mobile)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-gcem.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">녹십자em (PC, Mobile)</cut>
                    <cut class="text">퍼블리싱 (참여율 80%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-strikezon.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">스트라이크존 (PC, Mobile)</cut>
                    <cut class="text">퍼블리싱 (참여율 50%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-golping.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">골핑 (PC, Mobile)</cut>
                    <cut class="text">퍼블리싱 (메인페이지 리뉴얼)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-gongcha.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">공차 (PC, Mobile)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-lottefinechem.gif" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">롯데정밀화학 (PC)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-bluebird.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">블루버드 (반응형)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-coffinegurunaru.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">커핀그루나루 (PC, Mobile)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-clipartkorea.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">클립아트코리아 (PC)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
            <li>
                <div class="image">
                    <div class="inner"><img src="~/static/images/common/project-imagetoday.png" alt=""></div>
                </div>
                <div class="disct">
                    <cut class="title">이미지투데이 (PC)</cut>
                    <cut class="text">퍼블리싱 (참여율 100%)</cut>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#project {padding: 50px 0 100px;
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
</style>
