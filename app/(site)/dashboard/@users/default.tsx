import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/types";
import Link from "next/link";

async function getUserData(): Promise<User[]> {
    const res = await fetch("http://localhost:4000/users", { cache: "no-cache" });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
export default async function Users() {
    const data = await getUserData();
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">All Users</h1>
                <Button asChild>
                    <Link href="/dashboard/active">Active Users</Link>
                </Button>
            </div>
            <Card>
                <CardContent className="p-4">
                    <div className="grid gap-4 text-sm">
                        {data.map((user) => (
                            <div key={user.email} className="flex items-center gap-4">
                                <div className="flex-1">
                                    <h3 className="font-bold text-base">{user?.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {user.email}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <time className="text-sm text-gray-500 dark:text-gray-400">
                                        {user.role}
                                    </time>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
