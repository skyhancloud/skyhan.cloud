# Changelog

## [2.8.1](https://github.com/skyhancloud/skyhan.cloud/compare/v2.8.0...v2.8.1) (2025-12-12)


### Bug Fixes

* update next dependency from version 15.0.5 to 15.0.7 ([3f5f891](https://github.com/skyhancloud/skyhan.cloud/commit/3f5f891be1853cb6375e519427c0c46535a6f402))

## [2.8.0](https://github.com/skyhancloud/skyhan.cloud/compare/v2.7.0...v2.8.0) (2025-12-02)


### Features

* add generateStaticParams function to retrieve blog directories ([ffa68e6](https://github.com/skyhancloud/skyhan.cloud/commit/ffa68e66d632c9748d9c55476ed397508f2d1bc8))
* add rybbit analytics script to layout ([30a7a1d](https://github.com/skyhancloud/skyhan.cloud/commit/30a7a1d2afd1d97e4d8105b180c1de5827f32033))
* add selfie image to header ([858dfda](https://github.com/skyhancloud/skyhan.cloud/commit/858dfda28e55f886d990c3474a21d55a37fb79b3))
* add SubWatch project to the projects list ([8398e4c](https://github.com/skyhancloud/skyhan.cloud/commit/8398e4c45767e2c89ec4b52917e45792c20d4ad4))
* **analytics:** add custom events ([5d590bf](https://github.com/skyhancloud/skyhan.cloud/commit/5d590bfe8bbea381690b4a8e138a2f7a5a979807))
* **component/discord-status:** add hide prop and integrate into blog layout ([69336b8](https://github.com/skyhancloud/skyhan.cloud/commit/69336b800b8af6dbe3860a8455f6e33fa36923bf))
* implement environment variable validation using zod ([5d6b589](https://github.com/skyhancloud/skyhan.cloud/commit/5d6b5894d6b7d2dacbff3a3d80e7e0a87dca442c))
* remove Spotify integration and related components ([3ebfabd](https://github.com/skyhancloud/skyhan.cloud/commit/3ebfabdba73a8c7b8aaa4761813f4fe1dd7ac7b8))
* replace Bricolage Grotesque font with Faustina and add Avatar component ([d662350](https://github.com/skyhancloud/skyhan.cloud/commit/d662350370b07ddd3629add2ebb0ce830ca72a52))
* update me image ([fe05ed1](https://github.com/skyhancloud/skyhan.cloud/commit/fe05ed1470f87211a7859356d562dbc73ce3e848))
* update resume pdf file ([6f1e5b5](https://github.com/skyhancloud/skyhan.cloud/commit/6f1e5b5fd0dfa3b4f0acf410061d3c5ba8ce07fb))


### Bug Fixes

* add 'use client' directive to Projects and Works components ([e42de3a](https://github.com/skyhancloud/skyhan.cloud/commit/e42de3ac70f72dfb335bba90facfbffc14c7dfcd))
* **discord-status:** correct last seen timestamp conversion to milliseconds ([adacc58](https://github.com/skyhancloud/skyhan.cloud/commit/adacc58fafd76c3b0f1a600fdab2c53013be9e5c))
* move development analytics script to a separate Script component ([4b3a20f](https://github.com/skyhancloud/skyhan.cloud/commit/4b3a20fdebbb5126feb0e8003479ad3069da0838))
* update job titles in Page and Works components ([8284970](https://github.com/skyhancloud/skyhan.cloud/commit/82849704f36feec59a8105cf9147a0215baaffdb))
* update link and icon colors for better visibility ([e75bfcb](https://github.com/skyhancloud/skyhan.cloud/commit/e75bfcb1ba2e78a304f8efcddadb4f57e792b270))

## [2.7.0](https://github.com/chimpdev/skyhan.cloud/compare/v2.6.0...v2.7.0) (2025-02-12)


### Features

* **blog:** add blog post "Unlocking the Potential of iOS Notifications with Bark.js" ([dc2c041](https://github.com/chimpdev/skyhan.cloud/commit/dc2c04140551bebfb61e09a141caa75b6ca67d67))
* **config:** add imgur.com to remote patterns ([5028f35](https://github.com/chimpdev/skyhan.cloud/commit/5028f3592954c3c5bf6c54da0ebea5e9a35010cf))
* **discord:** enhance user status display with last seen time and update types ([85e4e62](https://github.com/chimpdev/skyhan.cloud/commit/85e4e629e7b4414db2ed1f2e047a16beb50e263f))
* **discord:** integrate Discord bot functionality and update environment variables ([815fdc2](https://github.com/chimpdev/skyhan.cloud/commit/815fdc224d3e69ec79fda5de5571e355082e75bd))
* **workflow:** enhance build and deploy process with SSH setup and notifications ([70f7cf4](https://github.com/chimpdev/skyhan.cloud/commit/70f7cf45d3bfb8de2dfd5b7710c2dff309242694))
* **works:** add Bark.js project to the works list with description and link ([f2cdff3](https://github.com/chimpdev/skyhan.cloud/commit/f2cdff3cb4bbd1fa6b2464ff3834b3073e9d89d5))


### Bug Fixes

* **blog:** initialize title state as an empty string ([9962ff9](https://github.com/chimpdev/skyhan.cloud/commit/9962ff9f7aa2bf6e60c95f150f3566c8890aab3e))
* **blog:** update code block to use TypeScript instead of JavaScript ([d27eec4](https://github.com/chimpdev/skyhan.cloud/commit/d27eec453db867e0d53a258e3f8d49171fbf12ed))
* **workflow:** update SSH deployment script to use correct project directory ([fd8e666](https://github.com/chimpdev/skyhan.cloud/commit/fd8e666dfa786da33799584efaceb9ff28eab2f8))


### Reverts

* "feat(discord): integrate Discord bot functionality and update environment variables" ([b1518ae](https://github.com/chimpdev/skyhan.cloud/commit/b1518ae1210e802afc894d03a8a6eb9be6c803f9))

## [2.6.0](https://github.com/chimpdev/skyhan.cloud/compare/v2.5.0...v2.6.0) (2024-12-01)


### Features

* **dependencies:** add 'next-view-transitions' package ([97a865e](https://github.com/chimpdev/skyhan.cloud/commit/97a865eeb1dd53ad6d6394b2e9c47ff22dad4a9c))
* **layout:** wrap RootLayout in ViewTransitions to add page transitions ([8d3cb46](https://github.com/chimpdev/skyhan.cloud/commit/8d3cb4664d3106cb94d20580a3e420e0d6013ae2))


### Bug Fixes

* **discord-status:** refactor link structure ([a3e5de8](https://github.com/chimpdev/skyhan.cloud/commit/a3e5de88321907a5d394fbcd06d1cbfd9fdbfba9))

## [2.5.0](https://github.com/chimpdev/skyhan.cloud/compare/v2.4.0...v2.5.0) (2024-12-01)


### Features

* **discord-status:** enhance Discord status component to display Spotify listening information ([e363f43](https://github.com/chimpdev/skyhan.cloud/commit/e363f435ba2c447e36e8c558b3f1140c418bc6e7))

## [2.4.0](https://github.com/chimpdev/skyhan.cloud/compare/v2.3.0...v2.4.0) (2024-11-30)


### Features

* **blog:** add new blog "using-lantern-rest-to-display-your-discord-presence" ([0a2c919](https://github.com/chimpdev/skyhan.cloud/commit/0a2c9192b6d22d6ccf34b81638a5ac19e93ab687))
* **discord-status:** add Discord status component to display online/offline status ([3a6c39f](https://github.com/chimpdev/skyhan.cloud/commit/3a6c39f3ff0a1d62456ccc10370d7dfad5bc80f0))
* **metadata:** add date to generated metadata if provided ([1ae142e](https://github.com/chimpdev/skyhan.cloud/commit/1ae142ec79e4f4925828d2b563e72c2e1fe7f05e))


### Bug Fixes

* **songs:** update key prop to include played_at for unique identification ([41114b2](https://github.com/chimpdev/skyhan.cloud/commit/41114b202a4c5bf615abb63319afce575bd6c83d))
* **tooltip:** add pointer-events-none to content when disableHoverableContent prop specified ([f0ff41e](https://github.com/chimpdev/skyhan.cloud/commit/f0ff41e93c9f2493b81950cda52251a75c3619ab))

## [2.3.0](https://github.com/chimpdev/skyhan.cloud/compare/v2.2.2...v2.3.0) (2024-11-11)


### Features

* **InlineQuote:** update options with href and text parameters ([aa41754](https://github.com/chimpdev/skyhan.cloud/commit/aa41754f9adc4a3713fb70d0133cc1bb1d3ebdc0))

## [2.2.2](https://github.com/chimpdev/skyhan.cloud/compare/v2.2.1...v2.2.2) (2024-11-08)


### Bug Fixes

* **config:** remove Unsplash image hostname from remote patterns ([6d645eb](https://github.com/chimpdev/skyhan.cloud/commit/6d645ebeebaeb5c109b2386dc0074f74f6d8e7e7))

## [2.2.1](https://github.com/chimpdev/skyhan.cloud/compare/v2.2.0...v2.2.1) (2024-11-06)


### Bug Fixes

* **songs:** move revalidation from fetch to export ([d09879c](https://github.com/chimpdev/skyhan.cloud/commit/d09879c06fa94a54f1433bb0587edbd0d2f70216))

## [2.2.0](https://github.com/chimpdev/skyhan.cloud/compare/v2.1.0...v2.2.0) (2024-11-06)


### Features

* **spotify:** integrate Spotify API for show recently played tracks ([872610c](https://github.com/chimpdev/skyhan.cloud/commit/872610c7d642c4b55d85e3688c011ee045b69a58))

## [2.1.0](https://github.com/chimpdev/skyhan.cloud/compare/v2.0.1...v2.1.0) (2024-11-06)


### Features

* **metadata:** implement generateMetadata utility for dynamic metadata generation ([0d9f22f](https://github.com/chimpdev/skyhan.cloud/commit/0d9f22f2051d9380f7db5e63d9c04848dfdd84e9))


### Bug Fixes

* **tooltip:** change max width of tooltip content to 320px ([f661ed4](https://github.com/chimpdev/skyhan.cloud/commit/f661ed48d975e5c638fc5dfcdfb829426f3f0209))

## [2.0.1](https://github.com/chimpdev/skyhan.cloud/compare/v2.0.0...v2.0.1) (2024-11-05)


### Bug Fixes

* **works:** update project link for barisyasaman.com ([f084b5c](https://github.com/chimpdev/skyhan.cloud/commit/f084b5c46f6764cf12e82caac91db61f7647c6fa))

## [2.0.0](https://github.com/chimpdev/skyhan.cloud/compare/v1.0.3...v2.0.0) (2024-11-05)


### ⚠ BREAKING CHANGES

* redesign website ([#7](https://github.com/chimpdev/skyhan.cloud/issues/7))

### Features

* add resume.pdf ([3a626bb](https://github.com/chimpdev/skyhan.cloud/commit/3a626bb25bcc8f74b117af74788097b3d09fa192))
* redesign website ([#7](https://github.com/chimpdev/skyhan.cloud/issues/7)) ([bbf5696](https://github.com/chimpdev/skyhan.cloud/commit/bbf569605134e5dbcc7676ef40098b2e3b967053))

## [1.0.3](https://github.com/chimpdev/skyhan.cloud/compare/v1.0.2...v1.0.3) (2024-11-03)


### Bug Fixes

* **actions:** revert 19fd990f4ae9f0e07b5b5ddbaa3c54e2fafe9232 ([524a746](https://github.com/chimpdev/skyhan.cloud/commit/524a7463feeb78609344859b039e3e3f9ef60b7e))
* **actions:** revert 19fd990f4ae9f0e07b5b5ddbaa3c54e2fafe9232 ([40d3ca9](https://github.com/chimpdev/skyhan.cloud/commit/40d3ca9bd4bad308f065fceb95766827f85ffcd9))

## [1.0.2](https://github.com/chimpdev/skyhan.cloud/compare/v1.0.1...v1.0.2) (2024-11-02)


### Bug Fixes

* **actions:** remove project input from setup-node-env action ([8689b96](https://github.com/chimpdev/skyhan.cloud/commit/8689b966c082338139e49cfcb0c01979b9f11b43))
* **actions:** update GitHub token in release-please workflow file ([19fd990](https://github.com/chimpdev/skyhan.cloud/commit/19fd990f4ae9f0e07b5b5ddbaa3c54e2fafe9232))

## [1.0.1](https://github.com/chimpdev/skyhan.cloud/compare/v1.0.0...v1.0.1) (2024-11-02)


### Bug Fixes

* **tsconfig:** remove keywords.jsx from include paths ([3247b72](https://github.com/chimpdev/skyhan.cloud/commit/3247b722bd2cabd09a4240d8ed7aef98ceb7da0f))

## 1.0.0 (2024-11-02)


### Features

* add RetroGrid component and integrate into page layout, ([5dc336d](https://github.com/chimpdev/skyhan.cloud/commit/5dc336dc5c94a839f9abcaccb5102858765cb92a))

## Changelog
