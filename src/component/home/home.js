import React from "react";
import { Header } from "./header";

export const Home = () => {
    return (
        <div>
            <Header />
            <div style={{width:'100vw'}} className="d-flex align-items-center justify-content-center">
                <h1 className="text-dark-emphasis text-center my-5">Seems Like No Task Is Assigned</h1>
            </div>
        </div>
    )
}