/**
 * return the *extended type of the provided expression.
 * *extended: JavaScript reports the type any of these (`null | {} | []` ) to be an `object`
 *      this function returns `null` in the case it finds a null value and `array` in the case it finds an Array
 *      all other object values are typed as 'object'
 * @example
 *      type([]) === 'array'
 *      type(null) === 'null'
 *      type() === 'undefined'
 *      type({}) === 'object'
 *      type(()=>{}) === 'function'
 *      type('test') === 'string'
 *      type(1) === 'number'
 *      type(Symbol()) === 'symbol'
 *
 * @static
 * @param {any} any The variable or expression to test.
 * @param {Boolean} [strict=false] If strict is true, null and Array also return 'object'
 * @returns {String}
 */
const type = (any, strict = false) => {
  let type = typeof any
  if (type === 'object') {
    if (strict) return type
    if (any === null) return 'null'
    if (Array.isArray(any)) return 'array'
    if (any instanceof RegExp) return 'regex'
    if (any instanceof Error) return 'error'
    return type
  } else {
    return type
  }
}

/**
 * Test whether an object contains a definition at the provided namespace
 * @example
 *      has({a:{b:{c:'something'}}}, 'a.b.c') === true
 *
 * @static
 * @param {any} obj The object to inspect
 * @param {String} namespace The dot-saparated namespace to test
 * @param {boolean} allowInherit
 * @returns {any}
 * @memberof Obj
 */
const has = (obj, namespace, allowInherit = true) => {
  if (type(namespace) !== 'array') namespace = String(namespace).split('.')
  if (namespace.length > 0) {
    const nextProp = namespace.shift()
    if (obj !== null && typeof obj === 'object') {
      if (allowInherit ? nextProp in obj : Object.prototype.hasOwnProperty.apply(obj, [nextProp])) {
        return has(obj[nextProp], namespace, allowInherit)
      } else {
        return false
      }
    } else {
      return false
    }
  }
  return true
}

/**
 * Fetch the value of a namespace contained in an object, and return the defaultValue if such a namespace
 * could not be found.
 * @example
 *      get({a:{b:{c:'test string'}}}, 'a.b.c') === 'test string'
 *      get({a:{b:{c:'test string'}}}, 'a.b.d') === undefined
 *      get({a:{b:{c:'test string'}}}, 'a.b.d', null) === null
 *
 * @static
 * @param {any} obj The object to use as base
 * @param {String} namespace The namespace to fetch the value of
 * @param {any} defaultValue The default value returned if the namespace is not found on the object
 * @param {boolean} allowInherit
 * @returns {any}
 * @memberof Obj
 */
const get = (obj, namespace, defaultValue, allowInherit = true) => {
  if (type(namespace) !== 'array') namespace = String(namespace).split('.')
  if (namespace.length > 0) {
    const nextProp = namespace.shift()
    if (obj !== null && typeof obj === 'object') {
      if (allowInherit ? nextProp in obj : Object.prototype.hasOwnProperty.apply(obj, [nextProp])) {
        return get(obj[nextProp], namespace, defaultValue, allowInherit)
      } else {
        return defaultValue
      }
    } else {
      return defaultValue
    }
  }
  return obj
}

const isObject = (any, strict) => {
  return type(any, strict) === 'object'
}

const isArray = any => {
  return type(any) === 'array'
}

const isNull = any => {
  return type(any) === 'null'
}

const isUndefined = any => {
  return type(any) === 'undefined'
}

const isRegex = any => {
  return type(any) === 'regex'
}

const isString = any => {
  return type(any) === 'string'
}

const isNumber = any => {
  return type(any) === 'number'
}

const isFunction = any => {
  return type(any) === 'function'
}

const isSymbol = any => {
  return type(any) === 'symbol'
}

const isError = any => {
  return type(any) === 'error'
}

/**
 * Check whether the `obj` value at `namespace` has the type `type`
 * @example
 *  propIsType({a:{b:{c:null}}},'a.b.c','null') === true
 *
 * @static
 * @param {any} obj The object to be inspected
 * @param {String} namespace The namespace contained in the object, to be inspected
 * @param {String} type The type name being tested for
 * @param {Boolean} [strict=false] with `strict===false` an array would be typed 'array'. With `strict===false` an
 * array would be typed 'object'
 * @returns {Boolean}
 */
const propIsType = (obj, namespace, type, strict = false) => {
  const notFound = Symbol('notFound') // unique unreproducible value
  const value = get(obj, namespace, notFound)
  const typeString = type(value, strict)
  return notFound === value ? false : typeString === type
}

/**
 *
 * Check whether the `obj` value at `namespace` has the type `undefined`, returns appropriately with true if
 * namespace does not exist.
 *
 * The difference between hasUndefined and propIsType(,,'undefined'), is that hasUndefined returns true
 * if a , a.b or a.b.c is undefined. Instead of returning false if a or a.b isn't defined.
 *
 * @example
 *  hasUndefined({a:{b:{c:undefined}}},'a.b.c') === true
 *  hasUndefined({a:{}},'a.b.c') === true
 *
 * @param {any} obj The object to be inspected
 * @param {String} namespace The namespace contained in the object, to be inspected
 */
