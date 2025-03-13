import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Generación Estática",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={40} />,
    title: "Favoritos",
    subTitle: "Global State",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center  text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span> Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://lh3.googleusercontent.com/a-/ALV-UjXFc8_nJLi7S5izF-ISmU5A77sPFNQUEOGxqD4zVON473PcnILSzFXFSdFf3HdnrD68kqpPoT0xiP69OOez6ZKjokwiQkB7ZvY5E8NGy8lT3rHe-I7xbJ_hvDs5GheFzSx9f22YSPpRNwipIwj71TuKVQlTaagfHEKp6MlJJqjDSdjnQz63pgA1mvX08OJD6zDy7X1b0sux4e3QvcIqdOMeWJr6vlg2CoTwH3WILkDYXArjqPOG1h10gX6V7oM6M5ejxLk2S1mprpdM708f97qjZd_ebEICOKxccSiU6rRt0aS-RGIP8iQNQbtbDXesgCk8e7bVjTJKPleslWfWtOS8aXnHpr2a1RaohB-6spaqhuTe_V4AdecmKQun8YOpvcH5z2NZ4j-Pqv6SPhdsbZd_RiZHiIaxS1gF-UKvM71yROl_aLJHf-c2zWdVdSugfTu2_JcVK9AwrL3B1bZRQi7CB6MYoWJYz9a_GvyGxWEReU1fbo3-d5EK_Rq7XWL1noHflM3YqzKIlsGE7J-u8bd-ESW75RUnP6hCSK6tlBFUXs-UyOEZ7NUKKstsVb2ShvKW9JdR90DI14wTOqU-TlQU8LQI42B5tTGqderimAfb_QR0XhrCZgCngDycZD6EIs9g0d02I2uwakxkUcs6W7NM2Dq9jI-Sn2Hd3iMuRXZoRcEV1V61shxgjrpwzQuZhMwrxQXIrY-iR6IiovDW5NiG2bJREKskRlqkw06H_sqvyV6itOtaRBMrzFPX-bDf3sRO6JZpup01uToxcvUhSauIb5p__RbmEd3juX0akxJSC6kTRxP6d-0yINUQd3LwGvrEBAkoEtAP5l2wGl9GoVpoMfaBDNYL7O2Bb9V5pgmi_FHj1v0jo341BYqvawQ5bMK1ZDaOGWvd9LJN8mx7HEVzXr1SEHnJwOJ9Rl9ekOfOZadSZlw6QMDal6VYN0Kgrij6Cz_vqBz726CDbU3ulBAlkuc=s288-c-no"
              alt="User avatar"
              width={50}
              height={50}
              priority
            />
          </span>
          <span className="text-sm md:text-base font-bold">Jaime Apodaca</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}

        {/* 
        <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">Counter</span>
            <span className="text-sm text-slate-500 hidden md:block">Estado local</span>
          </div>
        </a> */}
      </div>
    </div>
  );
};
