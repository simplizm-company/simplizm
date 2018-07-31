<template>
    <article>
        <cut tag="h1">flex example</cut>
        <section>
            <cut tag="h1">defaults (flex-direction: row;)</cut>
            <div class="box">
                <div class="item">One</div>
                <div class="item">Two</div>
                <div class="item">Three</div>
            </div>
        </section>
        <section>
            <cut tag="h1">flex-direction: row-reverse;</cut>
            <div class="box" style="flex-direction: row-reverse;">
                <div class="item">One</div>
                <div class="item">Two</div>
                <div class="item">Three</div>
            </div>
        </section>
        <section>
            <cut tag="h1">flex-wrap: wrap;</cut>
            <cut class="txt">여러 행을 가진 flex 컨테이너</cut>
            <div class="box" style="flex-wrap: wrap; justify-content: space-between;">
                <div class="item" style="width: 49%; margin-bottom: 2%;">One</div>
                <div class="item" style="width: 49%; margin-bottom: 2%;">Two</div>
                <div class="item" style="width: 49%; margin-bottom: 2%;">Three</div>
            </div>
        </section>
        <section>
            <cut tag="h1">축약 속성 flex-flow</cut>
            <cut class="txt">flex-direction 속성과 flex-wrap 속성을 flex-flow 라는 축약 속성으로 합칠 수 있습니다.<br>
            첫 번째 인자는 flex-direction 이고 두 번째 인자는 flex-wrap 입니다.</cut>
            <div class="box" style="flex-flow: row-reverse wrap; justify-content: space-between;">
                <div class="item" style="width: 49%; margin-bottom: 2%;">One</div>
                <div class="item" style="width: 49%; margin-bottom: 2%;">Two</div>
                <div class="item" style="width: 49%; margin-bottom: 2%;">Three</div>
            </div>
        </section>
        <section>
            <cut tag="h1">flex 항목에 적용되는 속성들</cut>
            <cut class="txt">flex-basis : 항목의 크기 (기본값 auto)<br>
            flex-shrink : 항목의 크기 분배 비율 (기본값 0으로 추정)<br>
            flex-grow : 공간이 부족할때 크기를 줄이는 비율 (기본값 0으로 추정)<br>
            flex : 위의 3가지 속성을 축약<br>
            (1) : flex-shrink<br>
            (2) : flex-grow<br>
            (3) : flex-basis<br>
            flex: 0 0 auto;</cut>
            <div class="box">
                <div class="item" style="flex: 0 0 auto;">0 0 auto</div>
                <div class="item" style="flex: 0 0 auto;">0 0 auto</div>
                <div class="item" style="flex: 0 0 auto;">0 0 auto</div>
            </div>
            <div class="box">
                <div class="item" style="flex: 1 0 auto;">1 0 auto</div>
                <div class="item" style="flex: 1 0 auto;">1 0 auto</div>
                <div class="item" style="flex: 1 0 auto;">1 0 auto</div>
            </div>
            <div class="box">
                <div class="item" style="flex: 0 0 200px;">0 0 200px</div>
                <div class="item" style="flex: 1 0 auto;">1 0 auto</div>
            </div>
            <div class="box">
                <div class="item" style="flex: 0 0 200px;">0 0 200px</div>
                <div class="item" style="flex: 0 0 500px;">0 0 500px</div>
            </div>
        </section>
        <section>
            <cut tag="h1">flex 진행축 정렬 justify-content</cut>
            <cut class="txt">justify-content: flex-start;</cut>
            <div class="box" style="justify-content: flex-start;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
            <cut class="txt">justify-content: flex-end;</cut>
            <div class="box" style="justify-content: flex-end;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
            <cut class="txt">justify-content: center;</cut>
            <div class="box" style="justify-content: center;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
            <cut class="txt">justify-content: space-around;</cut>
            <div class="box" style="justify-content: space-around;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
            <cut class="txt">justify-content: space-between;</cut>
            <div class="box" style="justify-content: space-between;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
            <cut class="txt">justify-content: space-evenly;</cut>
            <div class="box" style="justify-content: space-evenly;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
        </section>
        <section>
            <cut tag="h1">flex 교차축 정렬 align-items</cut>
            <cut class="txt">align-items: stretch;</cut>
            <div class="box" style="align-items: stretch;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto; display: flex; align-items: center;">
                    <span>Three1<br>Three2</span>
                    <span>Three1</span><br>
                    <span>Three2</span>
                </div>
            </div>
            <cut class="txt">align-items: flex-start;</cut>
            <div class="box" style="align-items: flex-start;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
            <cut class="txt">align-items: flex-end;</cut>
            <div class="box" style="align-items: flex-end;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
            <cut class="txt">align-items: center;</cut>
            <div class="box" style="align-items: center;">
                <div class="item" style="flex: 0 0 auto;">One</div>
                <div class="item" style="flex: 0 0 auto;">Two</div>
                <div class="item" style="flex: 0 0 auto;">Three</div>
            </div>
            <cut class="txt">align-items: baseline;</cut>
            <div class="box" style="align-items: baseline;">
                <div class="item" style="flex: 0 0 auto; font-size: 17px;">17px</div>
                <div class="item" style="flex: 0 0 auto; font-size: 30px;">30px</div>
                <div class="item" style="flex: 0 0 auto; font-size: 60px;">60px</div>
                <div class="item" style="flex: 0 0 auto; font-size: 100px;">100px</div>
            </div>
        </section>
        <section>
            <cut tag="h1">flex 독립적 교차 축 정렬 align-self</cut>
            <div class="box">
                <div class="item" style="flex: 0 0 auto; align-self: auto;">align-self: auto;</div>
                <div class="item" style="flex: 0 0 auto; align-self: auto;">align-self: auto;</div>
                <div class="item" style="flex: 0 0 auto; align-self: auto;">align-self: auto;</div>
            </div>
            <div class="box">
                <div class="item" style="flex: 0 0 auto; align-self: auto;">align-self: auto;</div>
                <div class="item" style="flex: 0 0 auto; align-self: flex-start;">align-self: flex-start;</div>
                <div class="item" style="flex: 0 0 auto; align-self: flex-end;">align-self: flex-end;</div>
            </div>
            <div class="box">
                <div class="item" style="flex: 0 0 auto; align-self: center;">align-self: center;</div>
                <div class="item" style="flex: 0 0 auto; align-self: center;">align-self: center;</div>
                <div class="item" style="flex: 0 0 auto; align-self: stretch;">align-self: stretch;</div>
            </div>
        </section>
        <section>
            <cut tag="h1">flex 여러줄 교차 축 정렬 align-content</cut>
            <cut class="txt">align-content 속성은 여러 줄의 교차 축 정렬과 줄 사이 간격을 제어합니다. 여러 줄이 발생하는 경우(flex-wrap: wrap;)에만 적용되고, 여러 줄이 발생하는 경우 align-items의 교차 축 정렬보다 적용 우선순위가 높습니다.</cut>
            <cut class="txt">align-content: flex-start;</cut>
            <div class="box" style="flex-wrap: wrap; align-content: flex-start; height: 300px;">
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">1</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">2</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">3</div>
            </div>
            <cut class="txt">align-content: flex-end;</cut>
            <div class="box" style="flex-wrap: wrap; align-content: flex-end; height: 300px;">
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">1</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">2</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">3</div>
            </div>
            <cut class="txt">align-content: center;</cut>
            <div class="box" style="flex-wrap: wrap; align-content: center; height: 300px;">
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">1</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">2</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">3</div>
            </div>
            <cut class="txt">align-content: space-between;</cut>
            <div class="box" style="flex-wrap: wrap; align-content: space-between; height: 300px;">
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">1</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">2</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">3</div>
            </div>
            <cut class="txt">align-content: space-around;</cut>
            <div class="box" style="flex-wrap: wrap; align-content: space-around; height: 300px;">
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">1</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">2</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">3</div>
            </div>
            <cut class="txt">align-content: stretch;</cut>
            <div class="box" style="flex-wrap: wrap; stretch: flex-start; height: 300px;">
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">1</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">2</div>
                <div class="item" style="width: 49%; flex: 0 0 auto; align-self: auto;">3</div>
            </div>
        </section>
    </article>
</template>

<style lang="scss" scoped>
section {margin: 30px 0;}

.txt {margin: 15px 0; color: #000000;}
.item {padding: 12px; border: 2px solid #000000; border-radius: 5px; background: #f7f7f7;}
.box {display: flex; height: 200px; margin: 0 0 30px; padding: 12px; border: 2px dashed #000000;}
</style>
