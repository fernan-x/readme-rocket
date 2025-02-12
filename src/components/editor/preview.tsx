import { ReadMe } from '@/types/readMe';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { getBadgeSection, getHeaderSection } from '@/utils/readMe.utils';
import { getGithubPath } from '@/utils/url.utils';


type PreviewProps = {
    document: ReadMe;
};

const AClassName = 'inline-block w-fit underline text-blue-500 decoration-2 decoration-blue-500 hover:text-blue-700 hover:decoration-blue-700 transition-all';

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
                            className={AClassName}
                            {...props}
                        />;
                    }

                    return <a
                        className={AClassName}
                        {...props}
                    />;
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                h1: ({ node, ...props }) => {
                    return <h1 className="text-3xl font-bold mt-8" {...props} />;
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                h2: ({ node, ...props }) => {
                    return <h2 className="text-2xl font-bold my-6" {...props} />;
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                h3: ({ node, ...props }) => {
                    return <h3 className="text-xl font-bold my-4" {...props} />;
                },
            }}
        >
            {`${badgeSection} ${headerSection}`}
        </Markdown>
    );
};

export default Preview;