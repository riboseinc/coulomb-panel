import React from 'react';
import { IconName } from '@blueprintjs/icons';
export declare const PanelContext: React.Context<{
    state: any;
    setState: (opts: any) => void;
}>;
export interface PanelProps {
    contentsRef?: (el: HTMLDivElement) => void;
    title?: string;
    TitleComponent?: React.FC<{
        isCollapsed?: boolean;
    }>;
    TitleComponentSecondary?: React.FC<{
        isCollapsed?: boolean;
    }>;
    children: React.ReactNode;
    isCollapsible?: true;
    isCollapsedByDefault?: true;
    className?: string;
    collapsedClassName?: string;
    titleBarClassName?: string;
    contentsClassName?: string;
    iconCollapsed?: IconName;
    iconExpanded?: IconName;
}
export declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
