import * as React from 'react'
import Link from 'next/link'

const Layout: React.FC = props => {
  return (
    <div>
      <div style={styles.header}>
        <Link href="basic">
          <span>Compare Hooks and Class</span>
        </Link>
        <Link href="single-hook">
          <span>Single Hook</span>
        </Link>
        <Link href="index">
          <span>Advance</span>
        </Link>
        <Link href="todo">
          <span>Todo List Demo</span>
        </Link>
      </div>
      <div style={styles.content}>{props.children}</div>
      <style>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
    </div>
  )
}

const styles = {
  header: {
    width: '100%',
    height: '6rem',
    backgroundColor: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column' as 'column'
  }
}

export default Layout
