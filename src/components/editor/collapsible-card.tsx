import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type CollapsibleCardProps = {
    defaultOpen?: boolean;
    icon: React.ReactNode;
    title: string;
};

const CollapsibleCard = ({ defaultOpen = false, title, children, icon }: React.PropsWithChildren<CollapsibleCardProps>) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <Card>
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <CardHeader>
                    <CollapsibleTrigger>
                        <CardTitle className='flex flex-row items-center justify-between text-xl'>
                            <div className='flex flex-row items-center gap-2'>
                                {icon}
                                {title}
                            </div>
                            <ChevronDown className={`${isOpen ? 'rotate-180' : ''} transition-all transform`} />
                        </CardTitle>
                    </CollapsibleTrigger>
                </CardHeader>
                <CollapsibleContent>
                    <CardContent className='flex flex-col gap-4'>
                        {children}
                    </CardContent>
                </CollapsibleContent>
            </Collapsible>
        </Card>
    );
};

export default CollapsibleCard;