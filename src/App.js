import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Harrie's store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using Pronef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
};

export default App;
