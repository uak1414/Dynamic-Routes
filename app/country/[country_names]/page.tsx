import Link from "next/link";
import {CountryDetails} from "@/app/types/types";

 const CountryName = ({params}: {params:{country_name:string}})=> {
    const countryDetails: CountryDetails[]=[
        {
            name: "Pakistan",
            capital:"Islamabad",
            population: "240 Million",
        },
        {
            name: "Iran",
            capital:"Tehran",
            population: "245 Million",
        },
        {
            name: "Saudia Arabia",
            capital:"Riyaz",
            population: "280 Million",
        },
        {
            name: "Turkiye",
            capital:"Istanbol",
            population: "340 Million",
        },
        {
            name: "Afghanistan",
            capital:"Kabul",
            population: "140 Million",
        },

        
    ]
   
    const country = countryDetails.find(
    (c)=> c.name.toLowerCase() === params.country_name.toLowerCase()
);

if (!country){
    return (
        <h1>Country Not found</h1>
    );
}
return (
    <div>
    <h1> Name: {country.name}</h1>
    <h1> Population: {country.population}</h1>
    <h1> Capital: {country.capital}</h1>
    <Link href= "/country">Back to Country List</Link>

    </div>  

);
        
};

export default CountryName;
