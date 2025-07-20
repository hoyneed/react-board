import { ChevronDown } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { TOPIC_CATEGORY } from "@/constants/category.constant";
import useCategory from "@/hooks/useCategory";

export function AppSidebar() {
    // Menu items.
    const [items, setItems] = useState(TOPIC_CATEGORY);
    const handleItem = (selectedTitle: string) => {
        const updatedItem = items.map((item) =>
            item.label === selectedTitle
                ? { ...item, selected: true }
                : { ...item, selected: false }
        );
        setItems(updatedItem);
        useCategory.getState().updateLabel(selectedTitle);
        console.log("Current Category: ", useCategory.getState().label);
    };

    return (
        <Sidebar className="border-transparent">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex gap-4">
                        카테고리 <ChevronDown />
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="pl-4">
                        <SidebarMenu className="gap-2">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.label}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={() => handleItem(item.label)}
                                        isActive={item.selected}
                                        className="hover:pl-6 transition-all duration-300"
                                    >
                                        <div>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
