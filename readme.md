<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Khoeos/Paradox-mod-localisation-converter">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

  <h3 align="center">Paradox mod localisation converter V2</h3>

  <p align="center">
    A simple script to generate localisation for your language, based on english version for Paradox's Games
    <br />
    <a href="https://github.com/Khoeos/Paradox-mod-localisation-converter"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Khoeos/Paradox-mod-localisation-converter/issues">Report Bug</a>
    ·
    <a href="https://github.com/Khoeos/Paradox-mod-localisation-converter/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This script will create language files for custom language, based on english localisation for avoid unreadable descriptions and texts if you're not playing in english 
(Also convertable from other languages to english, all is commented)

First version was made with Powershell, but i re-created it with Javascript and node.js, easier to maintain and edit. 
It's actually as Work in progress, no executable, only french (configurable as variable) and only manage files in localisation/english, not in localisation only.
**Things added :**
  - Launchable in mod's folder location
  - Manage all mods in folder and automaticaly create new files and folder
  - Don't replace existing files
  - Logs of created files (in mod folder and at the root) 
`npm install` and `node script.js` to launch it, if you already have node.js installed on your computer (more explanation later)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Go to your stellaris mods's directory, located at : (rightclic on your game on steam > manage > local files, and go back on the tree)
  ```
    \steamapps\workshop\content\281990\
  ```
* Check the mod Id, go to the workshop's page of the mod
  ```
    https://steamcommunity.com/sharedfiles/filedetails/?id=CODE_HERE
  ```
* Go to the mod's folder english localisation
  ```
    \steamapps\workshop\content\281990\MOD_ID\localisation\english
  ```



## Usage

- [Video](https://www.youtube.com/watch?v=Mw-zEd6xWF8)

1. Copy paste `script.ps1` to your english localisation folder.
2. Right click on the file > `execute with powershell` 
    - OR open terminal, go to the folder and enter `.\script.ps1`
        - You also can do with absolute path like `D:\Games\steamapps\workshop\content\281990\683230077\localisation\english\script.ps1`
3. Enter the desired language in the prompt, only lowercase and language indicated
    - `french, english, german, polish, russian, spanish, simp_chinese, braz_por`
4. A new folder named for your language is created with the files for the active folder, copy these files
5. Create or add these files into a new folder on `.\localisation` based on your language
6. Paste the file in this directory
    - If some files already exist, simply ignore new files and keep olders if translation aready exist 
7. Delete files and folder on the english folder
8. Re-execute for sub folders

**/!\ You have to do the script execution for each sub-folder, and create the same structure for your language for now, i'll try to improve that later***




<!-- ROADMAP -->
## Roadmap

- Manage sub-directories localisation files for easy copy/paste
- Automatic language folder and files creation (without copy/paste)
- Geration directly from stellaris's mod folder

See the [open issues](https://github.com/Khoeos/Paradox-mod-localisation-converter/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Discord : Khoéos#9117

Project Link: [https://github.com/Khoeos/Paradox-mod-localisation-converter](https://github.com/Khoeos/Paradox-mod-localisation-converter)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Khoeos/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/Khoeos/Paradox-mod-localisation-converter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Khoeos/repo.svg?style=for-the-badge
[forks-url]: https://github.com/Khoeos/Paradox-mod-localisation-converter/network/members
[stars-shield]: https://img.shields.io/github/stars/Khoeos/repo.svg?style=for-the-badge
[stars-url]: https://github.com/Khoeos/Paradox-mod-localisation-converter/stargazers
[issues-shield]: https://img.shields.io/github/issues/Khoeos/repo.svg?style=for-the-badge
[issues-url]: https://github.com/Khoeos/Paradox-mod-localisation-converter/issues
[license-shield]: https://img.shields.io/github/license/Khoeos/repo.svg?style=for-the-badge
[license-url]: https://github.com/Khoeos/Paradox-mod-localisation-converter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Khoeos
