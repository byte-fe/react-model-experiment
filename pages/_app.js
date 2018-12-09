import React from 'react'
import App, { Container } from 'next/app'
import { Provider, registerModel } from 'react-modelx'

import Layout from '../components/layout'

import Home from '../model/home.model'
import Shared from '../model/shared.model'
import Counter from '../model/counter.model'
import Todo from '../model/todo.model'

registerModel({
  Home,
  Shared,
  Counter,
  Todo
})

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}
