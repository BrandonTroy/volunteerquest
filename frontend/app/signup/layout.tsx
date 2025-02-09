import React from 'react';
import '../globals.css'; // Global Styles

const SignupLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="background flex items-center justify-center">
            <div className="bg-black bg-opacity-50 w-fit p-10 rounded-xl">
                <div>{children}</div>
            </div>
        </div>
    );
};

export default SignupLayout;