import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const Layout = ({ children}: any) => {
    return(
        <>
        <Header/>
        { children }
        <Footer/>
        </>
    )
}