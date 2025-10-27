import First from "./First";
import Seconde from "./Seconde";
import Done from "./Done"; 
import Laboc from "./Laboc";
import Formation from "./Formation";
import Actualites from "./Actualites";
import Clients from "./Clients";
import Reference from "./Reference";
import Mag from "./Mag";





export default function Couv() {
  return (
    <section className="flex flex-col p-0 gap-0"> 
      <div className="flex flex-col justify-between">
     
        <Seconde />
          <Mag />
          <Done />

          
      
        
        <div className="my-0" /> 

        <Laboc />
        <div className="my-8" /> 
        
        
        
        <Actualites />

        <div className="my-8" />

        <Reference />

        <div className="my-8" />
        
        
      </div>
    </section>
  );
}
