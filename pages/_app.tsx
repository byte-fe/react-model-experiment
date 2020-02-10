import React from 'react'
import { Container, NextAppContext, AppProps, DefaultAppIProps } from 'next/app'
import { Model } from 'react-model'

import Layout from '../components/layout'

import { models, getInitialState, Models } from '../model/index.model'
import { RouterProps } from 'next/router'

let persistModel: Models

interface ModelsProps {
  initialModels: Models
  persistModel: Models
}

const MyApp = (
  props: AppProps & DefaultAppIProps & RouterProps & ModelsProps
) => {
  if ((process as any).browser) {
    // First come in: initialModels
    // After that: persistModel
    persistModel = props.persistModel || Model(models, props.initialModels)
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
    const initialModels = context.Component.getInitialProps
      ? await context.Component.getInitialProps(context.ctx)
      : await getInitialState({ modelName: 'Home' })
    return { initialModels }
  } else {
    return { persistModel }
  }
}

export default MyApp
