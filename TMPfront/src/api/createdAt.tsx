const getTimeSinceCreation = (createdAt: string): string => {
    const createdTime: Date = new Date(createdAt);
    const now: Date = new Date();
    const diffMs: number = now.getTime() - createdTime.getTime();

    const diffMinutes: number = Math.floor(diffMs / 1000 / 60);
    const diffHours: number = Math.floor(diffMinutes / 60);
    const diffDays: number = Math.floor(diffHours / 24);

    if (diffMinutes < 1) return "This user created their account just now.";
    if (diffMinutes < 60) return `This user created their account ${diffMinutes} minutes ago.`;
    if (diffHours < 24) return `This user created their account ${diffHours} hours ago.`;
    return `This user created their account ${diffDays} days ago.`;
}

export default getTimeSinceCreation;