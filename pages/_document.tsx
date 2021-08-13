import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { v4 as uuid } from 'uuid'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* eslint-disable @next/next/no-sync-scripts */}
          <script src={`${process.env.REMOTE_APP_URL__CONTACT}?rnd=${uuid().replace(/-/gi, "")}`} />
          <script src={`${process.env.REMOTE_APP_URL__ABOUT}?rnd=${uuid().replace(/-/gi, "")}`} />
          {/* eslint-enable @next/next/no-sync-scripts */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument