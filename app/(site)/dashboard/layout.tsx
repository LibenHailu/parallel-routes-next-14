export default function DashboardLayout({
    children,
    activities,
    users,
}: {
    children: React.ReactNode;
    activities: React.ReactNode;
    users: React.ReactNode;
}) {
    return (
        <>
            {children}
            <div className="grid items-start gap-6 px-4 pb-6 md:gap-10 md:px-6 lg:grid-cols-6 lg:items-center lg:gap-0 lg:pb-0 xl:gap-12">
                <div className="space-y-4 lg:col-span-3">{users}</div>
                <div className="space-y-4 lg:col-span-3">{activities}</div>
            </div>
        </>
    );
}
