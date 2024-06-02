import { auth, signOut } from "@/auth";
import Image from "next/image";
import { notFound } from "next/navigation";

const HomePage = async () => {
	const session = await auth();
	if (!session) return notFound();
	return (
		<main className="h-screen w-full grid place-content-center gap-10">
			<div className="size-24 rounded-full overflow-hidden">
				{/* To use the image we have to configure hostname "lh3.googleusercontent.com", under images in the `next.config.mjs` */}
				<Image src={session.user.image!} alt="profile picture" width={100} height={100} className="object-cover" />
			</div>

			<h1 className="text-3xl font-bold">Hello {session.user.name}</h1>

			<form
				action={async () => {
					"use server";
					await signOut();
				}}
			>
				<button
					type="submit"
					className="bg-slate-500 px-6 py-2 rounded-md hover:bg-slate-600 active:scale-95 transition-transform duration-200"
				>
					Log Out
				</button>
			</form>
		</main>
	);
};
export default HomePage;
