import {
    ChartNoAxesCombined,
    ChevronDown,
    CodeXml,
    DraftingCompass,
    Footprints,
    Goal,
    Lightbulb,
    List,
    Rocket,
} from "lucide-react";

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
// import TOPIC_CATEGORY from "@/constants/category.constant";

export function AppSidebar() {
    // Menu items.
    const [items, setItems] = useState([
        {
            title: "전체",
            url: "#",
            icon: List,
            light: true,
        },
        {
            title: "인문학",
            url: "#",
            icon: Lightbulb,
            light: false,
        },
        {
            title: "스타트업",
            url: "#",
            icon: Rocket,
            light: false,
        },
        {
            title: "IT•프로그래밍",
            url: "#",
            icon: CodeXml,
            light: false,
        },
        {
            title: "서비스•전략 기획",
            url: "#",
            icon: Goal,
            light: false,
        },
        {
            title: "마케팅",
            url: "#",
            icon: ChartNoAxesCombined,
            light: false,
        },
        {
            title: "디자인•일러스트",
            url: "#",
            icon: DraftingCompass,
            light: false,
        },
        {
            title: "자기계발",
            url: "#",
            icon: Footprints,
            light: false,
        },
    ]);
    const handleItem = (selectedTitle: string) => {
        const updatedItem = items.map((item) =>
            item.title === selectedTitle
                ? { ...item, light: true }
                : { ...item, light: false }
        );
        setItems(updatedItem);
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
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={() => handleItem(item.title)}
                                        isActive={item.light}
                                        className="hover:pl-6 transition-all duration-300"
                                    >
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
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
