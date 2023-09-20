import React from 'react'
import { ToastContainer } from 'react-toastify'
import HomeHeader from "@/components/partials/homeheader";
import useWidth from '@/hooks/useWidth';
import useMenulayout from "@/hooks/useMenulayout";
import useMenuHidden from '@/hooks/useMenuHidden';
import useSidebar from '@/hooks/useSidebar';
import Home from '@/pages/home';


function HomeLayout() {


    const { width, breakpoints } = useWidth();
    const [collapsed] = useSidebar();
    const [menuType] = useMenulayout();
    const [menuHidden] = useMenuHidden();


    const switchHeaderClass = () => {
        if (menuType === "horizontal" || menuHidden) {
          return "ltr:ml-0 rtl:mr-0";
        } else if (collapsed) {
          return "ltr:ml-[72px] rtl:mr-[72px]";
        } else {
          return "ltr:ml-[248px] rtl:mr-[248px]";
        }
      };


    return (
        <>
            {/* <ToastContainer/>
            <HomeHeader className={width > breakpoints.xl ? switchHeaderClass() : ""} /> */}
            <Home/>
        </>
    )
}

export default HomeLayout