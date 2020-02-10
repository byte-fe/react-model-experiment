import React from 'react'
import { AppProps, AppContext, AppInitialProps } from 'next/app'
import { Model } from 'react-model'

import Layout from '../components/layout'

import { models, getInitialState, Models } from '../model/index.model'

let persistModel: Models

interface ModelsProps {
  initialModels: Models
  persistModel: Models
}

const MyApp = (props: AppProps & AppInitialProps & ModelsProps) => {
  if ((process as any).browser) {
    // First come in: initialModels
    // After that: persistModel
    persistModel = props.persistModel || Model(models, props.initialModels)
  }
  const { Component, pageProps } = props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async (context: AppContext) => {
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
