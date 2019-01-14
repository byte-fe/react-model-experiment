import React from 'react'
import { Container, NextAppContext, AppProps, DefaultAppIProps } from 'next/app'
import { Model } from 'react-modelx'

import Layout from '../components/layout'

import Home from '../model/home.model'
import Shared from '../model/shared.model'
import Counter from '../model/counter.model'
import Todo from '../model/todo.model'
import { RouterProps } from 'next/router'

const models = {
  Home,
  Shared,
  Counter,
  Todo
}

let initialModel: any

export const { getInitialState, useStore, getState } = Model(models)

const MyApp = (props: AppProps & DefaultAppIProps & RouterProps) => {
  if (!(process as any).browser) {
    initialModel = Model(models, (props as any).initialModels) // TypeScript Support will release later.
  } else {
    initialModel =
      (props as any).initialModel || Model(models, (props as any).initialModels)
  }
  const { Component, pageProps, router } = props
  return (
    <Container>
      <Layout>
        <Component {...pageProps} useStore={useStore} getState={getState} />
      </Layout>
    </Container>
  )
}

MyApp.getInitialProps = async (context: NextAppContext) => {
  if (!(process as any).browser) {
    const initialModels = await getInitialState()
    return { initialModels }
  } else {
    return { initialModel }
  }
}

export default MyApp