const hasUndefined = (obj, namespace) => {
  return get(obj, namespace, undefined) === undefined
}

/**
 * returns true if the passed argument can be iterated over
 *
 * @static
 * @param {*} obj The variable to test
 * @returns
 */
const canIterate = obj => {
  return ['object', 'array'].indexOf(type(obj)) >= 0
}

/**
 * Get an array of errors when validating a data object against a schema
 * @example
 *   let bookShema = {
 *       'title': 'string',
 *       '?ISBN': /ISBN\x20(?=.{13}$)\d{1,5}([- ])\d{1,7}\1\d{1,6}\1(\d|X)$/,
 *       'primeKey': num => {
 *           for (let i = 2, s = Math.sqrt(num); i <= s; i++)
 *               if (num % i === 0) return false;
 *           return num > 1;
 *       },
 *       'author': {
 *           'name': 'string',
 *           'surname': 'string',
 *           '?misc': 'any',
 *           '?co-authors': [{
 *               'name': 'string',
 *               'surname': 'string',
 *               '?editorOnly': 'boolean|undefined'
 *           }]
 *       },
 *   }
 *   let book = {
 *       title: 'Some Title',
 *       ISBN: 'ISBN 1-56389-668-0',
 *       dewey: '1.23',
 *       primeKey: 9,
 *       author: {
 *           'name': 'Peter',
 *           'surname': 'Pan',
 *           'co-authors': [{
 *               'name': 'Wendy',
 *               'surname': '',
 *               'editorOnly': 'yes'
 *           }]
 *       }
 *   }
 *
 *   console.log(getSchemaErrors(book,bookShema))
 *
 *   $> [
 *   $>     "'dewey' is not defined in the schema.",
 *   $>     "'primeKey' does not pass the validation function for that property.",
 *   $>     "'author.co-authors.0.editorOnly' is not of type 'boolean | undefined'"
 *   $> ]
 *
 *
 * @static
 * @param {*} obj The object to test
 * @param {*} schema The Schema to test against
 * @returns
 */
const getSchemaErrors = (obj, schema) => {
  //Custom error for .reasons
  class CheckSchemaError extends Error {
    constructor(message, reasons = null) {
      super(message)
      this.reasons = reasons
    }
  }

  if (!canIterate(obj)) throw new CheckSchemaError('Invalid object or schema')

  const makeValidationFunction = (validationSpec, fullPropName) => {
    const validationSpecType = type(validationSpec)
    let validationFunction = () => false // fail by default

    ;((validationSpec, validationSpecType, fullPropName) => {
      // to avoid leakage over multiple calls
      switch (validationSpecType) {
        case 'array':
          if (validationSpec.length !== 1)
            throw new CheckSchemaError(
              `Array schema for '${fullPropName}' should contain exactly one object indicating validation spec for array items`
            )
          validationFunction = data => {
            let errors = []
            if (!Array.isArray(data))
              throw new CheckSchemaError(`'${fullPropName}' is expected to be an array of objects`)
            data.forEach((item, idx) => {
              if (type(item) !== 'object')
                throw new CheckSchemaError(
                  `'${[...fullPropName.split('.'), idx].join('.')}' is expected to be an object`
                )
              try {
                checkSchema(item, validationSpec[0], [...fullPropName.split('.'), idx])
              } catch (e) {
                errors.push(e)
              }
            })
            let reasons = colateErrors(errors)
            if (reasons.length > 0) throw new CheckSchemaError('Array validation failures', reasons)
          }
          break
        case 'object':
          validationFunction = data => {
            checkSchema(data, validationSpec, fullPropName.split('.'))
          }
          break

        //     break
        case 'regex':
          validationFunction = data => {
            const valid = `${data}`.match(validationSpec)
            if (!valid)
              throw new CheckSchemaError(
                `'${fullPropName}' does not pass the regex '${validationSpec.toString()}'.`
              )
            return true
          }
          break
        case 'function':
          validationFunction = data => {
            const valid = !!validationSpec(data)
            if (!valid)
              throw new CheckSchemaError(
                `'${fullPropName}' does not pass the validation function for that property.`
              )
            return true
          }
          break
        case 'string':
          validationFunction = data => {
            let types = validationSpec.split('|')
            const valid = types.indexOf(type(data)) >= 0 || types.indexOf('any') >= 0
            if (!valid)
              throw new CheckSchemaError(`'${fullPropName}' is not of type '${types.join(' | ')}'`)
            return true
          }
          break
      }
    })(validationSpec, validationSpecType, fullPropName)

    return validationFunction
  }

  const colateErrors = errorArray => {
    let reasons = []
    errorArray.forEach(error => {
      if (Array.isArray(error.reasons)) {
        // console.log(error)
        reasons = reasons.concat(error.reasons)
      } else {
        reasons.push(error.message)
      }
    })
    return reasons
  }

  const checkSchema = (obj, schema, prefix = []) => {
    let propSchemas = {}
    ;(() => {
      // isolate scope
      let props = Object.keys(schema)
      for (let prop of props) {
        let propSchema = {}
        propSchema.required = prop[0] !== '?'
        propSchema.prop = propSchema.required ? prop : prop.substring(1)
        propSchema.fullProp = [...prefix, propSchema.prop].join('.')
        propSchema.validation = makeValidationFunction(schema[prop], propSchema.fullProp)
        propSchemas[propSchema.prop] = propSchema
      }
    })()
    // console.log('VALIDATION', { obj, schema, prefix, propSchemas })

    let errors = []

    //Check minimum properties
    Object.values(propSchemas)
      .filter(propSchema => propSchema.required)
      .map(propSchema => propSchema) //is required
      .filter(propSchema => !Object.prototype.hasOwnProperty.apply(obj, [propSchema.prop])) //is not on obj
      .forEach(propSchema => {
        errors.push(new CheckSchemaError(`'${propSchema.fullProp}' is a required property.`))
      })

    //No extra data
    let allSchemaProperties = Object.keys(propSchemas)
    Object.keys(obj)
      .filter(prop => allSchemaProperties.indexOf(prop) < 0)
      .forEach(illegalProp => {
        errors.push(
          new CheckSchemaError(
            `'${[...prefix, illegalProp].join('.')}' is not defined in the schema.`
          )
        )
      })

    //Validate each property
    Object.values(propSchemas)
      .map(propSchema => propSchema) //is required
      .filter(propSchema => Object.prototype.hasOwnProperty.apply(obj, [propSchema.prop])) //is on obj
      .forEach(propSchema => {
        try {
          propSchema.validation(obj[propSchema.prop])
        } catch (e) {
          errors.push(e)
        }
      })

    let reasons = colateErrors(errors)
    if (reasons.length > 0) {
      throw new CheckSchemaError(`Schema validation failed`, reasons)
    }
    return true
  }

  try {
    checkSchema(obj, schema)
    return []
  } catch (e) {
    return colateErrors([e])
  }
}

