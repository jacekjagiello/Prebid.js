import adapterManager from '../src/adapterManager';
import adapter from '../src/AnalyticsAdapter';

let piwikProAnalyticsAdapter = Object.assign(adapter({ analyticsType: 'endpoint' }), {
  track({ eventType, args }) {}
})

adapterManager.registerAnalyticsAdapter({
  adapter: piwikProAnalyticsAdapter,
  code: 'piwikpro'
});

export default piwikProAnalyticsAdapter;
