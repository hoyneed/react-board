import { createClient } from "@/lib/client";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, type Session } from "react-router-dom";
import { useEffect, useState } from "react";
import useUserStore from "@/hooks/useUserStore";

export function LogoutButton() {
    const navigate = useNavigate();

    const supabase = createClient();
    const logout = async () => {
        useUserStore.persist.clearStorage();
        await supabase.auth.signOut();
        navigate("/login");
    };
    const [user, setUser] = useState<null | { id: string; email: string }>(
        null
    );
    // Check client-side if user is logged in:
    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Auth event:", event);
            if (event === "SIGNED_OUT") {
                setUser(null);
                useUserStore.persist.clearStorage();
            } else {
                if (session?.access_token === undefined) {
                    setUser(null);
                    useUserStore.persist.clearStorage();
                } else {
                    setUser({
                        id: session?.user.id,
                        email: session?.user.email,
                    });
                }
            }
        });
        return () => {
            subscription.unsubscribe;
        };
    }, []);

    if (user === null) {
        return (
            <Link to="/Login" className="text-sm text-neutral-300">
                로그인
            </Link>
        );
    } else
        return (
            <Button
                onClick={logout}
                variant="link"
                className="text-sm text-neutral-300"
            >
                로그아웃
            </Button>
        );
}
