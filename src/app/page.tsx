import Logo from "@/components/header/logo";
import Title from "@/components/header/title";
import Navbar from "@/components/header/navbar/indext";
import SearchPart from "@/components/main/searchtabtitle";
import PopularEstake from "@/components/main/popularestake";


const Header = () => {
  return (
    <div className="w-[100%] h-[100px] flex justify-between items-center p-10">
      <Logo />
      <Title />
      <Navbar />
    </div>
  )
}

const Main = () => {
  return (<div>

    <div className="w-[100%] h-[300px] md:h-[500px] bg-cover bg-no-repeat bg-center bg-[url('/assets/background.jpg')]">
      <div className="w-[100%] h-[100%] bg-[black] bg-opacity-50">
        <SearchPart />
      </div>
    </div>

    <PopularEstake />

  </div>
  )
}

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    </footer>

  )
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
