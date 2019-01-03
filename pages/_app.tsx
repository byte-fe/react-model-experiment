import React from 'react'
import App, { Container, NextAppContext } from 'next/app'
import { Provider, Model } from 'react-modelx'

import Layout from '../components/layout'

import Home from '../model/home.model'
import Shared from '../model/shared.model'
import Counter from '../model/counter.model'
import Todo from '../model/todo.model'

const models = {
  Home,
  Shared,
  Counter,
  Todo
}

export const { useStore } = Model(models)

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }: NextAppContext) {
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
