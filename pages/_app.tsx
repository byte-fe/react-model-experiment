import React from 'react'
import { Container, NextAppContext, AppProps, DefaultAppIProps } from 'next/app'
import { Model } from 'react-modelx'

import Layout from '../components/layout'

import { models, getInitialState, ModelsProp } from '../model/index.model'
import { RouterProps } from 'next/router'

let persistModel: any

interface ModelsProps {
  initialModels: ModelsProp
  persistModel: ModelsProp
}

const MyApp = (
  props: AppProps & DefaultAppIProps & RouterProps & ModelsProps
) => {
  if (!(process as any).browser) {
    persistModel = Model(models, props.initialModels) // TypeScript Support will release later.
  } else {
    persistModel =
      (props as any).persistModel || Model(models, props.initialModels)
  }
  const { Component, pageProps, router } = props
  return (
    <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  )
}

MyApp.getInitialProps = async (context: NextAppContext) => {
  if (!(process as any).browser) {
    const initialModels = await getInitialState()
    return { initialModels }
  } else {
    return { persistModel }
  }
}

export default MyApp
