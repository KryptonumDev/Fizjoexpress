import * as React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../atoms/container'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { textParser } from '../helpers/text-parser'

const ContactPage = ({
  data: {
    wpPage: { kontakt }
  }
}) => {
  const { kontaktInformacje, formularzKontaktowy } = kontakt
  return (
    <main>
      <TwoColumnWithFormContainer>
        <TextContainer>
          <h1
            className='small-header'
            dangerouslySetInnerHTML={{
              __html: textParser(kontaktInformacje.malyNaglowekNadTytulem)
            }}
          />
          <span
            className='sub-title'
            dangerouslySetInnerHTML={{
              __html: textParser(kontaktInformacje.tytulSekcji)
            }}
          />
          <p
            className='text'
            dangerouslySetInnerHTML={{
              __html: textParser(kontaktInformacje.akapitTekstuPodTytulem)
            }}
          />

          <p
            className='text text--faded'
            dangerouslySetInnerHTML={{
              __html: textParser(kontaktInformacje.akapitTekstuNadPrzyciskiem)
            }}
          />
          <a
            className='read-more btn--triangle'
            target={kontaktInformacje.link.target}
            href={kontaktInformacje.link.url}>
            {kontaktInformacje.link.title}
          </a>
        </TextContainer>
        <FormContainer>
          <Form data={formularzKontaktowy} />
        </FormContainer>
      </TwoColumnWithFormContainer>
    </main>
  )
}

