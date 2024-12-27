import React from "react";

const Banner: React.FC = ()=> {
    return(
        <>
            <div className="w-screen flex object-coverrelative">
                <img className="w-full h-screen " src="./placeholder.jpeg" alt="Banner Image" />
                <div className="absolute bottom-10 w-full bg-transparent flex justify-center items-center">
                    <span className="text-5xl text-white bg-transparent">This is placeholder for Banner Image</span>
                </div>
            </div>
        </>
    )
}

export default Banner;