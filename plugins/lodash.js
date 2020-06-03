import Vue from 'vue'
import VueLodash from 'vue-lodash'
import clone from 'lodash/clone'
import cloneDeep from 'lodash/cloneDeep'
import range from 'lodash/range'
import startCase from 'lodash/startCase'
import padStart from 'lodash/padStart'

Vue.use(VueLodash, { lodash: { clone, cloneDeep, range, startCase, padStart } })
