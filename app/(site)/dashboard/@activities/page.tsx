import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "@/types";

async function getActivityData(): Promise<Activity[]> {
    const res = await fetch("http://localhost:4000/activities", { cache: "no-cache" });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Activities() {
    const data = await getActivityData();
    return <>
        <h1 className="text-3xl font-bold">Recent Activity</h1>
        <Card>
            <CardContent className="p-4">
                <div className="grid gap-4 text-sm">
                    {data.map(activity =>
                        <div key={activity.user} className="flex items-center gap-4">
                            <div className="flex-1">
                                <h3 className="font-bold text-base">{activity.user}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {activity.action}
                                </p>
                            </div>
                            <div className="text-right">
                                <time className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(new Date(activity.timestamp).getTime() - (1 * 60 * 60 * 1000)).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' })}
                                </time>
                            </div>
                        </div>)}
                </div>
            </CardContent>
        </Card>
    </>
}