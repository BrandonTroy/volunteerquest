'use client'; // Use this if you want to make the component client-side only

const LoginPage = () => {

  return (
    <div className="w-80">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 className="mt-10 text-center font-bold tracking-tight text-lg">Log into your path</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
            <div>
                <label htmlFor="email" className="block font-sm">Email address</label>
                <div className="mt-2">
                <input type="email" name="email" id="email" autoComplete="email" required className="text-black block w-full rounded-md bg-white px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm" />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block font-sm">Password</label>
                </div>
                <div className="mt-2">
                <input type="password" name="password" id="password" autoComplete="current-password" required className="text-black block w-full rounded-md bg-white px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm" />
                </div>
            </div>

            <div>
                <button type="submit" className="w-full justify-center rounded-md mt-6 bg-primary px-3 py-1 text-base hover:bg-primary-dark">Log In</button>
            </div>
            </form>

            <p className="mt-4 text-center">
                Not a member?
                <a href="#" className="font-semibold text-primary ml-2 hover:underline">Sign Up</a>
            </p>
        </div>
    </div>
  );
};

export default LoginPage;