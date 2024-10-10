import Link from "next/link";

const Country=()=> {
    return(
        <div>
            <h1>List of countries</h1>
            
                <li><Link href= "/country/pakistan">Pakistan</Link></li>
                <li><Link href = "/country/iran">Iran</Link></li>
                <li><Link href = "/country/saudia arab">Saudia Arabia</Link></li>
                <li><Link href = "/country/turkiye">Turkiye</Link></li>
                <li><Link href = "/country/afghanistan"> Afghanistan</Link></li>
            
            
        </div>
    )
}
export default Country;