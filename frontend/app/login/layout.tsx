import React from 'react';
import '../globals.css'; // Global Styles
import styles from './styles/layout.module.css'
import { Jersey_10 } from "next/font/google";

const jersey10 = Jersey_10({
  weight: "400",
  variable: "--font-jersey10",
});

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`${styles.background} flex items-center justify-center`}>
            <div className="bg-black bg-opacity-50 w-fit p-10 rounded-xl">
                <div>{children}</div>
            </div>
        </div>
    );
};

export default LoginLayout;