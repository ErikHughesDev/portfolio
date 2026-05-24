export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    url?: string;
    urlLabel?: string;
    repoUrl?: string;
    image?: string; // path or URL to a screenshot/thumbnail e.g. '/images/projects/coravie.jpg'
    imageColor?: string; // gradient fallback if no image provided
    featured?: boolean;
    year: number;
}
