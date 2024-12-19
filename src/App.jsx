import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrap}>

        <Sidebar />

        <main>
          <Post 
          author='Teste'
          content='Teste de conteudo'
          />

          <Post 
          author='Teste'
          content='Teste de conteudo'
          />
        </main>
      </div>
    </div>
  )
}