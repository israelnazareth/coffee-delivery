/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import * as Styled from './styles'
import * as Icon from '@phosphor-icons/react'
import { InputField } from '@/components/InputField'
import { PaymentItem } from '@/components/Select'
import { paymentMethods } from '@/constants'
import { useForm } from 'react-hook-form'
import { getDataByCep } from '@/services/locationAPI'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useMyContext } from '@/contexts/Context'

const createAddressSchema = z.object({
  cep: z.string().min(9),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().length(2),
  paymentMethod: z.string().min(1),
})

export type CreateAddressSchema = z.infer<typeof createAddressSchema>

export default function AddressAndPaymentContainer() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<CreateAddressSchema>({
    resolver: zodResolver(createAddressSchema),
  })

  const navigate = useNavigate()
  const [selectedPayment, setSelectedPayment] = useState('')
  const { showCoffeeLoading, selectedUF, selectedCity } = useMyContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value)
  }

  const submitData = (data: CreateAddressSchema) => {
    JSON.parse(localStorage.getItem('checkoutData') || '{}')
    localStorage.setItem('checkoutData', JSON.stringify(data))
    localStorage.setItem('cart', JSON.stringify([]))
    window.dispatchEvent(new Event('storage'))
    showCoffeeLoading()
    navigate('/success')
  }

  const cep = watch('cep')

  const zipCodeMask = () => {
    const value = cep.replace(/\D/g, '')
    const newValue = value.replace(/^(\d{5})(\d)/, '$1-$2')
    setValue('cep', newValue)
  }

  const getData = async () => {
    if (cep?.length === 9) {
      const response = await getDataByCep(cep)
      setValue('street', response.logradouro)
      setValue('neighborhood', response.bairro)
      setValue('city', response.localidade)
      setValue('uf', response.uf)
      setValue('complement', response.complemento)
      return setFocus('number')
    }
    setValue('city', selectedCity || '')
    setValue('uf', selectedUF || '')
  }

  useEffect(() => {
    getData()
  }, [cep])

  const hasErrors = Object.keys(errors).length > 0

  return (
    <Styled.ContainerLeft>
      <form id="user-data" onSubmit={handleSubmit(submitData)}>
        <h2>Complete seu pedido</h2>
        <Styled.Container>
          <Styled.HeaderContainer>
            <Icon.MapPinLine size={22} color="#C47F17" />
            <div className="texts">
              <h4>Endereço de Entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Styled.HeaderContainer>
          {hasErrors && (
            <span className="has-empty-fields">
              Preencha os campos obrigatórios
            </span>
          )}
          <Styled.InputsContainer>
            <InputField
              type="text"
              placeholder="CEP"
              maxWidth="12.5rem"
              name="cep"
              register={register}
              onKeyUp={zipCodeMask}
              errors={errors}
            />
            <InputField
              type="text"
              placeholder="Rua"
              name="street"
              register={register}
              errors={errors}
            />
            <Styled.InputsWrapper>
              <InputField
                type="text"
                placeholder="Número"
                maxWidth="12.5rem"
                name="number"
                register={register}
                errors={errors}
              />
              <InputField
                type="text"
                placeholder="Complemento"
                isOptional
                name="complement"
                register={register}
                errors={errors}
              />
            </Styled.InputsWrapper>
            <Styled.InputsWrapper>
              <InputField
                type="text"
                placeholder="Bairro"
                maxWidth="12.5rem"
                name="neighborhood"
                register={register}
                errors={errors}
              />
              <InputField
                type="text"
                placeholder="Cidade"
                name="city"
                register={register}
                errors={errors}
              />
              <InputField
                type="text"
                placeholder="UF"
                maxWidth="3.75rem"
                maxLength={2}
                name="uf"
                register={register}
                errors={errors}
              />
            </Styled.InputsWrapper>
          </Styled.InputsContainer>
        </Styled.Container>
        <Styled.Container>
          <Styled.HeaderContainer>
            <Icon.CurrencyDollar size={22} color="#8047F8" />
            <div className="texts">
              <h4>Pagamento</h4>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Styled.HeaderContainer>
          <Styled.PaymentContainer className="payment">
            {React.Children.toArray(
              paymentMethods.map(({ id, title, icon }) => (
                <PaymentItem
                  id={id}
                  title={title}
                  icon={icon}
                  onChange={handleChange}
                  checked={selectedPayment === id}
                  register={register}
                  errors={errors}
                />
              )),
            )}
          </Styled.PaymentContainer>
        </Styled.Container>
      </form>
    </Styled.ContainerLeft>
  )
}
