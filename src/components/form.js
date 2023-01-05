import axios from 'axios'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'
import { Button } from '../moleculas/button-input'

const Form = ({ data }) => {
  const {
    tekstNadPierwszymPolem,
    tekstBleduPierwszePole,
    tekstNadDrugimPolem,
    tekstBleduDrugiePole,
    tekstNadTrzecimPolem,
    tekstBleduTrzeciePole,
    tekstNadPolemWiadomosci,
    tekstBleduPoleWiadomosci,
    tekstPrzyPolitycePrywatnosci,
    tekstPoPoprawnymWyslaniuFormularza,
    tekstPoBledzieWysylkaFormularza,
    tekstPrzycisku
  } = data
  const {
    register,
    control,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange' // "onChange"
  })

  const formMessages = {
    blank: {
      text: '',
      type: ''
    },
    success: {
      text: tekstPoPoprawnymWyslaniuFormularza || 'Poprawnie wysłano wiadomość',
      type: 'success'
    },
    error: {
      text:
        tekstPoBledzieWysylkaFormularza ||
        'Coś poszło nie tak. Spróbuj jeszcze raz',
      type: 'error'
    }
  }

  const [message, setMessage] = React.useState(formMessages.blank)

  const onSubmit = (data, e) => {
    let url = 'http://www-data.fizjoexpress.pl/wp-json/contact-form-7/v1/contact-forms/963/feedback'
    let body = new FormData()
    body.append('your-email', data.email)
    body.append('your-name', data.nameAndSurname)
    body.append('your-telephon', data.phoneNumber)
    body.append('your-message', data.message)
    axios.post(url, body)
      .then((res) => {
        if (res.status === 200) {
          setMessage(formMessages.success)
          reset()
          setTimeout(() => {
            setMessage(formMessages.blank)
          }, 7500)
        } else {
          setMessage(formMessages.error)
          setTimeout(() => {
            setMessage(formMessages.blank)
            reset()
          }, 7500)
        }
      })
      .catch((err) => {
        reset()
        setMessage(formMessages.error)
        setTimeout(() => {
          setMessage(formMessages.blank)
        }, 7500)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper>
          <div className='wrapper'>
            <label htmlFor='nameAndSurname'>{tekstNadPierwszymPolem}</label>
            <p
              className={`error ${errors.nameAndSurname?.type === 'required' && 'error--show'
                }`}>
              {tekstBleduPierwszePole}
            </p>
            <p
              className={`error ${errors.nameAndSurname?.type === 'minLength' && 'error--show'
                }`}>
              Minimum 3 znaki.
            </p>
            <p
              className={`error ${errors.nameAndSurname?.type === 'maxLength' && 'error--show'
                }`}>
              Maksimum 50 znaków.
            </p>
          </div>
          <input
            id='nameAndSurname'
            className={errors?.nameAndSurname && 'input--error'}
            {...register('nameAndSurname', {
              required: true,
              minLength: 3,
              maxLength: 50
            })}
          />
        </FieldWrapper>
        <FieldWrapper>
          <div className='wrapper'>
            <label htmlFor='email'>{tekstNadDrugimPolem}</label>
            <p
              className={`error ${errors.email?.type === 'required' && 'error--show'
                }`}>
              {tekstBleduDrugiePole}
            </p>
            <p
              className={`error ${errors?.email?.type === 'pattern' && 'error--show'
                }`}>
              {errors?.email?.message}
            </p>
          </div>
          <input
            type='email'
            id='email'
            className={errors?.email && 'input--error'}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Nieprawidłowy adres E-mail'
              }
            })}
          />
        </FieldWrapper>
        <FieldWrapper>
          <div className='wrapper'>
            <label htmlFor='phoneNumber'>{tekstNadTrzecimPolem}</label>
          </div>
          <Controller
            name='phoneNumber'
            control={control}
            render={({ field }) => (
              <PatternFormat
                {...field}
                // ref={null} is getting rid of the error about forwardRef in Controller component
                ref={null}
                id='phoneNumber'
                format='###-###-###'
                allowEmptyFormatting
                mask='_'
                required
              />
            )}
          />
          {errors.phoneNumber && (
            <p className={`error`}>{tekstBleduTrzeciePole}</p>
          )}
        </FieldWrapper>

        <FieldWrapper>
          <div className='wrapper'>
            {/* , ,
            , ,
            tekstPoPoprawnymWyslaniuFormularza, tekstPoBledzieWysylkaFormularza,
             */}
            <label htmlFor='message'>{tekstNadPolemWiadomosci}</label>
            <p
              className={`error ${errors.message?.type === 'required' && 'error--show'
                }`}>
              {tekstBleduPoleWiadomosci}
            </p>
            <p
              className={`error ${errors?.message?.type === 'minLength' && 'error--show'
                }`}>
              Minimum 5 znaków.
            </p>
          </div>
          <textarea
            className={errors?.message && 'input--error'}
            id='message'
            rows='4'
            {...register('message', { required: true, minLength: 5 })}
          />
        </FieldWrapper>
        <FieldWrapper>
          <div className='wrapper wrapper--checkbox'>
            <input
              type='checkbox'
              id='privacyPolicy'
              className={errors?.privacyPolicy && 'input--error'}
              {...register('privacyPolicy', { required: true })}
            />
            <label
              className={`checkbox ${errors?.privacyPolicy && 'input--error'}`}
              htmlFor='privacyPolicy'
              dangerouslySetInnerHTML={{ __html: tekstPrzyPolitycePrywatnosci }}
            />
          </div>
        </FieldWrapper>
        <Button
          ariaDisabled={errors && Object.keys(errors).length !== 0}
          disabled={errors && Object.keys(errors).length !== 0}
          type='submit'
        >
          {tekstPrzycisku}
        </Button>
      </form>
      <p
        className={`form-message ${message.type !== '' && 'form-message--show'
          } ${message.type === 'error' ? 'form-message--show__error' : ''}`}>
        {message?.text && message.text}
      </p>
    </>
  )
}

export default Form

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;

    &--checkbox {
      input[type='checkbox'] {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      label {
        position: relative;
        padding-left: 2rem;
        &.input--error {
          outline: 2px solid #b11515;
        }
      }

      label:before {
        content: '';
        display: inline-block;
        width: 19px;
        height: 19px;
        border: 1px solid var(--color-white);
        background-color: var(--color-white);
        background-clip: content-box;
        position: absolute;
        left: 0;
        top: 3px;
        transition: all 0.15s ease-out;
      }

      label:after {
        content: '';
        width: 11px;
        height: 11px;
        background-color: #2b2b2d;
        position: absolute;
        left: 5px;
        top: 8px;
        transform-origin: center center;
        transform: scale(0);
        transition: transform 0.15s ease-out;
      }

      input[type='checkbox']:checked + label:after {
        transform: scale(1);
      }

      input[type='checkbox']:focus-visible + label {
        outline: 2px solid var(--color-blue);
      }
    }
  }

  label {
    padding: 5px 20px 6px;
    font-size: 12px;
    line-height: 1.5;
    color: var(--color-blue);
  }
`
