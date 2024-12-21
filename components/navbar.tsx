import Image from 'next/image';
import Link from 'next/link';
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="px-5 py-4 bg-white shadow-sm font-work-sans">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={220} height={40} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="max-sm:hidden">Create</span>
                                <BadgePlus className="size-6 sm:hidden" />
                            </Link>

                            {/* Based on the React 19 secver action update: we can use the server actions by calling it within a form element */}
                            <form
                                action={async () => {
                                    "use server";

                                    await signOut({ redirectTo: "/" });
                                }}
                                className='flex items-center'
                            >
                                <button type="submit">
                                    <span className="max-sm:hidden">Logout</span>
                                    <LogOut className="size-6 sm:hidden text-red-500" />
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                                {/* <Avatar className="size-10">
                                    <AvatarImage
                                        src={session?.user?.image || ""}
                                        alt={session?.user?.name || ""}
                                    />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar> */}
                            </Link>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server";

                                await signIn("github");
                            }}
                        >
                            <button type="submit">Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar