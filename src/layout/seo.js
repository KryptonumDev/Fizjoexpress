import React from 'react'
import Logo from './../images/logo.png'

const siteUrl = 'https://fizjoexpress.pl'

export default function Seo({ post = false, seo }) {
  const canonical = siteUrl + seo.canonical

  return (
    <>
      <meta charSet='utf-8' />
      <meta name='robots' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      />
      <meta property='og:site_name' content={seo.opengraphSiteName} />
      {/* <meta name="google-site-verification" content="M2kghTKPmXOB2ezGLw7ShbO3sdW6rMn_uhsSVbHCt7I" /> */}

      {canonical === '/blog/nowosci/'
        ? <>
          <link rel='canonical' href={'/blog/'} />
          <meta property='og:url' content={'/blog/'} />
        </> : <>
          {canonical ? (
            <>
              <link rel='canonical' href={canonical} />
              <meta property='og:url' content={canonical} />
            </>
          ) : null}
        </>}

      {seo?.title ? (
        <>
          <title>{seo.title}</title>
          <meta property='twitter:title' content={seo.title} />
          <meta property='og:title' content={seo.title} />
        </>
      ) : null}

      {seo?.metaDesc ? (
        <>
          <meta name='description' content={seo.metaDesc} />
          <meta property='twitter:description' content={seo.metaDesc} />
          <meta property='og:description' content={seo.metaDesc} />
        </>
      ) : null}

      {seo.opengraphImage?.localFile?.publicURL ? (
        <>
          <meta
            property='og:image'
            content={siteUrl + seo.opengraphImage.localFile.publicURL}
          />
          <meta
            property='twitter:image'
            content={siteUrl + seo.opengraphImage.localFile.publicURL}
          />
        </>
      ) : null}

      {post ? (
        <meta property='og:type' content='article' />
      ) : (
        <meta property='og:type' content='website' />
      )}
      {post && (
        <meta
          property='article:modified_time'
          content={seo.opengraphModifiedTime}
        />
      )}
      {post && (
        <meta
          property='article:published_time'
          content={seo.opengraphPublishedTime}
        />
      )}

      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalBusiness',
          ispartof: {
            '@type': 'Organization',
            name: 'FIZJOEXPRESS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ'
          },
          "additionalProperty": {
            "@type": "Phisioteraphy",
            "name": "FIZJOEXPRESS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ"
          },
          name: 'Fizjoexpress by Rehalthy',
          legalName: 'FIZJOEXPRESS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          // "image": "https://fizjoexpress.pl/superzdjecelokalu.jpg",
          url: 'https://fizjoexpress.pl/',
          website: {
            '@type': 'WebSite',
            name: 'Fizjoexpress',
            url: 'https://fizjoexpress.pl/'
          },
          vatId: 'PL7011114194',
          telephone: '510520120',
          email: 'kontakt@fizjoexpress.pl',
          priceRange: '100-1000zł',
          paymentAccepted: 'Gotówka, Karta',
          currenciesAccepted: 'PLN',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Łucka 20 lok. 94',
            addressLocality: 'Warsaw',
            postalCode: '00-842',
            addressCountry: 'PL'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 52.232335,
            longitude: 20.9870986
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Friday', 'Thursday'],
              opens: '15:00',
              closes: '20:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Tuesday', 'Wednesday'],
              opens: '10:00',
              closes: '20:00'
            }
          ],
          keywords:
            'Fizjoterapia Warszawa, Fizjoterapia Warszawa Centrum, Fizjoterapia Warszawa Wola, Fizjoterapia Warszawa Mokotów, Masaż leczniczy Warszawa, Basic Treatment Protocol®, Ból Kręgosłupa, Choroby Kręgosłupa',
          sameAs: [
            'https://www.facebook.com/rehealthy',
            'https://www.instagram.com/arkadiuszmartyniuk/',
            'https://www.youtube.com/@arkadiuszmartyniukofficial1469',
            'https://www.linkedin.com/in/arkadiusz-piotr-martyniuk-840663a3/',
            'https://booksy.com/pl-pl/163820_fizjoexpress-by-rehealthy_zdrowie_3_warszawa'
          ],
          employee: {
            '@type': 'Person',
            name: 'Jonasz Siwek',
            jobTitle: 'Fizjoterapeuta',
            alumniOf:
              'Wychowanie Fizyczne w Warszawie oraz Wyższa Szkoła Rehabilitacji — studia z zakresu fizjoterapii',
            sameAs: [
              'https://facebook.com/jonasz',
              'https://www.linkedin.com/company/jonasz'
            ]
          },
          employee: {
            '@type': 'Person',
            name: 'Edgar Walaszczyk',
            jobTitle: 'Fizjoterapeuta',
            alumniOf: 'Uniwersytet Rzeszowski',
            sameAs: [
              'https://facebook.com/edgar',
              'https://www.linkedin.com/company/edgar'
            ]
          }
        })}
      </script>

      {post && (
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://fizjoexpress.pl/blog/' + post.slug + '/'
            },
            headline: post.title,
            name: seo.title,
            description: seo.metaDesc,
            image: seo.opengraphImage.localFile.publicURL,
            keywords: seo.metaKeywords,
            // "author": {
            //     "@type": "Person",
            //     "name": "Edgar Walaszczyk",
            //     "jobTitle": "Fizjoterapeuta",
            //     "alumniOf": "Uniwersytet Rzeszowski",
            //     "sameAs": [
            //         "https://facebook.com/edgar",
            //         "https://www.linkedin.com/company/edgar"
            //     ]
            // },
            publisher: {
              '@type': 'Organization',
              name: 'Fizjoexpress',
              website: {
                '@type': 'Website',
                url: 'https://fizjoexpress.pl/'
              },
              logo: {
                '@type': 'ImageObject',
                url: Logo
              }
            },
            datePublished: seo.opengraphPublishedTime,
            dateModified: seo.opengraphModifiedTime
          })}
        </script>
      )}
    </>
  )
}
