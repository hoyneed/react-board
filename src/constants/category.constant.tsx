import {
    ChartNoAxesCombined,
    CodeXml,
    DraftingCompass,
    Footprints,
    Goal,
    Lightbulb,
    List,
    Rocket,
    type LucideProps,
} from "lucide-react";
interface Topics {
    id: number;
    label: string;
    category: string;
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    selected: boolean;
}

export const TOPIC_CATEGORY: Topics[] = [
    { id: 1, label: "전체", category: "", icon: List, selected: true },
    {
        id: 2,
        label: "인문학",
        category: "humanity",
        icon: Lightbulb,
        selected: false,
    },
    {
        id: 3,
        label: "스타트업",
        category: "start-up",
        icon: Rocket,
        selected: false,
    },
    {
        id: 4,
        label: "IT•프로그래밍",
        category: "programming",
        icon: CodeXml,
        selected: false,
    },
    {
        id: 5,
        label: "서비스•전략 기획",
        category: "planning",
        icon: Goal,
        selected: false,
    },
    {
        id: 6,
        label: "마케팅",
        category: "marketing",
        icon: ChartNoAxesCombined,
        selected: false,
    },
    {
        id: 7,
        label: "디자인•일러스트",
        category: "design",
        icon: DraftingCompass,
        selected: false,
    },
    {
        id: 8,
        label: "자기계발",
        category: "self-development",
        icon: Footprints,
        selected: false,
    },
];
