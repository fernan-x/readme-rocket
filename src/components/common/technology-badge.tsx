import { generateBadgeUrl, getTechnology, TechnologyName } from '@/lib/technologies';

type TechnologyBadgeProps = {
  name: TechnologyName;
};

const TechnologyBadge = ({ name }: TechnologyBadgeProps) => {
  const techno = getTechnology(name);
  const techBadgeUrl = generateBadgeUrl(name);

  return (
    <a href={techno.url} target="_blank" rel="noreferrer">
      <img src={techBadgeUrl} alt={techno.name} />
    </a>
  );
};

export default TechnologyBadge;