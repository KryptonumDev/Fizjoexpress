import * as React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../atoms/container'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
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
          <Form />
        </FormContainer>
      </TwoColumnWithFormContainer>
    </main>
  )
}

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onBlur' // "onChange"
  })
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input
          placeholder='bill'
          {...register('firstName', { required: true, maxLength: 2 })}
        />
        {errors.firstName && <p>This is required</p>}
      </div>

      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input
          placeholder='luo'
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <p>This is required</p>}
      </div>

      <div>
        <label htmlFor='email' placeholder='bluebill1049@hotmail.com'>
          Email
        </label>
        <input {...register('email', { required: true })} />
        {errors.email && <p>This is required</p>}
      </div>
      <input type='submit' />
    </form>
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
  border: 2px solid var(--color-yellow);
  align-self: stretch;
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
          tekstPrzycisku
          tekstPrzyPolitycePrywatnosci
          tekstPoPoprawnymWyslaniuFormularza
          tekstPoBledzieWysylkaFormularza
          tekstNadTrzecimPolem
          tekstNadPolemWiadomosci
          tekstNadPierwszymPolem
          tekstNadDrugimPolem
          tekstBleduTrzeciePole
          tekstBleduPolitykaPrywatnosci
          tekstBleduPoleWiadomosci
          tekstBleduPierwszePole
          tekstBleduDrugiePole
        }
      }
    }
  }
`

export default ContactPage
