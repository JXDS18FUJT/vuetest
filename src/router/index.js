import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import venueslist from '@/components/venueslist'
import livecoverage from '@/components/livecoverage'
import travellist from '@/components/travellist'
import farming from '@/components/farming'
import pdf from '@/components/pdf-component'
import test from '@/components/onlyTest'
import weatherconditions from '@/components/weatherconditions'
import venuesweather from '@/components/venuesweather'
import travelweather from '@/components/tarvelweather'
import weatherforecast from '@/components/weatherforecast'
import sitelive from '@/components/sitelive'
import radarsatellite from '@/components/extra/radarSatellite'
import prewarning from '@/components/prewarning'
import typhoon from '@/components/typhoon'
Vue.use(Router);


export default new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/VenuesList',
        name: 'VenuesList',
        component: venueslist
      },
      {
        path: '/LiveCoverage',
        name: 'LiveCoverage',
        component: livecoverage
      },
      {
        path: '/TravelList',
        name: 'TravelList',
        component: travellist
      },
      {
        path:'/Farming',
        name:'Farming',
        component: farming
      },
      {
        path: '/pdf',
        name: 'pdf',
        component: pdf,
      },
      {
        path:'/test',
        name:'test',
        component:test
      },
      {
        path:'/WeatherConditions',
        name:'WeatherConditions',
        component:weatherconditions
      },
      {
        path:'/VenuesWeather',
        name:'VenuesWeather',
        component:venuesweather
      },
      {
        path:'/TravelWeather',
        name:'TravelWeather',
        component:travelweather
      },
      {
        path:'/WeatherForecast',
        name:'WeatherForecast',
        component:weatherforecast
      },
      {
        path:'/SiteLive',
        name:'SiteLive',
        component:sitelive
      },
      {
        path:'/RadarSatellite',
        name:'RadarSatellite',
        component:radarsatellite
      },
      {
        path:'/PreWarning',
        name:'PreWarning',
        component:prewarning
      },
      {
        path:'/typhoon',
        name:'Typhoon',
        component:typhoon
      }

    ]
})