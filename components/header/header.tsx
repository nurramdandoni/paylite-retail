import Link from "next/link"
import Style from "../../components/header/Header.module.css"
import { Poppins } from 'next/font/google'
// Subsets are really important. CHECK BELOW FOR MORE INFO
const poppins = Poppins({
    subsets:["latin"],
    style:"normal",
    weight:"400"
})

export default function Header(){
    return (
        <>
            <div className={Style['container-login']}>
                <ul className={poppins.className}>
                    <li className={Style['menu']}>
                        <Link href={"/login"}>Contact</Link>
                    </li>
                    <li className={Style['menu']}>
                        <Link href={"/users/dashboard"}>Home</Link>
                    </li>
                    <li className={Style['menu']}>
                        <Link href={"/login"}>Login</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}