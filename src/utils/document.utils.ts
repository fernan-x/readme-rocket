import { ReadMe } from '@/hooks/useReadMe';

// TODO: Linkedin url in contact section
export const getBadgeSection = (githubPath: string) => {
    return `
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
<!--[![LinkedIn][linkedin-shield]][linkedin-url]-->

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
[linkedin-url]: https://linkedin.com/in/fabien-fernandes-alves/
    `;
};

export const getHeaderSection = (document: ReadMe) => {
    return `
<br />
<div align="center">
<a href="${document.url}">
<img src="/undraw_website.svg" alt="Logo" width="300">
</a>

<h3 align="center">${document.title}</h3>

<p align="center">
${document.description}
<br />
<a href="https://github.com/fernan-x/killian-coaching"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://fernan-x.github.io/killian-coaching/">View Demo</a>
&middot;
<a href="https://www.fittruck-nantes.com/">Live Project</a>
&middot;
<a href="https://github.com/fernan-x/killian-coaching/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
&middot;
<a href="https://github.com/fernan-x/killian-coaching/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
</p>
</div>
    `;
};