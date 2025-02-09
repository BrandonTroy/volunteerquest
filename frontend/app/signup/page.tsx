'use client'

const SignupPage = () => {

  return (
    <div className="w-80">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-20 w-auto" src="/logo/transparent.png" alt="VolunteerQuest Logo" />
            <h2 className="text-center font-bold tracking-tight text-lg">Start Your Journey</h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
            <div>
                <label htmlFor="email" className="block font-base">Email</label>
                <div className="mt-2">
                <input type="email" name="email" id="email" required className="text-black block w-full rounded-md bg-white px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm" />
                </div>
            </div>
            <div>
                <label htmlFor="username" className="block font-base">Username</label>
                <div className="mt-2">
                <input type="text" name="username" id="username" required className="text-black block w-full rounded-md bg-white px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm" />
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block font-base">Password</label>
                </div>
                <div className="mt-2">
                <input type="password" name="password" id="password" autoComplete="current-password" required className="text-black block w-full rounded-md bg-white px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm" />
                </div>
            </div>
            <div>
                <button type="submit" className="w-full justify-center rounded-md mt-6 bg-primary px-3 py-1 text-base hover:bg-primary-dark">Sign Up</button>
            </div>
            </form>
            <p className="mt-4 text-center">
                Already a member?
                <a href="/login" className="font-semibold text-primary ml-2 hover:underline">Log In</a>
            </p>
        </div>
    </div>
  );
};

export default SignupPage;