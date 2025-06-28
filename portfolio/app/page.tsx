import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(main-bg.jpg)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Todo es posible con
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              El Desarrollo Web
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Soy un desarrollador web apasionado por crear experiencias digitales
            únicas. Desde el diseño hasta la implementación, me dedico a
            transformar ideas en realidad. Explora mis habilidades y proyectos
            para descubrir cómo puedo ayudarte a alcanzar tus objetivos en línea.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">{/** contenedor de los botones */}
            <Link href="/my-skills" 
                  className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
              >{/** boton de habilidades */}
              Saber mas
            </Link>
            <Link href="/my-projects" 
                  className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              >{/** boton de proyectos */}
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20"/>
              Mis Proyectos
            </Link>
            <Link href="/contact-me" 
                  className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              >{/** boton de contacto */}
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20"/>
              Contactame
            </Link>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-[-50px] z-[5] w-full h-full">
        <Image
          src="/programador.png"
          alt="programador"
          height={500}
          width={500}
          className="absolute bottom-[-50px] right-[50px] z-[5] w-[500px] h-[500px] object-cover"
        />{/** imagen de los arboles */}
      </div>
      <Image 
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-0 left-0 z-[10]"
        />{/** imagen de las estrellas */}
    </main>
  );
}