/**
 * Recursively flatten an object
 *
 * @example
 *
 *  let flattened = flatten({
 *      title: 'Some Title',
 *      ISBN: 'ISBN 1-56389-668-0',
 *      dewey: '1.23',
 *      primeKey: 9,
 *      author: {
 *          'name': 'Peter',
 *          'surname': 'Pan',
 *          'co-authors': [{
 *              name: 'Wendy',
 *              surname: '',
 *              editorOnly: 'yes'
 *          }]
 *      }
 *  })
 *
 *  console.log(flattened)
 *  $> {
 *  $>     "title": 'Some Title',
 *  $>     "ISBN": 'ISBN 1-56389-668-0',
 *  $>     "dewey": '1.23',
 *  $>     "primeKey": 9,
 *  $>     'author.name': 'Peter',
 *  $>     'author.surname': 'Pan',
 *  $>     'author.co-authors.0.name': 'Wendy',
 *  $>     'author.co-authors.0.surname': '',
 *  $>     'author.co-authors.0.editorOnly': 'yes'
 *  $> }
 *
 * @static
 * @param {*} obj
 * @param {*} [prefix=[]]
 * @returns {Object}
 * @memberof Obj
 */
const flatten = (obj, prefix = []) => {
  if (['object', 'array'].indexOf(type(obj)) < 0) return false
  let keys = Object.keys(obj)
  // console.log('Object',obj,keys)
  let out = {}
  for (let key of keys) {
    let value = obj[key]
    if (['object', 'array'].indexOf(type(value)) >= 0) {
      out = { ...out, ...flatten(value, [...prefix, key]) }
    } else {
      out[[...prefix, key].join('.')] = value
    }
  }
  return out
}

/**
 * Interpolate a string with the marked up object properties
 *
 * @static
 * @param {Object} obj The object to use for interpolation
 * @param {string} str
 * @param {*} [defaultValue=undefined]
 * @returns {string}
 * @memberof Obj
 * @example
 *  interpolate({testProp:{nestedProp:[{arrayNestedProp:'propertyValue'}]}},'The value is: [testProp.nestedProp.0.arrayNestedProp]')
 *  // == The value is: propertyValue
 */
const interpolate = (obj, str, defaultValue) => {
  let ostr = str

  const regex = /\[(.*?)\]/g
  let m
  let keys = []

  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) regex.lastIndex++ // Avoid infinite loops
    keys.push(m[1])
  }
  keys.forEach(key => {
    const v = get(obj, key, defaultValue)
    if (v !== undefined) {
      const regex = new RegExp(`\\[${key}\\]`, 'gm')
      ostr = ostr.replace(regex, v)
    }
  })

  return ostr
}

export {
  type,
  has,
  get,
  isObject,
  isArray,
  isNull,
  isUndefined,
  isRegex,
  isString,
  isNumber,
  isFunction,
  isSymbol,
  isError,
  propIsType,
  hasUndefined,
  canIterate,
  getSchemaErrors,
  flatten,
  interpolate,
}
