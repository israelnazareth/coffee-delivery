import React, { useEffect, useState } from 'react'

import * as Styled from './styles'
import * as Icon from '@phosphor-icons/react'
import { InputField } from '@/components/InputField'
import { PaymentItem } from '@/components/Select'
import { paymentMethods } from '@/constants'
import { FieldValues, useForm } from 'react-hook-form'
import { getDataByCep } from '@/services/locationAPI'

export default function AddressAndPaymentContainer() {
  const { register, handleSubmit, watch, setValue } = useForm()
  const [selectedPayment, setSelectedPayment] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value)
  }

  const submitData = (data: FieldValues) => {
    console.log({ ...data, selectedPayment })
  }

  const getData = async () => {
    const cep = watch('cep')
    if (cep.length === 8) {
      const response = await getDataByCep(cep)
      setValue('street', response.logradouro)
      setValue('neighborhood', response.bairro)
      setValue('city', response.localidade)
      setValue('uf', response.uf)
      setValue('complement', response.complemento)
    }
  }

  useEffect(() => {
    getData()
  }, [watch('cep')])

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
          <Styled.InputsContainer>
            <InputField
              type="text"
              placeholder="CEP"
              maxWidth="12.5rem"
              name="cep"
              register={register}
              maxLength={8}
            />
            <InputField
              type="text"
              placeholder="Rua"
              name="street"
              register={register}
            />
            <Styled.InputsWrapper>
              <InputField
                type="text"
                placeholder="Número"
                maxWidth="12.5rem"
                name="number"
                register={register}
              />
              <InputField
                type="text"
                placeholder="Complemento"
                isOptional
                name="complement"
                register={register}
              />
            </Styled.InputsWrapper>
            <Styled.InputsWrapper>
              <InputField
                type="text"
                placeholder="Bairro"
                maxWidth="12.5rem"
                name="neighborhood"
                register={register}
              />
              <InputField
                type="text"
                placeholder="Cidade"
                name="city"
                register={register}
              />
              <InputField
                type="text"
                placeholder="UF"
                maxWidth="3.75rem"
                maxLength={2}
                name="uf"
                register={register}
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
                />
              )),
            )}
          </Styled.PaymentContainer>
        </Styled.Container>
      </form>
    </Styled.ContainerLeft>
  )
}