const formMessages = {
  blank: {
    text: '',
    type: ''
  },
  success: {
    text: 'Poprawnie wysłano wiadomość',
    type: 'success'
  },
  error: {
    text: 'Coś poszło nie tak. Spróbuj jeszcze raz',
    type: 'error'
  }
}

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
    tekstBleduPolitykaPrywatnosci,
    tekstPoPoprawnymWyslaniuFormularza,
    tekstPoBledzieWysylkaFormularza,
    tekstPrzycisku
  } = data
  const {
    register,
    control,
    reset,
    resetField,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange' // "onChange"
  })

  const [message, setMessage] = React.useState(formMessages.blank)

  const onSubmit = (data, e) => {
    console.log('Onsubmit', data, e)
    setMessage(formMessages.success)
    setTimeout(() => {
      setMessage(formMessages.blank)
    }, 8000)
    reset()
    resetField('phoneNumber')
  }
  const onError = (errors, e) => {
    console.log('ERRORS', errors, e)
    // setMessage(formMessages.error.text)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FieldWrapper>
          <div className='wrapper'>
            <label htmlFor='nameAndSurname'>{tekstNadPierwszymPolem}</label>
            <p
              className={`error ${
                errors.nameAndSurname?.type === 'required' && 'error--show'
              }`}>
              {tekstBleduPierwszePole}
            </p>
            <p
              className={`error ${
                errors.nameAndSurname?.type === 'minLength' && 'error--show'
              }`}>
              Minimum 3 znaki.
            </p>
            <p
              className={`error ${
                errors.nameAndSurname?.type === 'maxLength' && 'error--show'
              }`}>
              maxLength.
            </p>
          </div>
          <input
            id='nameAndSurname'
            className={errors?.nameAndSurname && 'input--error'}
            {...register('nameAndSurname', {
              required: true,
              minLength: 2,
              maxLength: 50
            })}
          />
        </FieldWrapper>
        <FieldWrapper>
          <div className='wrapper'>
            <label htmlFor='email'>{tekstNadDrugimPolem}</label>
            <p
              className={`error ${
                errors.email?.type === 'required' && 'error--show'
              }`}>
              {tekstBleduDrugiePole}
            </p>
            <p
              className={`error ${
                errors?.email?.type === 'pattern' && 'error--show'
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
                message: 'invalid email address'
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
            rules={{ required: true }}
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
              className={`error ${
                errors.message?.type === 'required' && 'error--show'
              }`}>
              {tekstBleduPoleWiadomosci}
            </p>
            <p
              className={`error ${
                errors?.message?.type === 'minLength' && 'error--show'
              }`}>
              Minimum 10 znaków.
            </p>
          </div>
          <textarea
            className={errors?.message && 'input--error'}
            id='message'
            rows='4'
            {...register('message', { required: true, minLength: 10 })}
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
        <input
          aria-disabled={errors && Object.keys(errors).length !== 0}
          disabled={errors && Object.keys(errors).length !== 0}
          type='submit'
          value={tekstPrzycisku}
        />
      </form>
      <p
        className={`form-message ${
          message.type !== '' && 'form-message--show'
        } ${message.type === 'error' ? 'form-message--show__error' : ''}`}>
        {message?.text && message.text}
      </p>
    </>
  )
}

const TwoColumnWithFormContainer = styled(Container)`
  padding: clamp(40px, ${(100 / 1366) * 100}vw, 100px)
    clamp(15px, ${(170 / 1366) * 100}vw, 170px)
    clamp(50px, ${(100 / 1366) * 100}vw, 100px);
  min-height: 700px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: clamp(120px, ${(215 / 1366) * 100}vw, 215px);
`

const TextContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .sub-title {
    margin-bottom: 10px;
  }

  .text {
    margin-bottom: 20px;
    p + p {
      margin-top: 2em;
    }

    &--faded {
      color: var(--color-text-light-gray);
      padding-top: 30px;
      margin-bottom: 40px;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--color-darker-light-gray);
      }
    }
  }
`

const FormContainer = styled.div`
  flex: 1 1 50%;
  background-color: var(--color-yellow);
  align-self: stretch;
  position: relative;

  button[type='submit'],
  input[type='button'],
  input[type='submit'] {
    -webkit-appearance: none;
    margin-top: 16px;
  }

  input[type='submit'] {
    padding: 31px 16px;
    width: 100%;
    background-color: var(--color-blue);
    color: var(--color-white);
    font-weight: bold;
    transition: opacity 0.15s ease-out;
    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .form-message {
    color: var(--color-blue);
    opacity: 0;
    transition: color 0.15s ease-out, opacity 0.15s ease-out;
    position: absolute;
    bottom: -32px;
    left: 40px;
    font-size: 12px;
    &--show {
      opacity: 1;
      &__error {
        color: #b11515;
      }
    }
  }

  padding: 4px 40px 0px;

  input,
  textarea {
    display: block;
    width: 100%;
    border-radius: 0;
    border: 0;
    padding: 11px 20px;
    font-size: 12px;
    line-height: 1.5;
    background-color: var(--color-white);
    outline-offset: -2px;
    outline: none;
    &.input--error {
      outline: 2px solid #b11515;
    }
    &:focus-visible,
    &:active {
      outline: 2px solid var(--color-blue);
    }
    &[type='submit']:focus-visible {
      outline: 2px solid var(--color-white);
    }
  }

  .error {
    color: #b11515;
    opacity: 0;
    transition: opacity 0.15s ease-out;
    display: inline;
    position: absolute;
    right: 0;
    font-size: 12px;
    &--show {
      opacity: 1;
    }
  }
`

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
    color: var(--color-blue);
  }
`

export const contactPageQuery = graphql`
  query {
    wpPage(id: { eq: "cG9zdDo0MQ==" }) {
      kontakt {
        kontaktInformacje {
          akapitTekstuNadPrzyciskiem
          akapitTekstuPodTytulem
          malyNaglowekNadTytulem
          tytulSekcji
          link {
            target
            url
            title
          }
        }
        formularzKontaktowy {
          tekstNadPierwszymPolem
          tekstBleduPierwszePole
          tekstNadDrugimPolem
          tekstBleduDrugiePole
          tekstNadTrzecimPolem
          tekstBleduTrzeciePole
          tekstNadPolemWiadomosci
          tekstBleduPoleWiadomosci
          tekstPrzyPolitycePrywatnosci
          tekstBleduPolitykaPrywatnosci
          tekstPoPoprawnymWyslaniuFormularza
          tekstPoBledzieWysylkaFormularza
          tekstPrzycisku
        }
      }
    }
  }
`

export default ContactPage
