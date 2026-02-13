/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-syntax-highlighter' {
    export const Prism: React.ComponentType<any>;
    export const Light: React.ComponentType<any>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
    const styles: { [key: string]: React.CSSProperties };
    export default styles;
    export const vscDarkPlus: typeof styles;
}
