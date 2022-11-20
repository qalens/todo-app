import { Card } from '@material-tailwind/react'
import Head from 'next/head'
import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container mx-auto my-10'>
        <Card>
        <TodoList/>
        </Card>
      </main>
    </div>
  )
}
