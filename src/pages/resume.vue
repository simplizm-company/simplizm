<template>
    <div id="resume">
        <page-title>Resume</page-title>
        <section>
            <cut tag="h1">Profile</cut>
            <ul class="profile">
                <cut tag="li">신용준</cut>
                <cut tag="li">010-6479-6698</cut>
                <cut tag="li">shinyj1991@gmail.com</cut>
            </ul>
        </section>
        <section>
            <cut tag="h1">Career</cut>
            <ol class="career">
                <li>
                    <cut class="company">Free-lancer</cut>
                    <cut class="period">- 2018. 09 ~</cut>
                    <cut class="skills">- HTML, CSS, Javascript, jQuery, Vuejs</cut>
                    <cut class="working">- 웹&middot;앱 퍼블리싱, 프로모션&middot;이벤트 퍼블리싱, 기획&middot;디자인&middot;개발 연계, 패럴렉스, 스크립트, 플러그인제작, Vuejs</cut>
                </li>
                <li>
                    <cut class="company">Newriver</cut>
                    <cut class="period">- 2015. 04 ~ 2018. 08 (3년 5개월)</cut>
                    <cut class="skills">- HTML, CSS, Javascript, jQuery, Vuejs</cut>
                    <cut class="working">- 웹사이트 퍼블리싱, 프로모션 퍼블리싱, 퍼블리싱 유지보수, 팀 매니징, 팀 인사업무</cut>
                </li>
                <li>
                    <cut class="company">Megacoding</cut>
                    <cut class="period">- 2014. 02 ~ 2015. 03 (1년 2개월)</cut>
                    <cut class="skills">- HTML, CSS, Javascript, jQuery</cut>
                    <cut class="working">- 웹사이트 퍼블리싱, 퍼블리싱 유지보수</cut>
                </li>
                <li>
                    <cut class="company">Wise C&amp;S</cut>
                    <cut class="period">- 2013. 10 ~ 2014. 01 (4개월)</cut>
                    <cut class="skills">- HTML, CSS, Javascript, jQuery</cut>
                    <cut class="working">- 테이블 구조의 공고 코딩 (단순 작업), 내부 인트라넷 구축</cut>
                </li>
            </ol>
        </section>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#resume {padding: 50px 0 100px; font-family: NanumSquare;
    section {position: relative; margin: 0 0 100px; padding: 0 0 0 200px;
        &:last-child {margin-bottom: 0;}
        h1 {position: absolute; top: -0.5ex; left: 0; margin: 0 0 20px; font-family: NanumSquare; font-weight: 700; font-size: 32px; letter-spacing: -0.01em; color: #cccccc;}
        .profile {
            li {margin: 0 0 10px;
                &:first-child {margin-bottom: 20px; font-weight: 700; font-size: 19px; color: #000000;}
                &:last-child {margin-bottom: 0;}
            }
        }
        .career {
            li {position: relative; margin: 50px 0 0;
                &:first-child {margin-top: 0;}
                .company {margin: 0 0 20px; font-weight: 700; font-size: 19px; color: #666666;
                    .period {margin: 0 0 0 20px; font-weight: 400; font-size: 17px;}
                }
                .period {margin: 0 0 10px;}
                .skills {position: relative; margin: 0 0 10px;}
            }
        }
        @include mobile {margin: 0 0 50px; padding-left: 0;
            h1 {position: static; font-size: 40px;}
        }
    }
}
</style>
