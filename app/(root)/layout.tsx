import StreamVideoProvider from "@/providers/StreamClientProvider"
import { ReactNode } from "react"


import { Toaster } from "@/components/ui/toaster"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video call",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};


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