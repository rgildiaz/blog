import React from "react"
import { Layout } from "./layout"

type AppProps = {
  children: React.ReactNode
}

export const App = ({ children }: AppProps) => {
  return <Layout>{children}</Layout>
}
