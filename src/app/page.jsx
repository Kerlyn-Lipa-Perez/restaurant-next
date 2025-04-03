import Image from "next/image";
import Menu from "./components/Menu";

export default function Home() {
  return (

    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
       {/* 
          HEADER
       */}
      <h1>Pagina de Inicio</h1>

      {/* 
          MENU
       */}
      <Menu />

      {/* 
          FOOTER
       */}
      
      
    </main>
  );
}
