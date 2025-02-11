import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type CollapsibleCardProps = {
    defaultOpen?: boolean;
    title: string;
};

const CollapsibleCard = ({ defaultOpen = false, title, children }: React.PropsWithChildren<CollapsibleCardProps>) => {
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
                            {title}
                            <Button variant='ghost'>
                                <ChevronDown className={`${isOpen ? 'rotate-180' : ''} transition-all transform`} />
                            </Button>
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