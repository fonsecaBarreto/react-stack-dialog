import React from "react";
import ReactDOM from "react-dom";
import { DialogProvider } from "../../libraries/base/lib";
import "./style.css"
import ContentExample from "./content-example"
ReactDOM.render(
    <React.StrictMode>

                <div className="example-component">
        <DialogProvider>
            <div>
                <h1> Exemplo: </h1>
                        <ContentExample/>
            </div>
        </DialogProvider>
                </div>   
    </React.StrictMode>, document.getElementById("root") );