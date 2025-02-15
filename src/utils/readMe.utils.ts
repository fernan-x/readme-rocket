import { ReadMe } from '@/types/readMe';
import previewImage from '@/assets/undraw_website.svg';
import { getGithubPath } from './url.utils';

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
<a href="https://fernan-x.github.io/killian-coaching/">View Demo</a>
&middot;
<a href="https://www.fittruck-nantes.com/">Live Project</a>
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

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

### Top contributors:

<a href="${document.githubUrl}/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=${getGithubPath(document.githubUrl)}" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    `;
};

export const getAboutProjectSection = (document: ReadMe) => {
    return `
## About The Project

[![${document.title} Screenshot](${document.projectScreenshot})](https://www.fittruck-nantes.com/)

${document.about}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

    `;
};