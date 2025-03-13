import Image from "next/image";
import React from "react";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoLogoReact,
  IoAlbums,
} from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";

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
    subTitle: "Counter Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoAlbums size={40} />,
    title: "pokemons",
    subTitle: "pokemons description",
  },
];

export const SideBar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          Dash
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
              src="https://lh3.googleusercontent.com/a-/ALV-UjWqnInItBoXwOYXkHUH-r0inwRtu_MbXIlR2TZHJ1R_AVAvZ3BI-arl-yyavUnNtgxtzvOh_lpDDVQn5iCZlXPSnlPx6m3b686CcseAELoXjjnGM8CiNTC71tMF5XnhdXjCvKd6l7Fueuav6a3P4VG0BhzwLbkZo76WCdrA5Zv992W08OnY4fl1yJSDtEUkzxUq28EsH6HDvFSF16fmd-Y3dWUi_yFUTzUsJGZXCV0Jt1Bfs9TZnGnj1_3pJULOQScGRtLBfnn7Zlu93ncRHbZTpWDqFrbLAyTaQ9umUhcivkC7aRuvNCecYZoKl0QIpGv2rQAx667Xsxa9tas3S9AuJS0u5yxHED5QoGj785G0ToIPi9CDHdbNpNLuMJKOHrhMKUKZiNvvtkdeXDlEKcTrxbPzptIAEXJTzld0NSr2qtlrFDT8UNwa0dp6uSJo97Yf8eSyEKQPpqQCTTFd0yYLcB-sEQp0BFhrmaIXf8GTnBKpgh0aAmA7z336e75CIVSSg2omu32Cg05mVtlavVkC_i6D6v59mNec_RTKjpUkFvYNEIOO90LBkPPDssLesLaoO8Jo0giY6ESo-8QqNw9kfjYLVk-v_lOlwfPJPCffdMewLgLfSzNxxbRGNsQKP3Chc3iX-FVEfqPjCl6SUkfvb3zhjXKP_t-CP142CRVLMITNMmKDkWK4ObRSMem17STiTjDN1WlTBJ9Xgff0xZjY2NAdJdXc91jp80oiFjL0EV3zfupouVpRZJPw1cmXihEDEgsrzEjK66mNfDW6O7o5G2XCue7xvI2Jc80Oq4uuLEJBvSWVPkmbTcv94rK1hu7hGIQXaOWmk3jhze_ZngFPw7KNtX9JMQYno9iLTX6pthdRQqTzQ7xTWN4qcxNGRyh4w-98KwnMeUsJNH8DGQnvtkc71xklqB6n-1aF8KOPnPW56l_MSEOv2I6PBDDbeWa1GW_vAHSVvynvcVp0GjDoqD0=s288-c-no"
              alt="use avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Jaime Apodaca</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
