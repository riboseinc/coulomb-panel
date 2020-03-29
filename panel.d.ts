import React from 'react';
import { IconName } from '@blueprintjs/icons';
export declare const PanelContext: React.Context<{
    state: any;
    setState: (opts: any) => void;
}>;
interface PanelProps {
    title?: string;
    TitleComponent?: React.FC<{
        isCollapsed?: boolean;
    }>;
    TitleComponentSecondary?: React.FC<{
        isCollapsed?: boolean;
    }>;
    isCollapsible?: true;
    isCollapsedByDefault?: true;
    className?: string;
    collapsedClassName?: string;
    titleBarClassName?: string;
    contentsClassName?: string;
    iconCollapsed?: IconName;
    iconExpanded?: IconName;
}
export declare const Panel: React.FC<PanelProps>;
export {};
