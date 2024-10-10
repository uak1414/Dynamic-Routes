import Link from "next/link";

export default function Page(){
    return(
        <ul className="flex justify gap-5 bg-orange-500">
            <Link href ="/">Home</Link>
            <Link href = "/about"> About</Link>
            <Link href = "/contactus">Contact</Link>
            <Link href = "/country"> Country</Link>
        </ul>
    )
}
