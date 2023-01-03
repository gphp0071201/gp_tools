/**
 * time delay
 * @param {number} t ms
 * @returns
 */
export const delay = (t = 1000) =>
  new Promise((resolve) => setTimeout(resolve, t))

/**
 * generate custom string
 * @param {object} options
 * @param {number} options.length  length of generated string
 * @param {boolean} options.numeric  whether to contain numbers
 * @param {boolean} options.letters  whether to contain letters
 * @param {boolean} options.special  characters not included
 * @returns
 */
export const randomString = ({
  length = 8,
  numeric = true,
  letters = true,
  special = false,
  execude = [],
}) => {
  if (length === 0) return ''
  const specialStr = '!$%^&*()_+|~-=`{}[]:;<>?,./'
  const numericStr = '0123456789'
  const lettersStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let targetStr = ''
  if (numeric) targetStr += numericStr
  if (letters) targetStr += lettersStr
  if (special) targetStr += specialStr
  execude = Array.isArray(execude) ? execude : []
  execude.forEach((item) => {
    targetStr = targetStr.replace(new RegExp(item, 'g'), '')
  })
  let result = ''
  for (let i = 0; i < length; i++) {
    const rdm = Math.floor(Math.random() * targetStr.length)
    result += targetStr[rdm]
  }
  return result
}
/**
 * Detect data type
 * @param {*} o
 * @returns
 */
export const prototypeString = (o) => Object.prototype.toString.call(o)
/**
 * Determine whether it is a string type
 * @param {*} o
 * @returns
 */
