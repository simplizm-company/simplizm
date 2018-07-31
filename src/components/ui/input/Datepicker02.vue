<template>
    <vuejs-datepicker
        class="datepicker"
        :class="{ period : period }"
        v-model="checked"
        :openDate="prevMonth"
        :value="checked"
        :language="ko"
        :inline="defaults.inline"
        :format="defaults.format"
        :highlighted="defaults.highlighted"
        :disabledDates="defaults.disabledDates"
        @selected="doSomethingInParentComponentFunction"
        @changedMonth="doChangedMonth"
    ></vuejs-datepicker>
</template>

<script>
import VuejsDatepicker from 'vuejs-datepicker';
import { ko } from 'vuejs-datepicker/dist/locale';

export default {
    props: ['options', 'prevMonth'],
    components: {
        VuejsDatepicker
    },
    data () {
        return {
            ko: ko,
            period: false,
            checkedProxy: false,
            defaults: {
                format: 'yyyy-MM-dd',
                date: '',
                inline: false,
                highlighted: {
                    to: false, // new Date(2016, 0, 5)
                    from: false, // new Date(2016, 0, 26)
                    days: [], // [6, 0]
                    daysOfMonth: [], // [29, 30, 31]
                    dates: [
                        /* new Date(2016, 9, 16),
                        new Date(2016, 9, 17),
                        new Date(2016, 9, 18) */
                    ],
                    customPredictor: function(date) {
                        /*if(date.getDate() % 5 == 0){
                            return true
                        } */
                    },
                    includeDisabled: true
                }
            }
        }
    },
    computed: {
        checked: {
            get () {
                return this.defaults.date;
            },
            set (val) {
                this.checkedProxy = val;
                this.$emit('input', this.checkedProxy);
            }
        }
    },
    watch: {
        'options.date' (newValue, oldValue) {
            let newVal = this.dateFilter(newValue);
            let oldVal;

            if (newValue && oldValue) {
                oldVal = this.dateFilter(oldValue);
                this.period = true;
            }

            if (newVal == oldVal) {
                this.defaults.highlighted.date = newValue;
                this.defaults.highlighted.to = newValue;
                this.defaults.highlighted.from = newValue;
                return;
            }

            if (!this.period) {
                this.defaults.highlighted.to = newValue;
                this.defaults.highlighted.from = newValue;
            }

            if (this.period && newVal > oldVal) {
                this.defaults.highlighted.to = newValue;
            }

            if (this.period && newVal < oldVal) {
                this.defaults.highlighted.from = newValue;
            }
        }
    },
    created () {
        console.log(this.prevMonth);
        $.extend(this.defaults, this.options);
    },
    methods: {
        dateFilter (date) {
            let y = date.getFullYear();
            let d = date.getDate();
            let m = date.getMonth();
            if (String(m).length == 1) {
                m = `0${m}`;
            }
            if (String(d).length == 1) {
                d = `0${d}`;
            }
            return parseInt(`${y}${m}${d}`);
        },
        doSomethingInParentComponentFunction () {
            console.log('changedMonthEvents');
        },
        doChangedMonth (month) {
            console.log(month);
        }
    }
}
</script>

<style lang="scss">
.datepicker {display: inline-block;}
.datepicker:first-child .next {opacity: 0; z-index: -1;}
.datepicker:last-child .prev {opacity: 0; z-index: -1;}
.datepicker.period .cell.selected {background: none !important;}
.datepicker.period .cell.highlighted {background: #cae5ed !important;}
.datepicker.period .cell.highlight-start {background: #44bbdd !important;}
.datepicker.period .cell.highlight-end {background: #44bbdd !important;}
</style>


