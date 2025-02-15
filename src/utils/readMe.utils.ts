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
<a href="${document.url}">
<img src="${previewImage}" alt="Logo" width="300">
</a>

<h3 align="center">${document.title}</h3>

<p align="center">
${document.description}
<br />
<br />
<a href="${document.url}"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://fernan-x.github.io/killian-coaching/">View Demo</a>
&middot;
<a href="https://www.fittruck-nantes.com/">Live Project</a>
&middot;
<a href="${document.url}/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
&middot;
<a href="${document.url}/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
</p>
</div>
    `;
};

export const getContactSection = (document: ReadMe) => {
    return `
## Contact

${document.contacts.fullName} - [Linkedin](${document.contacts.linkedin}) - ${document.contacts.email}

Project Link: [${document.url}](${document.url})

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

<a href="${document.url}/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=${getGithubPath(document.url)}" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    `;
};

export const getAboutProjectSection = () => {
    return `
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://www.fittruck-nantes.com/)

Killian Coaching was born out of a desire to help my coach enhance their online presence and grow their coaching business. The original website lacked modern design elements and effective SEO strategies, limiting its ability to attract and engage potential clients. This project aims to solve those issues by delivering:

* **Improved User Experience**: A clean, intuitive, and responsive design that makes it easy for visitors to learn about coaching services and get in touch.
* **Enhanced SEO Performance**: Optimized content structure, metadata, and loading speed to improve search engine rankings and increase organic traffic.
* **Content Management Flexibility**: A scalable and maintainable architecture to support content updates and future growth.

This project is a collaboration fueled by a passion for web development and a belief in the transformative power of great coaching. By bridging technical know-how with the coach's expertise, Killian Coaching provides a strong digital foundation to support business growth and client engagement.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

    `;
};