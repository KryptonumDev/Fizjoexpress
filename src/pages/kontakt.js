import * as React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../atoms/container'
import styled from 'styled-components'
import { textParser } from '../helpers/text-parser'
import Form from '../components/form'

const ContactPage = ({
  data: {
    wpPage: { kontakt }
  }
}) => {
  const { kontaktInformacje, formularzKontaktowy } = kontakt
  return (
    <main id='content'>
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

const TwoColumnWithFormContainer = styled(Container)`
  padding: clamp(40px, ${(100 / 1366) * 100}vw, 100px)
    clamp(15px, ${(170 / 1366) * 100}vw, 170px)
    clamp(50px, ${(100 / 1366) * 100}vw, 100px);
  min-height: 700px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: clamp(120px, ${(215 / 1366) * 100}vw, 215px);

  @media (max-width: 1230px) {
    padding: clamp(40px, ${(80 / 1366) * 100}vw, 80px)
      clamp(15px, ${(70 / 1366) * 100}vw, 70px)
      clamp(50px, ${(80 / 1366) * 80}vw, 100px);
    gap: clamp(100px, ${(135 / 1366) * 100}vw, 135px);
  }

  @media (max-width: 880px) {
    flex-direction: column;
    max-width: 540px;
    gap: 45px;
  }
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
      @media (max-width: 540px) {
        padding-top: 26px;
        margin-bottom: 24px;
      }
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
  flex: 1 0 405px;
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
    @media (max-width: 540px) {
      padding: 21px 16px;
    }
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
    @media (max-width: 540px) {
      bottom: -24px;
      left: 16px;
      max-width: calc(100% - 32px);
    }
    font-size: 12px;
    line-height: 1.5;
    &--show {
      opacity: 1;
      &__error {
        color: #b11515;
      }
    }
  }

  padding: 4px 40px 0px;

  @media (max-width: 510px) {
    padding: 4px 16px 0px;
  }

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
    line-height: 1.5;
    &--show {
      opacity: 1;
    }
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
