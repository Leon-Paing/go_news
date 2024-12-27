import React from "react";

const Navibar: React.FC = () => {
    return(
        <>
            <nav className="w-full flex justify-between items-center text-white fixed top-0 z-50 mb-10 font-sans bg-slate-950">
               <div className="xl:w-1/4 xs:w-full flex xl:justify-center xs:justify-start items-center p-5 bg-transparent">
                <div className="text-4xl bg-transparent">Go</div>
                <div className="text-red-600 text-xl italic bg-transparent">news</div>
               </div>
               
            </nav>
        </>
    )
}

export default Navibar;