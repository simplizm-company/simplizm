<template>
    <vuejs-datepicker
        class="_datepicker"
        v-model="valued"
        :value="valued"
        :language="ko"
        :format="format"
        :inline="inline"
        :highlighted="highlighted"
        :disabledDates="disabledDates"
    ></vuejs-datepicker>
</template>

<script>
import VuejsDatepicker from 'vuejs-datepicker';
import { ko } from 'vuejs-datepicker/dist/locale';

export default {
    props: {
        uid: {
            default: false
        },
        format: {
            default: 'yyyy-MM-dd'
        },
        value: {
            default: ''
        },
        inline: {
            default: false
        },
        highlighted: {
            default () {
                return {
                    to: false, // new Date(2016, 0, 5)
                    from: false, // new Date(2016, 0, 26)
                    days: [], // [6, 0]
                    daysOfMonth: [], // [29, 30, 31]
                    dates: [
                        // new Date(2016, 9, 16),
                        // new Date(2016, 9, 17),
                        // new Date(2016, 9, 18)
                    ],
                    customPredictor: function(date) {
                        // if(date.getDate() % 5 == 0){
                        //     return true
                        // }
                    },
                    includeDisabled: true
                }
            }
        },
        disabledDates: {
            default () {
                return {
                    to: false, // new Date(2016, 0, 5)
                    from: false, // new Date(2016, 0, 26)
                    days: [], // [6, 0]
                    daysOfMonth: [], // [29, 30, 31]
                    dates: [
                        // new Date(2016, 9, 16),
                        // new Date(2016, 9, 17),
                        // new Date(2016, 9, 18)
                    ],
                    ranges: [{
                        // from: new Date(2016, 11, 25),
                        // to: new Date(2016, 11, 30)
                    }, {
                        // from: new Date(2017, 1, 12),
                        // to: new Date(2017, 2, 25)
                    }],
                    customPredictor: function(date) {
                        // if(date.getDate() % 5 == 0){
                        //     return true
                        // }
                    }
                }
            }
        },
        from: {
            default: false
        },
        to: {
            default: false
        }
    },
    data () {
        return {
            ko,
            valueProxy: false
        }
    },
    components: {
        VuejsDatepicker
    },
    computed: {
        valued: {
            get () {
                return this.value;
            },
            set (val) {
                val.setHours(12, 0, 0, 0);
                this.valueProxy = val;
                this.$emit('input', this.valueProxy);
            }
        }
    },
    watch: {
        value (newValue, oldValue) {
            this.setPeriodValue(newValue);
        },
        from (newValue, oldValue) {
            const self = this;
            this.highlighted.from = newValue;
            this.highlighted.dates = [newValue];
            this.disabledDates.customPredictor = function (date) {
                if (self.dateFilter(date) < self.dateFilter(newValue)) {
                    return true;
                }
            }
        },
        to (newValue, oldValue) {
            const self = this;
            this.highlighted.to = newValue;
            this.highlighted.dates = [newValue];
            this.disabledDates.customPredictor = function (date) {
                if (self.dateFilter(date) > self.dateFilter(newValue)) {
                    return true;
                }
            }
        }
    },
    created () {
        const self = this;
        if (this.value) {
            this.setPeriodValue(this.value);
        }
        if (this.from) {
            this.highlighted.from = this.from;
            this.highlighted.dates = [this.from];
            this.disabledDates.customPredictor = function (date) {
                if (self.dateFilter(date) < self.dateFilter(self.from)) {
                    return true;
                }
            }
        }
        if (this.to) {
            this.highlighted.to = this.to;
            this.highlighted.dates = [this.to];
            this.disabledDates.customPredictor = function (date) {
                if (self.dateFilter(date) > self.dateFilter(self.to)) {
                    return true;
                }
            }
        }
    },
    methods: {
        setPeriodValue (value) {
            if (this.from !== false) {
                this.highlighted.to = value.setHours(12, 0, 0, 0);
            }
            if (this.to !== false) {
                this.highlighted.from = value.setHours(12, 0, 0, 0);
            }
        },
        dateFilter (date) {
            let y = date.getFullYear();
            let m = String(date.getMonth()+1).length == 1 ? `0${date.getMonth()+1}` : date.getMonth()+1;
            let d = String(date.getDate()).length == 1 ? `0${date.getDate()}` : date.getDate();
            return parseInt(`${y}${m}${d}`);
        }
    }
}
</script>

<style lang="scss">
._datepicker {display: inline-block;
    .cell {
        &.selected {background: #666666; color: #ffffff;}
        &.highlighted {background: #eeeeee;
            &.selected {background: #666666; color: #ffffff;}
            &.highlight-start {background: #666666; color: #ffffff;}
            &.highlight-end {background: #666666; color: #ffffff;}
        }
        &:not(.blank):not(.disabled).day:hover,
        &:not(.blank):not(.disabled).month:hover,
        &:not(.blank):not(.disabled).year:hover {
            border: 1px solid #666666;
        }
    }
}
</style>


