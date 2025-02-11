import { ReadMe } from '@/hooks/useReadMe';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { getBadgeSection, getHeaderSection } from '@/utils/document.utils';
import { getGithubPath } from '@/utils/url.utils';


type PreviewProps = {
    document: ReadMe;
};

const Preview = ({document}: PreviewProps) => {
    const badgeSection = getBadgeSection(getGithubPath(document.url));
    const headerSection = getHeaderSection(document);

    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                a: ({ node, ...props }) => {
                    const href = node?.properties.href;
                    if (typeof href === 'string' && href.startsWith('http')) {
                        return <a
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: 'inline-block', width: 'fit-content' }}
                            {...props}
                        />;
                    }

                    return <a
                        style={{ display: 'inline-block', width: 'fit-content' }}
                        {...props}
                    />;
                },
            }}
        >
            {`${badgeSection} ${headerSection}`}
        </Markdown>
    );
};

export default Preview;