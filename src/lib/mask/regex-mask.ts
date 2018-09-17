import createNumberMask from './create-number-mask';

export const REGEX_MASK = {
    PHONE_MASK: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    PHONE_UNMASK: /\D+/g,
    NUMERIC_MASK: createNumberMask(),
    NUMERIC_UNMASK: /\D/g
}