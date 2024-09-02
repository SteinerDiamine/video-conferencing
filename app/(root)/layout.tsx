import { ReactNode } from "react"

const layout = ({children}: {children: ReactNode }) => {
  return (
    <main>
      Navbar
      {children}
      fotter
    </main>
  )
}

export default layout