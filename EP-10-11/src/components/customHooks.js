import { useState } from "react";
import { useEffect } from "react";

export const useUserOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });
    }, []);

    return onlineStatus;
}
 