import React from "react"

import MeganNavbar from "./MeganNavbar"
import TopBanner from "./TopBanner"
import BigQuote from "./BigQuote"

function Home() {
  return (
    <div>
      <MeganNavbar currentPage="Home" />
      <TopBanner />
      <BigQuote />
      {/* <ButtonSection />
      <Issues />
      <NewsSection />
      <EmailPrompt />
      <Footer /> */}
    </div>
  )
}

export default Home;