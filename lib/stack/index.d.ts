import React from 'react';
import { DialogConfig } from "../Dialog";
export declare namespace DialogStack {
    type Result = [
        React.FunctionComponent,
        {
            stack: DialogConfig[];
            push: (n: DialogConfig) => void;
        }
    ];
}
export declare const DialogStack: () => DialogStack.Result;
export default DialogStack;
//# sourceMappingURL=index.d.ts.map