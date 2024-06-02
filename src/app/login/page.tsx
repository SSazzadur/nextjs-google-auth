import { signIn } from "@/auth";

const LoginPage = () => {
	return (
		<div className="h-screen w-full grid place-content-center">
			<form
				action={async () => {
					"use server";
					await signIn("google");
				}}
			>
				<button
					type="submit"
					className="bg-slate-500 px-6 py-2 rounded-md hover:bg-slate-600 active:scale-95 transition-transform duration-200"
				>
					Login with Google
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
