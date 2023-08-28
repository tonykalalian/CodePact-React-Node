import React from "react";
import TypyiCodeService from "../services/TypyiCodeService";


const Typyicode = () => {


    const loadData = async () => {
        const result = await TypyiCodeService.getTypyiCode();
        console.log(result);
    }

    return (
        <>
            <div className="container">
                <button className="btn btn-primary" onClick={()=>loadData()} >Get data from Typicode External API</button>
            </div>
        </>
    )
}

export default Typyicode;