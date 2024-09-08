import StreamVideoProvider from "@/providers/StreamClientProvider"
import { ReactNode } from "react"

import { Toaster } from "@/components/ui/toaster"


const layout = ({children}: {children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
      {children}
      </StreamVideoProvider>
    
    
    </main>
  )
}

export default layout