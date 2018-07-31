import Vue from 'vue';

let requireComponent = require.context('~/components', true, /\w+\.(vue|js)$/);

requireComponent.keys().forEach(function (fileName) {
    let componentConfig = requireComponent(fileName);
    let ComponentName = componentConfig.default.componentName ? componentConfig.default.componentName : fileName.replace(/^\.(\/.*)*\/(.*)\.\w+$/, '$2');
    Vue.component(ComponentName, componentConfig.default || componentConfig);
});