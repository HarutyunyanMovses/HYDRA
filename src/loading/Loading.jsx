import React from "react";
import logo from "..//imgs/logo.svg"
import "./loading.css";

export default function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <div className="loading-spinner" style={{ backgroundImage: `url(${logo})` }}>
            </div>
            <h1>Welcome  to <span>Hydra</span></h1>
            <div className="creator">
                Created by Movses Harutyunyan
            </div>
        </div>
    );
}
