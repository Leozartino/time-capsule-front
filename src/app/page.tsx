import Button from "@/components/Button";
import { User } from "lucide-react";

const Home: React.FC = () => {
  return (
    <main className="grid grid-cols-2 min- h-screen">

      <section 
      className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

        <div className="absolute right-0 top-1/2 h-[18rem] w-[32.875rem] 
        -translate-y-1/2 translate-x-1/2 rounded-full blur-full
        bg-purple-700 opacity-50 ">
        </div>

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a href="#" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"/>
          </div>

          <p className="max-w-[8.75rem] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas memórias!
          </p>
        </a>

      </section >

      <section 
      className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">

        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[22.5rem]">
            Você ainda não registrou nenhuma lembrança, comece a  <a className="underline hover:text-gray-50" href="#">criar agora!</a>
          </p>
        </div>
        
      </section>  

    </main>
  );
};

export default Home;