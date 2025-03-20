import { ReadMe } from "@/types/readMe";
import previewImage from "@/assets/undraw_website.svg";
import { getGithubPath } from "./url.utils";
import {
  generateBadgeUrl,
  getTechnology,
  isTechnologyName,
} from "@/lib/technologies";

export const getBadgeSection = (githubPath: string, linkedin: string) => {
  return `
<a id="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[contributors-shield]: https://img.shields.io/github/contributors/${githubPath}.svg?style=for-the-badge
[contributors-url]: https://github.com/${githubPath}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${githubPath}.svg?style=for-the-badge
[forks-url]: https://github.com/${githubPath}/network/members
[stars-shield]: https://img.shields.io/github/stars/${githubPath}.svg?style=for-the-badge
[stars-url]: https://github.com/${githubPath}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${githubPath}.svg?style=for-the-badge
[issues-url]: https://github.com/${githubPath}/issues
[license-shield]: https://img.shields.io/github/license/${githubPath}.svg?style=for-the-badge
[license-url]: https://github.com/${githubPath}/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: ${linkedin}
    `;
};

export const getHeaderSection = (document: ReadMe) => {
  return `
<br />
<div align="center">
<a href="${document.githubUrl}">
<img src="${previewImage}" alt="Logo" width="300">
</a>

<h3 align="center">${document.title}</h3>

<p align="center">
${document.description}
<br />
<br />
<a href="${document.githubUrl}"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="${document.demoUrl}">View Demo</a>
&middot;
<a href="${document.githubUrl}/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
&middot;
<a href="${document.githubUrl}/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
</p>
</div>
    `;
};

export const getContactSection = (document: ReadMe) => {
  return `
## Contact

${document.contacts.fullName} - [Linkedin](${document.contacts.linkedin}) - ${document.contacts.email}

Project Link: [${document.githubUrl}](${document.githubUrl})

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    `;
};

export const getContributingSection = (document: ReadMe) => {
  return `
## Contributing

${document.contributing}

### Top contributors:

<a href="${document.githubUrl}/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=${getGithubPath(document.githubUrl)}" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    `;
};

export const getAboutProjectSection = (document: ReadMe) => {
  const technologies = document.technologies
    .map((technology) =>
      isTechnologyName(technology) ? getTechnology(technology) : null,
    )
    .filter((t) => t !== null);

  return `
## About The Project

[![${document.title} Screenshot](${document.projectScreenshot})](${document.demoUrl})

${document.about}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

${technologies.map((technology) => `[![${technology.badgeName}](${generateBadgeUrl(technology.name)})](${technology.url})`).join("\n")}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

    `;
};

export const generateDocument = (document: ReadMe) => {
  return `
${getBadgeSection(getGithubPath(document.githubUrl), document.contacts.linkedin)}
${getHeaderSection(document)}
${getAboutProjectSection(document)}
${getContributingSection(document)}
${getContactSection(document)}
    `;
};
