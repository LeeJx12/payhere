import React, { Component } from "react";

export function NoData({icon, children}) {
    const iconSrc = `/public/icons/${icon}.svg`;
    
    return (
        <div className="mt-5 p-5 d-flex">
            <div className="m-auto text-center">
                <img className="w-25" src={iconSrc} />
                <h1 className="m-5">{children}</h1>
            </div>
        </div>
    )
}