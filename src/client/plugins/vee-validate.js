import { extend, localize, configure } from 'src/client/plugins/vee-validate'
import { required, min, max, email, confirmed, numeric } from 'vee-validate/dist/rules'
import dictionary from '../locales/plugins/vee-validate'

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

const regex = {
  name: new RegExp('^([a-zA-ZÀ-ÖØ-öø-ÿ]+)([\\s\\-]?([a-zA-ZÀ-ÖØ-öø-ÿ]+))*$'),
  phone: new RegExp('^0([1-9])([0-9]{8})$'),
  zipCode: new RegExp('^[0-9]{5}$')
}

localize(dictionary)
localize('fr')

// Generic rules
extend('required', {
  ...required
})

// Text rules
extend('firstName', {
  validate: (value) => {
    return regex.name.test(value)
  }
})
extend('lastName', {
  validate: (value) => {
    return regex.name.test(value)
  }
})
extend('min', {
  ...min
})
extend('max', {
  ...max
})
extend('email', {
  ...email
})
extend('confirmed', {
  ...confirmed
})
extend('numeric', {
  ...numeric
})
extend('phone', {
  validate: (value) => {
    return regex.phone.test(value)
  }
})
extend('zipCode', {
  validate: (value) => {
    return regex.zipCode.test(value)
  }
})
extend('addressRequiredDefault', {
  // Street and city required
  validate: (value) => {
    const wrongValues = ['', null, undefined]
    const isValid = !wrongValues.includes(value.address) && !wrongValues.includes(value.city)
    return {
      required: true,
      valid: isValid
    }
  },
  computesRequired: true
})
extend('promoCode', {
  validate: (value, availableValues) => availableValues.includes(value.toUpperCase())
})
