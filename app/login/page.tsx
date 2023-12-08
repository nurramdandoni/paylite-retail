import Header from "@/components/header/header"
import Cards from "@/components/card-login/cards"
import Styles from "../login/Login.module.css"
import { Poppins } from 'next/font/google'
// Subsets are really important. CHECK BELOW FOR MORE INFO
const poppins = Poppins({
    subsets:["latin"],
    style:"normal",
    weight:"400"
})

export default function Login(){
    return (
        <div className={poppins.className}>
            <Header></Header>
            <div className={Styles['card-login']}>
                <Cards
                 src="https://paylite.co.id/assets/img/favicon.png"
                 title="Login Account"
                 footerName="Visit Official Website"
                 footerLink="https://paylite.co.id"></Cards>
            </div>
        </div>
    )
}