import Head from 'next/head';

const _Head = (): JSX.Element => (
  <Head>
    {process.env.NODE_ENV === 'production' && (
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-90990854-1"
      ></script>
    )}
    {process.env.NODE_ENV === 'production' && (
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || []; 
                function gtag() {
                  window.dataLayer.push(arguments)
                }
                gtag('js', new Date()); gtag('config', 'UA-90990854-1');
              `,
        }}
      />
    )}
    <title>Erik Gomez - Front-End Engineer - Los Angeles, CA</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    />
  </Head>
);

export default _Head;
