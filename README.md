# skyhan.cloud

This is the source code for my personal website, [skyhan.cloud](https://skyhan.cloud). Built with Next.js and Tailwind CSS. 

## Table of Contents

- [Self-Hosting](#self-hosting)
- [Contributing](#contributing)
- [Help](#help)
- [License](#license)
- [Star History](#star-history)

## Self-Hosting

To self-host this website, you will need the following prerequisites:

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/downloads)
Once you have the prerequisites installed, follow these steps to self-host Lantern:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/chimpdev/skyhan.cloud.git
```

2. Navigate to the cloned repository:

```bash
cd skyhan.cloud
```

3. Install the required dependencies:

```bash
pnpm install
```

5. Rename the `.env.example` file to `.env` and fill in the configuration values:

```env
RYBBIT_ANALYTICS_SITE_ID=
RYBBIT_ANALYTICS_URL=
```

> [!NOTE]
> - I'm using [Rybbit](https://www.rybbit.io) for analytics. You can create an account and get the site ID and URL from there. If you don't want to use Rybbit, you can just leave the `RYBBIT_ANALYTICS_SITE_ID` and `RYBBIT_ANALYTICS_URL` fields empty in the `.env` file. We don't support any other analytics providers at the moment.

6. Start the server:

```bash
pnpm start
```

5. The server should now be running on `http://localhost:3000`.

## Contributing

I'm always open to contributions from the community! If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the code passes any existing tests.
4. Commit your changes with descriptive commit messages that follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
5. Push your changes to your fork and submit a pull request to the `main` branch of the original repository.

Please make sure to follow the [Code of Conduct](.github/CODE_OF_CONDUCT.md) and [Contributing Guidelines](.github/CONTRIBUTING.md) when contributing to this project.

## Help

If you encounter any issues with the project or have any questions, feel free to [open an issue](https://github.com/chimpdev/skyhan.cloud/issues) on this repository. I am always happy to help!

## License

This project is licensed under [the GNU General Public License v3.0](LICENSE).

## Star History

<a href="https://star-history.com/#chimpdev/skyhan.cloud&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chimpdev/skyhan.cloud&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chimpdev/skyhan.cloud&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chimpdev/skyhan.cloud&type=Date" />
 </picture>
</a>