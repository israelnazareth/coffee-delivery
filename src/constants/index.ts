import * as Icon from '@phosphor-icons/react'

export const paymentMethods = [
  {
    id: 'credit-card',
    title: 'CARTÃO DE CRÉDITO',
    icon: Icon.CreditCard,
  },
  {
    id: 'debit-card',
    title: 'CARTÃO DE DÉBITO',
    icon: Icon.CreditCard,
  },
  {
    id: 'money',
    title: 'DINHEIRO',
    icon: Icon.Money,
  },
]

export const paymentMethodDictionary = {
  'credit-card': 'Cartão de crédito',
  'debit-card': 'Cartão de débito',
  money: 'Dinheiro',
}
