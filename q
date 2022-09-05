[33mcommit d3e43a42931a4c035a3f38b6aeda011c75d4d2c3[m[33m ([m[1;36mHEAD -> [m[1;32mclick-outside[m[33m, [m[1;31morigin/click-outside[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Thu Aug 25 16:01:11 2022 +0100

    use a ref instead of document.querySelector

[33mcommit a68c2fbeaa01bc1ff6e58a67c93dbb30b0202123[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Thu Aug 25 15:35:02 2022 +0100

    change to single event listener for detecting clicks outside #header-menu

[33mcommit cb3fe9b7594132b80717b4fcaa475288c0ac6e71[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Thu Aug 25 13:44:15 2022 +0100

    wip

[33mcommit 2dd769f407ad12cb7b21feae8568363ddb2a7cd4[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Thu Aug 25 10:55:55 2022 +0100

    debug logging wip

[33mcommit c95ec513024f9f3f76ed2b6dd66367b7ce5c29d4[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Aug 24 17:27:19 2022 +0100

    click outside wip, multi event listening

[33mcommit 8d8e716aa9cc8f597a6e15f203dfde34851c549f[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Aug 24 15:51:26 2022 +0100

    Add event listener for scroll activity to prevent useClickoutside triggering setIdOfOpenDropdown(null)

[33mcommit 267fbc238b3ddc70144fa922c25abca63f08a3cc[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Aug 24 15:14:29 2022 +0100

    click outside wip

[33mcommit 368e05c292b2c1934e8496d6b3426c9f69be68be[m[33m ([m[1;31morigin/GN-192-mega-nav-not-closing-when-clicking-on-a-link[m[33m, [m[1;32mGN-192-mega-nav-not-closing-when-clicking-on-a-link[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Aug 17 09:46:43 2022 +0100

    GN-192 Remove yellow background from dropdown

[33mcommit 6e3623342b7f1cbf37eb45163bf141db310c2684[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Aug 16 15:28:31 2022 +0100

    GN-192 Update unit tests to reflect new proposed dropdown scroll behaviour

[33mcommit 0f6c64da0582d09ec227d5957b69e692ef7e2a6d[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Aug 16 15:25:02 2022 +0100

    GN-192 Proposed fix for scrollbar cancelling dropdown

[33mcommit 8cc8d921128d50744286ed26da3a355df4af0bb8[m
Merge: d40e9fa 03291d7
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Aug 15 16:15:21 2022 +0100

    GN-192 Merge commit

[33mcommit 03291d7fe283b307812711610278475f52ab08a8[m[33m ([m[1;33mtag: 5.0.890+r03291D7[m[33m, [m[1;31morigin/master[m[33m, [m[1;31morigin/HEAD[m[33m, [m[1;32mmaster[m[33m)[m
Author: Chris Barker <chris.barker@nice.org.uk>
Date:   Wed Aug 10 11:06:29 2022 +0100

    GN-187 NDS version bump

[33mcommit 530f7b80611467d4cde50c290ef2f8998b97b30e[m[33m ([m[1;33mtag: 5.0.889+r530F7B8[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Aug 10 10:59:05 2022 +0100

    GN-187 Brand refresh (#199)
    
    * GN-187 Update brand typography
    
    * GN-187 Update Lora weights
    
    * GN-187 Remove old examples
    
    * GN-187 Update NDS version
    
    * GN-187 Bump NDS version
    
    * GN-187 Update components
    
    * GN-187 Add tokens
    
    * GN-187 Fix tokens import paths
    
    * GN-187 Fix back to top module path
    
    * GN-187 Fix back to top colour references
    
    * GN-187 Fix weird partial path
    
    * GN-187 Bump NDS version
    
    * GN-187 Fix readme typos
    
    * GN-187 Bump NDS
    
    * BN-187 Bump NDS version
    
    * GN-187 Fix link underlines
    
    * GN-187 Bump NDS version
    
    * GN-187 Bump NDS version
    
    * GN-187 Bump NDS version
    
    * GN-187 Bump NDS version
    
    * GN-187 NDS version bump
    
    * GN-187 Bump NDS version
    
    Co-authored-by: Chris Barker <chris.barker@nice.org.uk>

[33mcommit d40e9facb2e58b5d076d3286419c203bc85fb120[m[33m ([m[1;33mtag: 4.1.885-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Aug 8 10:48:01 2022 +0100

    GN-192 Reintroduce hashchange event listener and  handler to close dropdowns due to issue with in page anchors not closing dropdowns on gatsby apps

[33mcommit 55247f035031d411af418458b05aaaa9f909f49f[m[33m ([m[1;33mtag: 4.1.884-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Aug 3 14:50:29 2022 +0100

    GN-192 Fix search proptypes to clear console type warning when passing string to suggestions in search unit test

[33mcommit d80a41e73e8a07b71abe4dfa2e1943c521ddfc4d[m[33m ([m[1;33mtag: 4.1.883-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Aug 3 14:21:54 2022 +0100

    GN-192 Update proptypes to fix console type error

[33mcommit d0f228bd454f104b83c0b937969f2480d1eceb32[m[33m ([m[1;33mtag: 4.1.882-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Aug 3 13:12:08 2022 +0100

    GN-192 Reinstate unit tests for submission after search component refactor

[33mcommit 5c2f663fad5da09b4607ec754f3f126eea9fcf0b[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Aug 3 10:55:12 2022 +0100

    GN-192 Remove it.only from unit test, update snapshot, remove jest.fn wrapper function from test dropdown component

[33mcommit f409d239efca3ba1bed9ca0ab38f6d70503ee052[m[33m ([m[1;33mtag: 4.1.881-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Aug 2 14:53:52 2022 +0100

    GN-192 Update readme to replace pathway example. Remove pathways code from examples

[33mcommit ab5c40126a9d9fedcc424b550b0ec1de6204b535[m[33m ([m[1;33mtag: 4.1.880-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Aug 2 13:27:28 2022 +0100

    GN-192 Update nav unit tests around internal services to match refactoring of dropdown / navlinks

[33mcommit 1afd5dc1a1f9e03e914c4db0bda3707d40d4ebe2[m[33m ([m[1;33mtag: 4.1.879-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Aug 2 11:54:36 2022 +0100

    GN-192 Update unit test for top level anchors after dropdown refactor

[33mcommit 767d8e5f9e0ead6259b573424549571cb9112fdc[m[33m ([m[1;33mtag: 4.1.878-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Aug 2 11:01:50 2022 +0100

    GN-192 Fix dropdown unit tests after refactor

[33mcommit 6613e893b7f9d47c77d7a08f8b3ec3224df7347e[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Aug 2 09:32:16 2022 +0100

    GN-192 Refactor handling of dropdown components - wip

[33mcommit acb120a237db888892fddb26c6cfdecc954bb0c3[m[33m ([m[1;33mtag: 4.1.874-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Aug 1 13:55:20 2022 +0100

    GN-192 Update tracked link prop to landingUrl, add title for 'Journals and databases' so it isn't undefined

[33mcommit 0b7dd95465df97a17bd8fd53407a9e5990fe2cb2[m[33m ([m[1;33mtag: 4.1.870-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 26 14:36:35 2022 +0100

    GN-192 Reinstate console.warn for missing skipLinkId

[33mcommit 6deb468d0b6a93ea4bd3853cc23908e5b684cadf[m[33m ([m[1;33mtag: 4.1.869-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 26 12:53:45 2022 +0100

    GN-192 Change root and base url defaults to empty strings

[33mcommit 62e495851cb24890a822f69bf1ab50ba0629dd5b[m[33m ([m[1;33mtag: 4.1.868-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 26 12:07:34 2022 +0100

    GN-192 Add temporary default base and root urls per dropdown component

[33mcommit adcbcf2ee4429932bfe213ac983f43f5c1249fac[m[33m ([m[1;33mtag: 4.1.867-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 26 12:01:04 2022 +0100

    GN-192 rejig order of mock data in json file

[33mcommit 18974cc588e17e544d42a33f269b148a28e6324a[m[33m ([m[1;33mtag: 4.1.866-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 26 11:45:45 2022 +0100

    GN-192 Refactor handling of base and root urls in dropdown components so the current service has relative paths  versus absolute urls for the other services

[33mcommit 35ee492bffcdd32399ac7a67812d3d023154942c[m[33m ([m[1;33mtag: 4.1.864-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 19 17:39:15 2022 +0100

    GN-192 Add style to hide skip links when navlink buttons are clicked - issue since upgrading to @mantine useFocusTrap hook which autofocuses the first available focussable item

[33mcommit a629954ff7d6dcd5265d9d8f92a631598a63fe0c[m[33m ([m[1;33mtag: 4.1.863-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 19 12:22:31 2022 +0100

    GN-192 Remove data-autofocus attribute from dynamic dropdown components

[33mcommit 4c58161585128c81eda19a1f6278c1060140343f[m[33m ([m[1;33mtag: 4.1.858-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Jul 18 16:06:37 2022 +0100

    GN-192 Remove unused react shadow root dependency

[33mcommit 04d9226672920aabe28a0bf4255ae1941de4ce61[m[33m ([m[1;33mtag: 4.1.857-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Jul 18 16:03:20 2022 +0100

    GN-192 Add data-autofocus attribute - prevents issue with focus-trap highlighting the skip links in dropdown components

[33mcommit 045791cd00d4c4c59f4f6f0926521e7109f38a55[m[33m ([m[1;33mtag: 4.1.856-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Jul 18 15:39:34 2022 +0100

    GN-192 Remove npm-shrinkwrap.json

[33mcommit b0623c42a82657e3c7eb028bcb818ead5626d657[m[33m ([m[1;33mtag: 4.1.855-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Jul 18 15:34:16 2022 +0100

    GN-192 Update snapshots

[33mcommit 073bb6b381b1e823702a15f5fdca41d1e0160883[m[33m ([m[1;33mtag: 4.1.854-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Jul 18 15:32:22 2022 +0100

    GN-192 Temporarily add a hidden input to prevent focus trapped skiplink autofocussing

[33mcommit e6eebeaf0509b9372dd17298c68748b073f55593[m[33m ([m[1;33mtag: 4.1.853-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Jul 18 15:23:46 2022 +0100

    GN-192 Replace hand rolled useClickOutside hook with mantine library equivalent

[33mcommit 1c04c6f55021a5d4a9b3ecbf3e1a1a1104bf044c[m[33m ([m[1;33mtag: 4.1.852-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Jul 18 15:12:27 2022 +0100

    GN-192 Replace use-it useEventListener hook with mantine hooks library version

[33mcommit c6fbcf771e71a526b74dabb1f15a84dd2d7ce4b3[m[33m ([m[1;33mtag: 4.1.851-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Mon Jul 18 14:47:06 2022 +0100

    GN-192 Replace react-focus-trap with mantine hooks version due to issue with its tabbable subdependency necessitating shrinkwrap

[33mcommit f00bcc2bdf1443663c2edf5e641f5bcb12bfc797[m[33m ([m[1;33mtag: 4.1.843-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Jul 13 15:22:39 2022 +0100

    GN-192 Remove failing unit tests - due to conversion from class to functional component

[33mcommit dcabfc7424225a289f2a69a6c394258966834d73[m[33m ([m[1;33mtag: 4.1.842-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Jul 13 09:26:04 2022 +0100

    GN-192 Simplify location path/hash change detection. Add undefined check for typeof location object for server side

[33mcommit 2f37f803c05254e14a5520ffe18fc921f30c5491[m[33m ([m[1;33mtag: 4.1.841-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Wed Jul 13 08:41:14 2022 +0100

    GN-192 Convert Search class to functional component and apply aria-activedescendant temporary fix. Version bump nds-container and nds-core to remove sass-mq deprecation warnings

[33mcommit e2f5af2ee7be5f39bdf10c3fa6e4e61981e17f2f[m[33m ([m[1;33mtag: 4.1.840-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 12 16:19:39 2022 +0100

    GN-192 Remove null check for idOfOpenDropdown on location/hash change

[33mcommit 6b413c906d618456ed6834e13c2b13f116ef3fea[m[33m ([m[1;33mtag: 4.1.839-GN-192-mega-nav-not-[m[33m)[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 12 16:12:32 2022 +0100

    GN-192 Remove click handlers from BNF/c dropdowns

[33mcommit 32004baa5dc831f791ad1915e945d0528d2bd9bb[m
Author: John Davey <john.davey@nice.org.uk>
Date:   Tue Jul 12 16:09:59 2022 +0100

    GN-192 Detect location or hash changes and close dropdown - wip

[33mcommit dc3830748adb2c7ca1b940fa50619afa3b9919cb[m[33m ([m[1;33mtag: 4.1.838+rDC38307[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Jul 5 10:51:13 2022 +0100

    GN-188 Change guidance to advice for CKS (#197)

[33mcommit 27ac77a96ce7cae1fb664b1264047e8a16495846[m[33m ([m[1;33mtag: 4.1.831+r27AC77A[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Tue Jun 21 15:01:37 2022 +0100

    GN-186 IE11 fixes (#194)
    
    * GN-186 Remove non-fix for dropdown closing issue from BNF launch day
    
    * GN-186 npm shrinkwrap, ensuring same deps are installed everywhere - fixes BNF IE11 .contains issue in react-focus-trap with sub-dep tabbable versions > 5.2.1 (see https://github.com/focus-trap/tabbable/issues/664)
    
    * GN-186 Fix issue with links not wrapping due to IE11 flexbox shortcomings when width isn't specified
    
    * attempt to increase specificity of selector
    
    * GN-186 Move IE specific style up a level to isolate change to menuWrapper li only
    
    * GN-186 Add margin bottom to back to top link to fix issue with link being hidden by footer in IE11
    
    * GN-186 Move ie11 specific style to navlinks
    
    * GN-186 Apply width fix for IE11 flexbox shortcomings

[33mcommit 8090e2488cb3e17f89e7a3d941589fb0dce4764e[m[33m ([m[1;33mtag: 4.1.822+r8090E24[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Thu May 26 10:14:06 2022 +0100

    GN-183 Mega nav bnf links (#191)
    
    * GN-183 Update paths in meganav for bnf/c
    
    * GN-183 Change BNF/C drugs A-Z link anchors to lowercase
    
    * GN-183 Add click handler to dismiss dropdown on A to Z link click
    
    * GN-183 Add click handler to dropdown links bnf/c to close dropdowns

[33mcommit 64e9a6769ad262c427e0146e6e6dd6f383f6e7ce[m[33m ([m[1;33mtag: 4.1.818+r64E9A67[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Wed May 25 16:02:08 2022 +0100

    GN-183 Update paths in meganav for bnf/c (#190)

[33mcommit d487df1a45d8673c85e3d1a8f1bab030b135b0ff[m[33m ([m[1;33mtag: 4.1.816+rD487DF1[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Wed May 25 13:07:06 2022 +0100

    GN-166 Update subnav for bnf (#175)
    
    * GN-166 Update services.json to accommodate image links for BNF/BNFC
    
    * GN-166 Add logos for bnf/bnfc and update subnav links for bnf vanity urls
    
    * GN-166 Optimise svgs for bnf/bnfc
    
    * GN-166 Optimise bnfc logo, increase precision
    
    * GN-166 Update dropdown content to reflect new urls
    
    * GN-166 Update 'changes' url in bnf/c dropdowns
    
    * GN-182 Adjust button/link padding in smaller viewports to prevent site wider than content issue
    
    * GN-182 Adjust column-gap and chevron size for navlinks on tablet to address issue floating BTT issue.

[33mcommit 13ea413c3572b185be9ff67ad85af515442a0c08[m[33m ([m[1;33mtag: 4.1.815+r13EA413[m[33m)[m
Author: Andy Child <48481960+AndyChildNice@users.noreply.github.com>
Date:   Mon May 23 14:54:58 2022 +0100

    GN-170 Add new InDev menu config item (#177)

[33mcommit 767ffbfe83f4f510584841a3d320f587598aa39a[m[33m ([m[1;33mtag: 4.1.809+r767FFBF[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Wed Apr 13 17:10:50 2022 +0100

    GN-181 Remove withPadding prop from render block, causing console error (#186)

[33mcommit 55d6546c1d3abf41a9c88870f43b931212ba6686[m[33m ([m[1;33mtag: 4.1.807+r55D6546[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 6 12:50:09 2022 +0100

    GN-180 Fix InDev (#184)

[33mcommit b0d27470e240d5c58e7525e17eceaba211032821[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 6 09:51:32 2022 +0100

    Update README.md (#185)

[33mcommit 6d13311ba87d6f7b372bcfa6ca140377a0643a4e[m[33m ([m[1;33mtag: 4.1.805+r6D13311[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Thu Mar 31 15:57:46 2022 +0100

    GN-179 GN-178 GN-177 GN-175 GN-174 mega nav content changes (#183)
    
    * GN-174 Update links and text for About dropdown. Layout wip
    
    * GN-174 About dropdown layout wip
    
    * GN-174 Layout for about dropdown
    
    * GN-174 Add 'Our programmes' strapline
    
    * GN-174 Remove inline styles for about dropdown columns
    
    * GN-174 Minor content tweaks for BNF/c
    
    * GN-174 Add className prop to gridItem component to enable use of additional classNames on gridItems. Minor accessibility imprrovement for aria labelling
    
    * GN-174 Swap newsletter link for guideline prototype link
    
    * GN-177 Update life sciences dropdown content
    
    * GN-177 Add 'being considered' content to guidance dropdown
    
    * GN-177 Remove repeated paths from urls
    
    * GN-177 Update urls in life sciences dropdown
    
    * GN-177 Fix incorrect URL
    
    * GN-179 Add header boolean to control display of items in header. Add Knowledge resources service link in footer
    
    * GN-179 Update unit tests with header boolean
    
    * GN-179 Remove debug from unit tests
    
    * GN-179 Fix about links
    
    * GN-179 Add base url for about links
    
    * GN-179 Capitalise filters for life sciences links
    
    * GN-179 Fix contact and jobs link in about
    
    * GN-179 Layout fix for being considered in guidance dropdown
    
    * GN-179 Fix public involvement link
    
    * GN-179 Fix public involvement link. Switch guideline prototype link copy and summary
    
    * GN-179 Add missing oxford commas in life sciences dropdown
    
    * GN-179 Removed oxford commas

[33mcommit 827a450d58259b35218813286ea834ff674bb575[m[33m ([m[1;33mtag: 4.1.787+r827A450[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Tue Mar 29 15:27:02 2022 +0100

    GN-173 Remove decommissioned services. Add createMarkup function (#178)
    
    * GN-173 Remove decommissioned services. Add createMarkup function. Update snapshots
    
    * GN-173 Add non breaking space char to services json to avoid need for dangerouslySetInnerHtml and createMarkup  util function
    
    * GN-173 Remove decommissioned services. Add createMarkup function. Update snapshots
    
    * GN-173 Add non breaking space char to services json to avoid need for dangerouslySetInnerHtml and createMarkup  util function

[33mcommit d2240d06694e44a3787c6347b2618bf9ac6cf25b[m[33m ([m[1;33mtag: 4.1.785+rD2240D0[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Tue Mar 29 14:45:58 2022 +0100

    GN-172 About about nice appears twice in footer (#176)
    
    * wip
    
    * GN-172 Remove about page from services link list in footer. Add unit test to verify removal
    
    * remove debug code
    
    * GN-172 Refactor unit test to match dropdown boolean approach
    
    * GN-172 Further refactoring for footer boolean and unit test
    
    * GN-172 Add unit test for footer boolean. Clean up mock data
    
    * GN-172 Remove redundant unit test for About link
    
    * GN-172 Remove superfluous information from services mock services.json
    
    * GN-172 Remove redundant information from Nav mock services.json
    
    * GN-172 Update unit test snapshot
    
    * Delete Nav.test.jsx.snap
    
    * re-add snapshot

[33mcommit 9a2ff8e8907afaf41147a7073a772ad65236e4ff[m[33m ([m[1;33mtag: 4.1.784+r9A2FF8E[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Fri Mar 25 16:09:33 2022 +0000

    GN-176 Optional padding on back to top (#181)
    
    * GN-176 Add withPadding option for Main component
    
    * GN-176 Add css and update readMe for withPadding Main component prop
    
    * GN-176 Update backToTop snapshot
    
    * GN-176 Changes post code review to flip default state and tidy up measurements for withPadding
    
    * GN-176 Add typescript def for withPadding prop

[33mcommit 4392cd1099511d7338b40563a3a9c2c010bee54a[m[33m ([m[1;33mtag: 4.1.775+r4392CD1[m[33m)[m
Author: Chris Barker <chris.barker@nice.org.uk>
Date:   Tue Mar 22 11:00:02 2022 +0000

    Fix prettier styling error

[33mcommit 6e05772526fa96b336c5613d9dbde054dcd200e3[m[33m ([m[1;33mtag: 4.1.774+r6E05772[m[33m, [m[1;33mtag: 4.1.773+r6E05772[m[33m)[m
Author: barkertron <chris@christopherbarker.co.uk>
Date:   Tue Mar 22 10:33:02 2022 +0000

    Fix SASS division deprecation warnings (#179)
    
    Co-authored-by: Chris Barker <chris.barker@nice.org.uk>

[33mcommit eb63540112f328515e67f88f35a2d93474aed37a[m[33m ([m[1;33mtag: 4.1.759+rEB63540[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Wed Mar 9 11:31:30 2022 +0000

    GN-168 Back to top link (#174)
    
    * GN-168 Add back to top component to footer with basic styling, wip
    
    * BNF-168 Conditionally render back to top based on show prop
    
    * GN-168 Add default scrollTargetId for back to top link
    
    * GN-168 Add default props for back to top proptypes
    
    * GN-168 Detect if supplied scrollTargetId exists for back to top link and default to #top
    
    * GN-168 Unit tests for back to top, correction of propType in footer
    
    * GN-168 Update read me for back to top link
    
    * GN-168 Simplify back to top, add 'top' id to move focus when back to top link is used
    
    * GN-168 Setup 'Main' component to enable sticky back to top link across various services
    
    * GN-168 Remove backToTop component from Footer
    
    * GN-168 Remove config options from BackToTop link and hardcode to #top
    
    * npm link for global-nav wip
    
    * GN-168 Refactor backToTop. Debug issue with Footer items left in main component files
    
    * GN-168 Update unit test for main component
    
    * GN-168 Add description of main component to readme
    
    * GN-168 Update unit tests and documentation to reflect refactoring
    
    * GN-168 Upgrade eslint-plugin-react version to resolve linting issue where it asks for key props
    
    * GN-168 Remove unused constructor from Footer
    
    * GN-168 Remove unused dependency from Header.test.jsx
    
    * GN-168 Add click handler to backToTop link for focus, scrollIntoView and prevent default handling
    
    * GN-168 Minor refactor on back to top unit test
    
    * GN-168 Refactor back to top unit test
    
    * GN-168 Update documentation to mention back to top link in main component
    
    * GN-168 Define children props explicitly in Main component type def
    
    * GN-168 Copy types for main from nds-container
    
    * GN-168 Add elementType option for main component. Refactor to match similar component in design system
    
    * remove commented out lines
    
    * GN-168 convert Main to function as instantiating a new arrow function isn't allowed in build process
    
    * GN-168 Update documentation to include elementType prop on main component
    
    * update useClickoutside hook test to eliminate render console error
    
    * GN-168 Update documentation. Update types for main component. Add classnames helper

[33mcommit 26c37fb0133678edb42460a606f7651b92554ddf[m[33m ([m[1;33mtag: 4.1.752+r26C37FB[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Mon Mar 7 11:54:59 2022 +0000

    GN 169 Dropdown open and close hooks (#170)
    
    * GN-169 Add hooks to trigger global_nav_config callbacks on dropdown toggle
    
    * GN-169 Update example classNames for global-nav BEM
    
    * GN-169 Refactor, add type defs for onDropdownOpen and onDropdownClose props
    
    * refactoring wip
    
    * getCallbackFunction wip
    
    * GN-169 Accommodate dropdown open/close hook callbacks when passed as a string
    
    * GN-169 Refactor to use getCallbackFunction util

[33mcommit e558990cc5280d1b45a5faf5c9c4c7037ec34e5a[m[33m ([m[1;33mtag: 4.1.734+rE558990[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Mon Feb 21 15:22:32 2022 +0000

    GN-167 Change autocomplete rateLimit to 100ms to increase responsiveness (#167)

[33mcommit d87fe01235d8f0d3ffc7dc77cde00d4a2279beb8[m[33m ([m[1;33mtag: 4.1.729+rD87FE01[m[33m)[m
Author: Imran Azad <imranazad@users.noreply.github.com>
Date:   Tue Feb 15 11:56:50 2022 +0000

    IDAM-481 GN-156 Show-The-Signed-In-Users-Name (#168)
    
    * IDAM-481-Show-The-Signed-In-Users-Name
    
    * IDAM-481 Add Padding
    
    * IDAM-481 Add Padding
    
    * IDAM-481 Add Padding
    
    * IDAM-481 Update Snapshot
    
    * IDAM-481 Make Span Display Block
    
    * IDAM-481 Reorder CSS Properties
    
    * IDAM-481 Share Common Properties
    
    * IDAM-481 Don't Use Real Name
    
    * IDAM-481 Show The Signed IN Users Name
    
    * IDAM-481 Order Selectors Correctly
    
    * IDAM-481 Move Name To Top
    
    * IDAM-481 Update Snapshot
    
    * IDAM-481 Fix Typo

[33mcommit 32182bf7d00dd09d7c1d5212c792b75bf61af9ca[m[33m ([m[1;33mtag: 4.1.728+r32182BF[m[33m, [m[1;33mtag: 4.1.711+r32182BF[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jan 27 15:47:50 2022 +0000

    GN-165 Add icons as proper dependency (#166)
    
    * GN-165 Add icons as proper dependency
    
    * GN-165 Prettier formatting fix
    
    * GN-165 Fix dependencies
    
    * GN-165 Re-instate missing border radius
    
    * GN-165 Update rgba function
    
    * GN-165 Fix rgba function
    
    * GN-165 Fix rgba percentages for older SCSS versions

[33mcommit c6e6b968bc37d46d32f4cb476ffa83486203732f[m[33m ([m[1;33mtag: 4.1.709+rC6E6B96[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Jan 26 13:17:18 2022 +0000

    GN-164 Add fix for axe tests (#165)
    
    Because of wrong content intrinsic height

[33mcommit 0eac12f234daf42e7db434aabb0cb29314105ee6[m[33m ([m[1;33mtag: 4.1.701+r0EAC12F[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Tue Jan 4 09:14:51 2022 +0000

    GN-161 Skip submenu accessibility (#160)
    
    * GN-157 Change footer z-index to zero to ensure it appears behind dropdowns on consultations
    
    * fixes wip
    
    * GN-161 Add id attr to match href in skip links
    
    * GN-161 update hash to match id and resolve axe error caused by mismatch
    
    * GN-161 Update test and remove id attribute
    
    * GN-161 Move aria-label from span to button and anchors as not appropriate for span - axe issue
    
    * GN-161 Fix broken tests after moving aria-label from span
    
    * GN-161 Fix typo in test name
    
    * GN-161 Fix failing tests
    
    * GN-163 Fix issues causing console warnings
    
    * GN-161 Add logic to prepend navslug href correctly for content-start id

[33mcommit 21e165cb6e0e1621fa731d9df69ed563ce314e9d[m[33m ([m[1;33mtag: 4.1.670+r21E165C[m[33m)[m
Author: John Davey <66066685+johndavey72@users.noreply.github.com>
Date:   Tue Dec 7 16:42:51 2021 +0000

    GN-157 Change footer z-index to zero to ensure it appears behind dropdowns on consultations (#159)

[33mcommit 161c20fa8864f05d78ffcacd372bc1dfc2fa3b06[m[33m ([m[1;33mtag: 4.1.668+r161C20F[m[33m)[m
Author: w@rren <w@rren.dev>
Date:   Thu Dec 2 16:45:08 2021 +0000

    GN-115 Mega nav production ready (#145)
    
    * GN-95 Move NavLinks to own component
    
    * GN-95 Get button in if dropdown
    
    * GN-95 Skip links and click behaviour
    
    * GN-95 Skip links
    
    * GN-95 Styling
    
    * GN-95 Styling, aria controls, chevron
    
    * GN-95 Active text on button
    
    * GN-95 Refactoring styling
    
    * Ignore netlify file
    
    * GN-95 Chevrons and revised services list
    
    * GN-95 Link styling
    
    * GN-95 More services dropdown and styling
    
    * GN-95 Missed commit with dropdownComponent
    
    * Comment out test to get build
    
    * Attempt fix for $RefreshReg$ issue
    
    See https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#usage-with-indirection-like-workers-and-js-templates
    
    * Focus trap plugin
    
    * GN-95 Focus trap around all of nav when active
    
    * Remove tests for alpha
    
    * GN-95 Focus trap no initial focus
    
    * GN-95 Z-index for pathways and guidance fix
    
    * GN-95 Escape by clicking search or acccount
    
    * GN-95 Replacing with nds components
    
    * GN-95 Config fix for grid css issue
    
    * GN-101 Issues (#122)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-101 Code review fixes
    
    Co-authored-by: w@rren <w@rren.dev>
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-102 Bnf content (#125)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-102 Add BNF content
    
    * GN-102 BNFc content
    
    * GN-102 BNF content update
    
    * GN-101 Code review fixes
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-102 Nitpicking css
    
    * GN-102 Pull url from services
    
    * GN-102 Spacing
    
    * GN-101 Fix failing tests
    
    * GN-102 Update snapshot
    
    * GN-102 Fix letters and dancing button
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-103 Bnfc content (#126)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-102 Add BNF content
    
    * GN-102 BNFc content
    
    * GN-102 BNF content update
    
    * GN-103 BNFC content
    
    * GN-103 Revert nav text to abbreviation
    
    * GN-103 Use var for url
    
    * GN-103 Spacing
    
    * GN-101 Fix failing tests
    
    * GN-103 Update snapshot
    
    * GN-103 Button fix and letter link fix
    
    * GN-103 Button dancing fix
    
    * GN-103 Another dancing button fix attempt
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-105 Standards and indicators content (#128)
    
    * GN-105 Content for standards and indicators
    
    * GN-105 Update links
    
    * GN-105 Remove standards and indicators from more
    
    * GN-101 Fix failing tests
    
    * GN-105 Update snapshot
    
    * GN-105 Amend S&I base link
    
    Co-authored-by: w@rren <w@rren.dev>
    Co-authored-by: John Davey <66066685+johndavey72@users.noreply.github.com>
    
    * GN-106 About us content (#130)
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Styling issues across applications
    
    * GN-101 Use bundled design system css
    
    * GN-101 Loose grid
    
    * GN-98 Initial guidance content
    
    * GN-98 Content update
    
    * GN-106 About us content
    
    * GN-101 Fix failing tests
    
    * GN-106 Update snapshot
    
    * GN-98 Snapshot updated
    
    * GN-106 Content link issue
    
    * Start guidance content
    
    * AW/21 Colour Scheme
    
    * GN-98 Guidance content
    
    * GN-106 About us content update
    
    * GN-108 Remove e.preventDefault on mega menu click handler to enable links to work
    
    * GN-108 Fix scrim
    
    * GN-108 Add canUseDOM state to control display of dropdown menus in main nav
    
    * Prettier
    
    * Reset root about us URL
    
    Co-authored-by: w@rren <w@rren.dev>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    Co-authored-by: John Davey <66066685+johndavey72@users.noreply.github.com>
    
    * GN-98 Guidance content (#129)
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Styling issues across applications
    
    * GN-101 Use bundled design system css
    
    * GN-101 Loose grid
    
    * GN-98 Initial guidance content
    
    * GN-98 Content update
    
    * GN-101 Fix failing tests
    
    * GN-98 Snapshot updated
    
    * Start guidance content
    
    * AW/21 Colour Scheme
    
    * GN-98 Guidance content
    
    * GN-108 Remove e.preventDefault on mega menu click handler to enable links to work
    
    * GN-108 Fix scrim
    
    * GN-108 Add canUseDOM state to control display of dropdown menus in main nav
    
    * Url updates
    
    * Prettier
    
    Co-authored-by: w@rren <w@rren.dev>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    
    * GN-104 Cks content (#127)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Styling issues across applications
    
    * GN-101 Use bundled design system css
    
    * GN-101 Loose grid
    
    * GN-98 Initial guidance content
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-102 Add BNF content
    
    * GN-102 BNFc content
    
    * GN-102 BNF content update
    
    * GN-103 BNFC content
    
    * GN-104 CKS content
    
    * GN-104 Revert nav text to abbreviation
    
    * GN-103 Revert nav text to abbreviation
    
    * GN-101 Code review fixes
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-102 Nitpicking css
    
    * GN-104 Rename var
    
    * GN-102 Pull url from services
    
    * GN-103 Use var for url
    
    * GN-98 Content update
    
    * demo stuff
    
    * GN-104 Url var
    
    * GN-102 Spacing
    
    * GN-103 Spacing
    
    * GN-105 Content for standards and indicators
    
    * GN-106 About us content
    
    * GN-105 Update links
    
    * GN-105 Remove standards and indicators from more
    
    * GN-101 Fix failing tests
    
    * GN-102 Update snapshot
    
    * GN-103 Update snapshot
    
    * GN-105 Update snapshot
    
    * GN-106 Update snapshot
    
    * GN-104 Update snapshot
    
    * GN-98 Snapshot updated
    
    * GN-000 Alpha services. May want renaming for UR.
    
    * GN-000 Renamed for UR. DO NOT DEPLOY TO LIVE.
    
    * GN-000 Snapshot updated
    
    * GN-000 Links for UR. DO NOT DEPLOY TO LIVE
    
    * GN-000 Prettier issue
    
    * GN-102 Fix letters and dancing button
    
    * GN-103 Button fix and letter link fix
    
    * GN-103 Button dancing fix
    
    * GN-103 Another dancing button fix attempt
    
    * GN-106 Content link issue
    
    * GN-105 Amend S&I base link
    
    * Start guidance content
    
    * AW/21 Colour Scheme
    
    * GN-98 Guidance content
    
    * GN-106 About us content update
    
    * GN-109 More content
    
    * GN-107 Pathways content
    
    * GN-108 Remove e.preventDefault on mega menu click handler to enable links to work
    
    * GN-108 Fix scrim
    
    * GN-108 Add canUseDOM state to control display of dropdown menus in main nav
    
    * Duplicate css removed
    
    * Remove duplicate CSS
    
    * Remove duplicate css
    
    * Remove duplicate export
    
    * Links to live
    
    * Tidy up
    
    * GN-104 Snapshot update
    
    * Snapshot update
    
    Co-authored-by: w@rren <w@rren.dev>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    
    * GN-109 More dropdown content (#133)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Styling issues across applications
    
    * GN-101 Use bundled design system css
    
    * GN-101 Loose grid
    
    * GN-98 Initial guidance content
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-102 Add BNF content
    
    * GN-102 BNFc content
    
    * GN-102 BNF content update
    
    * GN-103 BNFC content
    
    * GN-104 CKS content
    
    * GN-104 Revert nav text to abbreviation
    
    * GN-103 Revert nav text to abbreviation
    
    * GN-101 Code review fixes
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-102 Nitpicking css
    
    * GN-104 Rename var
    
    * GN-102 Pull url from services
    
    * GN-103 Use var for url
    
    * GN-98 Content update
    
    * demo stuff
    
    * GN-104 Url var
    
    * GN-102 Spacing
    
    * GN-103 Spacing
    
    * GN-105 Content for standards and indicators
    
    * GN-106 About us content
    
    * GN-105 Update links
    
    * GN-105 Remove standards and indicators from more
    
    * GN-101 Fix failing tests
    
    * GN-102 Update snapshot
    
    * GN-103 Update snapshot
    
    * GN-105 Update snapshot
    
    * GN-106 Update snapshot
    
    * GN-104 Update snapshot
    
    * GN-98 Snapshot updated
    
    * GN-000 Alpha services. May want renaming for UR.
    
    * GN-000 Renamed for UR. DO NOT DEPLOY TO LIVE.
    
    * GN-000 Snapshot updated
    
    * GN-000 Links for UR. DO NOT DEPLOY TO LIVE
    
    * GN-000 Prettier issue
    
    * GN-102 Fix letters and dancing button
    
    * GN-103 Button fix and letter link fix
    
    * GN-103 Button dancing fix
    
    * GN-103 Another dancing button fix attempt
    
    * GN-106 Content link issue
    
    * GN-105 Amend S&I base link
    
    * Start guidance content
    
    * AW/21 Colour Scheme
    
    * GN-98 Guidance content
    
    * GN-106 About us content update
    
    * GN-109 More content
    
    * GN-107 Pathways content
    
    * GN-108 Remove e.preventDefault on mega menu click handler to enable links to work
    
    * GN-108 Fix scrim
    
    * GN-108 Add canUseDOM state to control display of dropdown menus in main nav
    
    * Duplicate css removed
    
    * Remove duplicate CSS
    
    * Remove duplicate css
    
    * Remove duplicate export
    
    * Links to live
    
    * Tidy up
    
    * Snapshot update
    
    Co-authored-by: Eleanor Mollett <eleanor.mollett@gmail.com>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    
    * GN-110 Life sciences content (#137)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Styling issues across applications
    
    * GN-101 Use bundled design system css
    
    * GN-101 Loose grid
    
    * GN-98 Initial guidance content
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-102 Add BNF content
    
    * GN-102 BNFc content
    
    * GN-102 BNF content update
    
    * GN-103 BNFC content
    
    * GN-104 CKS content
    
    * GN-104 Revert nav text to abbreviation
    
    * GN-103 Revert nav text to abbreviation
    
    * GN-101 Code review fixes
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-102 Nitpicking css
    
    * GN-104 Rename var
    
    * GN-102 Pull url from services
    
    * GN-103 Use var for url
    
    * GN-98 Content update
    
    * demo stuff
    
    * GN-104 Url var
    
    * GN-102 Spacing
    
    * GN-103 Spacing
    
    * GN-105 Content for standards and indicators
    
    * GN-106 About us content
    
    * GN-105 Update links
    
    * GN-105 Remove standards and indicators from more
    
    * GN-101 Fix failing tests
    
    * GN-102 Update snapshot
    
    * GN-103 Update snapshot
    
    * GN-105 Update snapshot
    
    * GN-106 Update snapshot
    
    * GN-104 Update snapshot
    
    * GN-98 Snapshot updated
    
    * GN-000 Alpha services. May want renaming for UR.
    
    * GN-000 Renamed for UR. DO NOT DEPLOY TO LIVE.
    
    * GN-000 Snapshot updated
    
    * GN-000 Links for UR. DO NOT DEPLOY TO LIVE
    
    * GN-000 Prettier issue
    
    * GN-102 Fix letters and dancing button
    
    * GN-103 Button fix and letter link fix
    
    * GN-103 Button dancing fix
    
    * GN-103 Another dancing button fix attempt
    
    * GN-106 Content link issue
    
    * GN-105 Amend S&I base link
    
    * Start guidance content
    
    * AW/21 Colour Scheme
    
    * GN-98 Guidance content
    
    * GN-106 About us content update
    
    * GN-109 More content
    
    * GN-107 Pathways content
    
    * GN-108 Remove e.preventDefault on mega menu click handler to enable links to work
    
    * GN-108 Fix scrim
    
    * GN-108 Add canUseDOM state to control display of dropdown menus in main nav
    
    * Duplicate css removed
    
    * Remove duplicate CSS
    
    * Remove duplicate css
    
    * Remove duplicate export
    
    * Links to live
    
    * Tidy up
    
    * GN-110 Life Sciences dropdown content
    
    * Snapshot update
    
    Co-authored-by: Eleanor Mollett <eleanor.mollett@gmail.com>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    
    * GN-107 Pathways content (#134)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Styling issues across applications
    
    * GN-101 Use bundled design system css
    
    * GN-101 Loose grid
    
    * GN-98 Initial guidance content
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-102 Add BNF content
    
    * GN-102 BNFc content
    
    * GN-102 BNF content update
    
    * GN-103 BNFC content
    
    * GN-104 CKS content
    
    * GN-104 Revert nav text to abbreviation
    
    * GN-103 Revert nav text to abbreviation
    
    * GN-101 Code review fixes
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-102 Nitpicking css
    
    * GN-104 Rename var
    
    * GN-102 Pull url from services
    
    * GN-103 Use var for url
    
    * GN-98 Content update
    
    * demo stuff
    
    * GN-104 Url var
    
    * GN-102 Spacing
    
    * GN-103 Spacing
    
    * GN-105 Content for standards and indicators
    
    * GN-106 About us content
    
    * GN-105 Update links
    
    * GN-105 Remove standards and indicators from more
    
    * GN-101 Fix failing tests
    
    * GN-102 Update snapshot
    
    * GN-103 Update snapshot
    
    * GN-105 Update snapshot
    
    * GN-106 Update snapshot
    
    * GN-104 Update snapshot
    
    * GN-98 Snapshot updated
    
    * GN-000 Alpha services. May want renaming for UR.
    
    * GN-000 Renamed for UR. DO NOT DEPLOY TO LIVE.
    
    * GN-000 Snapshot updated
    
    * GN-000 Links for UR. DO NOT DEPLOY TO LIVE
    
    * GN-000 Prettier issue
    
    * GN-102 Fix letters and dancing button
    
    * GN-103 Button fix and letter link fix
    
    * GN-103 Button dancing fix
    
    * GN-103 Another dancing button fix attempt
    
    * GN-106 Content link issue
    
    * GN-105 Amend S&I base link
    
    * Start guidance content
    
    * AW/21 Colour Scheme
    
    * GN-98 Guidance content
    
    * GN-106 About us content update
    
    * GN-109 More content
    
    * GN-107 Pathways content
    
    * GN-108 Remove e.preventDefault on mega menu click handler to enable links to work
    
    * GN-108 Fix scrim
    
    * GN-108 Add canUseDOM state to control display of dropdown menus in main nav
    
    * Duplicate css removed
    
    * Remove duplicate CSS
    
    * Remove duplicate css
    
    * Remove duplicate export
    
    * Links to live
    
    * Tidy up
    
    * Snapshot update
    
    Co-authored-by: Eleanor Mollett <eleanor.mollett@gmail.com>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    
    * GN-000 All content (#132)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Styling issues across applications
    
    * GN-101 Use bundled design system css
    
    * GN-101 Loose grid
    
    * GN-98 Initial guidance content
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-102 Add BNF content
    
    * GN-102 BNFc content
    
    * GN-102 BNF content update
    
    * GN-103 BNFC content
    
    * GN-104 CKS content
    
    * GN-104 Revert nav text to abbreviation
    
    * GN-103 Revert nav text to abbreviation
    
    * GN-101 Code review fixes
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-102 Nitpicking css
    
    * GN-104 Rename var
    
    * GN-102 Pull url from services
    
    * GN-103 Use var for url
    
    * GN-98 Content update
    
    * demo stuff
    
    * GN-104 Url var
    
    * GN-102 Spacing
    
    * GN-103 Spacing
    
    * GN-105 Content for standards and indicators
    
    * GN-106 About us content
    
    * GN-105 Update links
    
    * GN-105 Remove standards and indicators from more
    
    * GN-101 Fix failing tests
    
    * GN-102 Update snapshot
    
    * GN-103 Update snapshot
    
    * GN-105 Update snapshot
    
    * GN-106 Update snapshot
    
    * GN-104 Update snapshot
    
    * GN-98 Snapshot updated
    
    * GN-000 Alpha services. May want renaming for UR.
    
    * GN-000 Renamed for UR. DO NOT DEPLOY TO LIVE.
    
    * GN-000 Snapshot updated
    
    * GN-000 Links for UR. DO NOT DEPLOY TO LIVE
    
    * GN-000 Prettier issue
    
    * GN-102 Fix letters and dancing button
    
    * GN-103 Button fix and letter link fix
    
    * GN-103 Button dancing fix
    
    * GN-103 Another dancing button fix attempt
    
    * GN-106 Content link issue
    
    * GN-105 Amend S&I base link
    
    * Start guidance content
    
    * AW/21 Colour Scheme
    
    * GN-98 Guidance content
    
    * GN-106 About us content update
    
    * GN-109 More content
    
    * GN-107 Pathways content
    
    * GN-108 Remove e.preventDefault on mega menu click handler to enable links to work
    
    * GN-108 Fix scrim
    
    * GN-108 Add canUseDOM state to control display of dropdown menus in main nav
    
    * Duplicate css removed
    
    * Remove duplicate CSS
    
    * Remove duplicate css
    
    * Remove duplicate export
    
    * Links to live
    
    * Tidy up
    
    * GN-110 Life Sciences dropdown content
    
    * Snapshot update
    
    Co-authored-by: w@rren <w@rren.dev>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    
    * GN-108 Snag list (#138)
    
    * Scrim
    
    * GN-101 Move focus to search when clicked
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Close MyAccount Dropdown on meganav click
    
    * GN-101 Styling issues across applications
    
    * GN-101 Use bundled design system css
    
    * GN-101 Loose grid
    
    * GN-98 Initial guidance content
    
    * GN-95 Now click scrim to close
    
    * GN-101 Fix list styling variation
    
    * GN-102 Add BNF content
    
    * GN-102 BNFc content
    
    * GN-102 BNF content update
    
    * GN-103 BNFC content
    
    * GN-104 CKS content
    
    * GN-104 Revert nav text to abbreviation
    
    * GN-103 Revert nav text to abbreviation
    
    * GN-101 Code review fixes
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-102 Nitpicking css
    
    * GN-104 Rename var
    
    * GN-102 Pull url from services
    
    * GN-103 Use var for url
    
    * GN-98 Content update
    
    * demo stuff
    
    * GN-104 Url var
    
    * GN-102 Spacing
    
    * GN-103 Spacing
    
    * GN-105 Content for standards and indicators
    
    * GN-106 About us content
    
    * GN-105 Update links
    
    * GN-105 Remove standards and indicators from more
    
    * GN-101 Fix failing tests
    
    * GN-102 Update snapshot
    
    * GN-103 Update snapshot
    
    * GN-105 Update snapshot
    
    * GN-106 Update snapshot
    
    * GN-104 Update snapshot
    
    * GN-98 Snapshot updated
    
    * GN-000 Alpha services. May want renaming for UR.
    
    * GN-000 Renamed for UR. DO NOT DEPLOY TO LIVE.
    
    * GN-000 Snapshot updated
    
    * GN-000 Links for UR. DO NOT DEPLOY TO LIVE
    
    * GN-000 Prettier issue
    
    * GN-102 Fix letters and dancing button
    
    * GN-103 Button fix and letter link fix
    
    * GN-103 Button dancing fix
    
    * GN-103 Another dancing button fix attempt
    
    * GN-106 Content link issue
    
    * GN-105 Amend S&I base link
    
    * Start guidance content
    
    * AW/21 Colour Scheme
    
    * GN-98 Guidance content
    
    * GN-106 About us content update
    
    * GN-109 More content
    
    * GN-107 Pathways content
    
    * GN-108 Remove e.preventDefault on mega menu click handler to enable links to work
    
    * GN-108 Fix scrim
    
    * GN-108 Add canUseDOM state to control display of dropdown menus in main nav
    
    * Duplicate css removed
    
    * Remove duplicate CSS
    
    * Remove duplicate css
    
    * Remove duplicate export
    
    * Links to live
    
    * Tidy up
    
    * GN-108 Primary to CTA buttons
    
    * GN-108 Add column gap
    
    * GN-108 Consistent URLs
    
    Co-authored-by: Eleanor Mollett <eleanor.mollett@gmail.com>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    
    * GN-112 New simplified pathways content (#139)
    
    * GN-112 New simplified pathways content
    
    * GN-112 Remove pathways dropdown
    
    * GN-113 Alpha snag list (#140)
    
    * Settings
    
    * GN-113 Alpha snag list
    
    * Config typo
    
    * GN-000 Merge npm release (#144)
    
    * GN-116 Publishing to npm (#142)
    
    * GN-116 Pin Node version with Volta
    
    * GN-116 Update readme
    
    * GN-56 Footer logo and remove IE8 support for SVG fallback (#141)
    
    Co-authored-by: Ian Routledge <ian@ediblecode.com>
    
    Co-authored-by: Ian Routledge <ian.routledge@nice.org.uk>
    Co-authored-by: Ian Routledge <ian@ediblecode.com>
    
    * GN-119 BNF CSS scoping (#146)
    
    * GN-138 Shorten nav copy (#147)
    
    * GN-140 Standards and indicators content (#151)
    
    * GN-116 Publishing to npm (#142)
    
    * GN-116 Pin Node version with Volta
    
    * GN-116 Update readme
    
    * GN-56 Footer logo and remove IE8 support for SVG fallback (#141)
    
    Co-authored-by: Ian Routledge <ian@ediblecode.com>
    
    * GN-140 Standards removal
    
    Co-authored-by: Ian Routledge <ian.routledge@nice.org.uk>
    Co-authored-by: Ian Routledge <ian@ediblecode.com>
    
    * GN-118 Add non-JS dropdown (#149)
    
    * GN-118 Add non-JS dropdown
    
    * GN-118 More link fallback
    
    * Removed redundant nesting
    
    * GN-117 Remove need to assert on dom (#148)
    
    * context experiments
    
    * basic context setup
    
    * tidy up debugging
    
    * uncommen event listener for expected closing behaviour
    
    * make debug clearer
    
    * clean up console logging for clarity
    
    * move globalnavcontext provider up to header component
    
    * GN-117 add useCallback to clickOutside hook to maintain reference to id of open dropdown
    
    * GN-117 Refactor Nav component to class. Add custom hook and context for open dropdown state and nav area click outside detection
    
    * GN-117 Begin conversion of Account class component to functional component
    
    * GN-117 Remove commented out lines
    
    * GN-117 Reinstate propTypes for Naccount placeholder component
    
    * Side effect sideline (#150)
    
    * side effect shenanigans
    
    * Magical useRef()
    
    * update key event to use e.key rather than e.keycode for better cross platform
    
    * Move myAccount isExpanded state into GlobalNavContext
    
    * Remove redundant event binding
    
    * Make megamenu click detection more 'reacty'
    
    * Manage context of opened menus
    
    * Rename Naccount component to Account
    
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    
    * Tests needed
    
    * GN-117 Tidy up redundant arguments and commented out logic for useClickOutside hook
    
    * GN-117 Change directory structure for hooks and react context. Make useClickOutside re-useable.
    
    * GN-117 Import GlobalNavContextProvider from new location for Account tests
    
    * GN-117 Fixing broken unit tests
    
    * GN-117 Fixing broken tests
    
    * GN-117 Fixing broken tests
    
    * Replace simulate click
    
    * GN-117 Revert some tests to shallow rendering after adding defaults to context
    
    * GN-117 Revert to shallow mounting for a previously failing unit test
    
    * GN-117 Convert unit test from shallow to mount due to issues around enzyme support of useContext 'https://github.com/enzymejs/enzyme/issues/2176'
    
    * GN-117 Rename GlobalNavContext to HeaderContext
    
    * GN-117 remove unused dependencies from account test
    
    * GN-117 Tidy up unit tests
    
    * testing custom hook useClickOutside
    
    * basic setup
    
    * Custom hook test
    
    * Update test
    
    * Rename test
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * Set base high z-index (#152)
    
    * Snapshot update
    
    * Remove nerv
    
    * GN-146 Data tracking attributes
    
    * GN-146 Data tracking attributes (#153)
    
    * Update snapshot
    
    * GN-115 Add additional data-tracking attributes
    
    * GN-115 Update test snapshot
    
    * GN-145 Implement self contained grid system (#155)
    
    * Replace find with filter (#154)
    
    * GN-148 Fix content overflow
    
    * Move focus trap to deps
    
    * GN-149 Skip x route (#157)
    
    * GN-149 Reinstate ids for top level links to make them focussable upon closing dropdown
    
    * GN-149 Refactor
    
    Co-authored-by: w@rren <w@rren.dev>
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-130 Fix invisible white close button
    
    * Scrim flicker fix
    
    Co-authored-by: John Davey <johndavey72@users.noreply.github.com>
    
    * GN-115 Add IE11 compatible e.key string for escape key
    
    * GN-115 Fix bug in copy
    
    * GN-115 Add Esc to ESCAPE_KEYS for IE11 support
    
    * Communities link update
    
    * Fix concatenated links
    
    * Correct public involvement link (again)
    
    * GN-137 Add tests (#158)
    
    * Uncommented tests
    
    * GN-137 Add unit tests for dropdown component
    
    * Updated browserslist & caniuse
    
    * NavLinks test WIP
    
    * Trying to test WIP
    
    * GN-137 Fix tests for tracked link
    
    * GN-137 Update 'Proposed' to 'Awaiting development'
    
    * GN-137 Skip failing test - enzyme mocking hooks issue
    
    * GN-137 Fix or skip failing tests due to enzyme react hooks testing issues
    
    Co-authored-by: w@rren <w@rren.dev>
    
    * GN-154 Button styling
    
    Including GN-155 GN-153
    
    * GN-115 Add data-tracking attrs for Standards and Indicators dropdown
    
    * Alpha current style override
    
    Co-authored-by: John Davey <johndavey72@users.noreply.github.com>
    
    Co-authored-by: Eleanor Mollett <eleanor.mollett@gmail.com>
    Co-authored-by: John Davey <66066685+johndavey72@users.noreply.github.com>
    Co-authored-by: John Davey <john.davey@nice.org.uk>
    Co-authored-by: Ian Routledge <ian.routledge@nice.org.uk>
    Co-authored-by: Ian Routledge <ian@ediblecode.com>
    Co-authored-by: John Davey <johndavey72@users.noreply.github.com>

[33mcommit 23ed7aff9947cb529597965369a16ef66484228c[m[33m ([m[1;33mtag: 663[m[33m, [m[1;33mtag: 649[m[33m, [m[1;33mtag: 599[m[33m, [m[1;33mtag: 4.1.595+r23ED7AF[m[33m, [m[1;33mtag: 4.1.594+r23ED7AF[m[33m)[m
Author: w@rren <w@rren.dev>
Date:   Mon Nov 8 12:35:23 2021 +0000

    GN-56 Footer logo and remove IE8 support for SVG fallback (#141)
    
    Co-authored-by: Ian Routledge <ian@ediblecode.com>

[33mcommit 52e08c75d2e16107d0f68216dad4ceba3e1f1969[m[33m ([m[1;33mtag: 4.1.592+r52E08C7[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Nov 5 15:50:02 2021 +0000

    GN-116 Publishing to npm (#142)
    
    * GN-116 Pin Node version with Volta
    
    * GN-116 Update readme

[33mcommit 8c2b7a8f25786585d2c530efe692c9113a84fa58[m[33m ([m[1;33mtag: 4.1.0.462+r8C2B7A8[m[33m)[m
Author: Grendelsson <Grendelsson@users.noreply.github.com>
Date:   Mon Aug 9 11:04:51 2021 +0100

    GN-92-Add destination url for typeahead into dataLayer push (#119)
    
    * GN-92-Add destination url for typeahead into dataLayer push
    
    * GN-92-Run prettier on index.test.js
    
    * GN-92-Fix failing tests

[33mcommit bb22878db75df0e581776c6f8d4df2042b75cbed[m[33m ([m[1;33mtag: 4.1.0.458+rBB22878[m[33m)[m
Author: w@rren <w@rren.dev>
Date:   Thu Jul 22 10:08:36 2021 +0100

    NAV1-1 Life sciences link (#118)
    
    * GN-000 Life sciences link in
    
    * GN-000 Padding regret

[33mcommit db318d6b5eb45a40f2e1655e287c7fb48186d1ec[m[33m ([m[1;33mtag: 4.1.0.455+rDB318D6[m[33m)[m
Author: w@rren <w@rren.dev>
Date:   Tue Jun 15 15:55:53 2021 +0100

    GN-90 Add iOS detect for inlining autocomplete (#114)
    
    * GN-90 Add iOS detect for inlining autocomplete
    
    * Missing display switch
    
    * GN-90 Term finder formatting

[33mcommit 176439a5df3c09096ab7498ebda2389407779515[m[33m ([m[1;33mtag: 4.1.0.451+r176439A[m[33m)[m
Author: w@rren <w@rren.dev>
Date:   Thu Jun 10 11:46:51 2021 +0100

    GN-54 Add skip to content link after search box (#111)
    
    * GN-54 Add skip to content link after search box
    
    * GN-54 Separate SkipLink into component
    
    * Remove redundant styling
    
    * GN-54 Make 'to' prop required in skiplink
    
    * Update package lock

[33mcommit 1d06ff40198f16ebcc3e53106aba963739012093[m[33m ([m[1;33mtag: 4.1.0.448+r1D06FF4[m[33m)[m
Author: John Williams <John-Williams@users.noreply.github.com>
Date:   Fri Jun 4 09:59:12 2021 +0100

    ID-278 Add support for internal services (#94)
    
    * ID-278 - updating the services.json file with an internal and external section, then updating the tests + code to match. internal not used yet.
    
    * ID-278 - adding support and tests for the internal services only showing themselves.
    
    * ID-278 - improving a test and adding another one.
    
    * ID-278 - adding the additional submenuitems implementation and tests.
    
    * ID-278 - updating documentation for the new property
    
    * ID-278 - adding an example for indev.
    
    * ID-278 - ruuning prettier:fix to fix up some formatting
    
    * ID-278 Fixed concat issue
    
    Co-authored-by: John Holland <john.holland@nice.org.uk>

[33mcommit d9692aa594cfbc91ff6c6d6c8ab07f46d20c09e1[m[33m ([m[1;33mtag: 4.1.0.442+rD9692AA[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri May 28 14:26:04 2021 +0100

    GN-89 Allow custom suggestion template (#109)
    
    * GN-89 Bump package with minor version
    
    This new config is a new feature
    
    * GN-89 Add suggestion template and update deps
    
    * GN-89 Remove console log
    
    * GN-89 Add audit command for team city
    
    * GN-89 Fix launch command
    
    * GN-89 Pass autocomplete options from search
    
    * GN-89 Export all types
    
    * GN-89 Downgrade react back to 16
    
    Enzyme doesn't support 17
    
    * GN-89 Add new suggestion template options to readme

[33mcommit 067ce16c5ff8da0fa2194dff3b8e4b41c90eaf63[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 29 11:49:07 2021 +0100

    Update readme: make it clearer how to disable auth (#101)

[33mcommit 35b663ee31045041ac09b6c8790745c35b98bfd2[m[33m ([m[1;33mtag: 4.0.0.426+r35B663E[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Mar 11 14:45:37 2021 +0000

    GN-88 Fix wrapping with main navigation on tablets (#100)

[33mcommit 883cb100659572e9cab4b79179040a8985be0bc3[m[33m ([m[1;33mtag: 4.0.0.424+r883CB10[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Mar 11 12:54:54 2021 +0000

    GN-86 Document TitleHtml field (#97)

[33mcommit 7631700e57cd1cd2bb5e0b8d3a6f54f7fff684b5[m[33m ([m[1;33mtag: 4.0.0.422+r7631700[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Mar 9 11:26:08 2021 +0000

    GN-87 Update deps (#99)

[33mcommit 243e9d9d0441a7155b541a6d8b1fa59b62f1f2f4[m[33m ([m[1;33mtag: 4.0.0.420+r243E9D9[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 8 16:26:30 2021 +0000

    GN-85 Fix issue with enter key press not working (#96)

[33mcommit 4c0b87ff7f65833aa95988581cb117897bf35ffb[m[33m ([m[1;33mtag: 4.0.0.414+r4C0B87F[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Mar 3 13:40:18 2021 +0000

    GN-95 Hydration issue with autocomplete (#95)
    
    * GN-85 Fix hydration issue
    
    * GN-85 Fix autocomplete hydration

[33mcommit b0a4285ccce021da58473c1db2ae7620c38bf75a[m[33m ([m[1;33mtag: 4.0.0.412+rB0A4285[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 25 16:09:09 2021 +0000

    GN-38 Add 512 character max length (#93)

[33mcommit 69a9b3e5607a49520de9632afdc26fe84421651d[m[33m ([m[1;33mtag: 4.0.0.408+r69A9B3E[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Jan 19 13:02:57 2021 +0000

    GN-83 Fix CSS import paths (#92)

[33mcommit bd7f4964303cba16fd05d844cc3cd3fbbc51d7f0[m[33m ([m[1;33mtag: 4.0.0.406+rBD7F496[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Jan 18 14:24:17 2021 +0000

    GN-82 Rename health topics for CKS (#90)

[33mcommit 8474c9d7502d0d568683417d19727161188afab0[m[33m ([m[1;33mtag: 4.0.0.405+r8474C9D[m[33m)[m
Author: w@rren <w@rren.dev>
Date:   Tue Jan 12 13:56:21 2021 +0000

    GN-80 Evidence search retest tasks (#88)
    
    * GN-80 Evidence search retest tasks
    
    * fix tests
    
    * GN-80 Upgrade /icons to 2.1.6 for non-focusable SVGs
    
    * GN-80 Add keyboard tooltips to footer service links
    
    * GN-80 Updated snapshot
    
    * GN-80 Update NICE icons to 2.1.7
    
    Co-authored-by: Liza Adebowale <Liza.Adebowale@nice.org.uk>

[33mcommit e41664faa08a95bfd790ccb5cb6241fe3c7c09a7[m[33m ([m[1;33mtag: 402[m[33m, [m[1;33mtag: 4.0.0.392+rE41664F[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Nov 27 11:09:45 2020 +0000

    GN-73 Apply auto content visibility to footer (#86)
    
    As per https://web.dev/content-visibility/

[33mcommit 7c9241837600ec217300ded76c43fa266d45a1f4[m[33m ([m[1;33mtag: 4.0.0.386+r7C92418[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Nov 12 10:08:13 2020 +0000

     GN-71 Update deps (#84)
    
    * GN-71 Update deps
    
    * GN-71 Bump package json version
    
    We're introducing a breaking change, mostly because of the
    env flags for webpack 4
    
    * GN-71 Add prettier to lint command
    
    * GN-71 Update readme
    
    Update Node version and add new tasks
    
    * GN-71 Add v2 upgrade docs
    
    * GN-71 Update deps and use dart sass

[33mcommit 721e710bf2e829d0d2259429773676ffd7211b35[m[33m ([m[1;33mtag: 3.0.0.382+r721E710[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Nov 11 11:01:50 2020 +0000

    GN-74 Replace hot loader with fast refresh (#87)
    
    * GN-74 Replace hot loader with fast refresh
    
    * GN-74 Small refactor

[33mcommit 0f1994c99e84da3b658575c71cc53dc0e4be95a7[m[33m ([m[1;33mtag: 2.0.0.369+r0F1994C[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Nov 2 08:54:29 2020 +0000

    GN-61 Remove cookie banner (#83)
    
    * GN-61 Remove cookie banner
    
    * GN-51 Update deps
    
    * GN-61 Fix test with updated snapshot

[33mcommit 560205384a051b194727105f8682e99d9c39226a[m[33m ([m[1;33mtag: 1.0.0.364+r5602053[m[33m, [m[1;33mtag: 1.0.0.363+r5602053[m[33m, [m[1;33mtag: 1.0.0.362+r5602053[m[33m, [m[1;33mtag: 1.0.0.361+r5602053[m[33m, [m[1;33mtag: 1.0.0.360+r5602053[m[33m, [m[1;33mtag: 1.0.0.359+r5602053[m[33m, [m[1;33mtag: 1.0.0.358+r5602053[m[33m, [m[1;33mtag: 1.0.0.357+r5602053[m[33m, [m[1;33mtag: 1.0.0.354+r5602053[m[33m, [m[1;33mtag: 1.0.0.352+r5602053[m[33m, [m[1;33mtag: 1.0.0.351+r5602053[m[33m, [m[1;33mtag: 1.0.0.350+r5602053[m[33m)[m
Author: w@rren <w@rren.dev>
Date:   Tue Oct 13 09:30:25 2020 +0100

    GN-69 A11y & Skip link h1 (#82)
    
    * GN-69 A11y & Skip link h1
    
    * GN-69 Refine nested roles for sub nav
    
    * GN-69 Removed redundant test

[33mcommit d27fa1e12b174846d080090fe3ec6db3a2c73aa8[m[33m ([m[1;33mtag: 1.0.0.344-rD27FA1E[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Sep 25 14:16:11 2020 +0100

    GN-68 Add cookie statement link to footer (#81)

[33mcommit 6b4f5ee9b58b24d527839f57431bb6b9985614bf[m[33m ([m[1;33mtag: 340[m[33m, [m[1;33mtag: 339[m[33m, [m[1;33mtag: 1.0.0.341-r6B4F5EE[m[33m)[m
Author: Eleanor Mollett <eleanor.mollett@gmail.com>
Date:   Mon Sep 7 14:08:07 2020 +0100

    ACC-175 Label for mobile menu button is clearer (#80)
    
    * ACC-175 Label for mobile menu button is clearer
    
    * ACC-175 Snapshot updated

[33mcommit 9f1e7970bad0bcb499e32681b33ea7cf1b4218fa[m[33m ([m[1;33mtag: 1.0.0.356+r9F1E797[m[33m, [m[1;33mtag: 1.0.0.336-r9F1E797[m[33m)[m
Author: 1996dylanriley <dylan.riley@nice.org.uk>
Date:   Tue Sep 1 13:41:21 2020 +0100

    GN-62 Minimize covid banner (#79)
    
    * GN-62 Minimize covid banner
    
    * GN-62 Styling for minimized covid header
    
    * GN-62 Remove obsolete covid banner tests
    
    * GN-62 Remove more obsolete code
    
    * GN-62 Add snapshot test
    
    * GN-62 Hide banner on print

[33mcommit 4721e8d430f387853ad0e431d1ef8a802eee3aae[m[33m ([m[1;33mtag: 1.0.0.325-r4721E8D[m[33m)[m
Author: 1996dylanriley <dylan.riley@nice.org.uk>
Date:   Wed Aug 19 13:12:59 2020 +0100

    GN-52 CKS gatsby updates (#69)
    
    * GN-52 Update CKS sub nav links
    
    * GN-52 Implement on onNavigating for type ahead
    
    * GN-52 Fix broken build and test
    
    * GN-52 Pass onnavigaing prop to Autocomplete component
    
    * GN-52 Update test
    
    * GN-52 Update services.json for CKS-Gatsby
    
    * GN-52 Update Search.jsx
    
    Co-authored-by: Ian Routledge <ian.routledge@nice.org.uk>
    
    * GN-52 Disable omnisharp
    
    Stops loads of false errors appearing in vscode
    
    * GN-52 Add test for autocomplete onnavigating func
    
    * GN-52 Bump autocomplete version (#71)
    
    * GN-52 Add max width for list items
    
    Because of https://github.com/nice-digital/nice-design-system/issues/102
    
    * GN-57 CKS logo (#75)
    
    * GN-57 Add initial CKS logo
    
    * GN-57 Hide graphic links on mobile
    
    - Remove PNG fallback for NICE logo
    
    * GN-57 Reference SVG by import
    
    * Copy SVG to lib for build
    
    * GN-000 Minor styling amend
    
    * Add static file mock to jest
    
    * GN-52 Bump nice icons version
    
    * CKS-393 Allow aria label to be used for identifying tracking links (#77)
    
    * CKS-393 Allow aria label to be used for identifying tracking links
    
    * Move aria-label to the anchor
    
    * GN-000 Revise aria label (#78)
    
    * GN-52 Fix autocomplete styling issues
    
    Gap below search box on guidance
    Suggestions not filling space
    
    Co-authored-by: Ian Routledge <ian.routledge@nice.org.uk>
    Co-authored-by: Ian Routledge <ian@ediblecode.com>
    Co-authored-by: w@rren <w@rren.dev>

[33mcommit 526f52f7a10df70bebce5cc494a2bb3910f5d7ed[m
Author: w@rren <w@rren.dev>
Date:   Wed Aug 19 13:12:44 2020 +0100

    GN-55 Update hotjar to use "allow" (#73)

[33mcommit cb76c8993345853bed6d1b172dd38016c00b19e3[m[33m ([m[1;33mtag: 1.0.0.320-rCB76C89[m[33m)[m
Author: John Holland <john.holland@nice.org.uk>
Date:   Tue Aug 11 13:42:45 2020 +0100

    EC-822 See all consultations link for global nav account dropdown (#72)
    
    * EC-822 Added consultations link to idam/nice accounts dropdown
    
    * EC-822 Added consultations link to idam/nice accounts dropdown [fixes] :smile:
    
    * Update README.md
    
    * Update README.md
    
    * EC-822 Made more readable
    
    * EC-822 Updated consultations link in account dropdown

[33mcommit baf45d4be0e3336a02c44b36bc6555e758d1dd6f[m[33m ([m[1;33mtag: 1.0.0.286-rBAF45D4[m[33m, [m[1;33mtag: 1.0.0.279-rBAF45D4[m[33m)[m
Author: w@rren <warren.keith@nice.org.uk>
Date:   Tue May 19 21:21:10 2020 +0100

    GN-50 Quote copyfiles operation (#67)
    
    * GN-50 Quote copyfiles operation
    
    * Update gitignore

[33mcommit 18a40433c5a7589355f78f9f824064a70224fb01[m[33m ([m[1;33mtag: 1.0.0.276-r18A4043[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 13 16:20:53 2020 +0100

    GN-49 Tweaks (#66)
    
    * GN-49 Allow false for header auth in typescript
    
    * GN-49 Exclude test files from transpilation
    
    * GN-49 Add npmignore
    
    * GN-49 Fix hot loader issue
    
    * GN-49 Fix prop types for auth property

[33mcommit 97a4e968fee60c5390c5c68aa7146d6020e056a5[m[33m ([m[1;33mtag: 1.0.0.273-r97A4E96[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 7 10:57:12 2020 +0100

    GN-40 Remove CKS feedback link (#65)
    
    The form has been removed from Orchard

[33mcommit dd217985a16fe3d8edf951e422cadb18edc0b06a[m[33m ([m[1;33mtag: 1.0.0.271-rDD21798[m[33m)[m
Author: w@rren <warren.keith@nice.org.uk>
Date:   Thu Apr 2 11:37:24 2020 +0100

    GN-46 Move COVID aside out of header (#63)

[33mcommit a63d85682a5d0a17a87148bb14c040d59c9361a5[m[33m ([m[1;33mtag: 1.0.0.269-rA63D856[m[33m)[m
Author: w@rren <warren.keith@nice.org.uk>
Date:   Wed Apr 1 15:13:31 2020 +0100

    GW-270 COVID banner rewording (#62)

[33mcommit 782d748efc7187e34d292150f9b06c2512f716cb[m[33m ([m[1;33mtag: 1.0.0.267-r782D748[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Mar 31 16:18:45 2020 +0100

    GN-44 Resize handler (#61)
    
    * GN-44 Add resize handler, triggered via cookie banner closing
    
    * GN-44 Add resize handler to corona message

[33mcommit 5d8d1c2abfa661019e109234a2d40f02cbc8be1d[m[33m ([m[1;33mtag: 1.0.0.265-r5D8D1C2[m[33m)[m
Author: w@rren <warren.keith@nice.org.uk>
Date:   Tue Mar 31 10:32:42 2020 +0100

    GN-42 Add ability to minimise COVID banner with cookie storage (#60)
    
    * GN-000 Add cookie dismiss to the COVID banner
    
    * GN-000 Minimise COVID banner to a thin link
    
    * GN-42 Fix test
    
    Co-authored-by: Ian Routledge <ian.routledge@nice.org.uk>

[33mcommit 66b92b40e4537c0d4c3e5a7e5c97cc72e2d3c4a9[m[33m ([m[1;33mtag: 1.0.0.263-r66B92B4[m[33m)[m
Author: John Williams <John-Williams@users.noreply.github.com>
Date:   Mon Mar 30 16:23:49 2020 +0100

    GN-41 - updating the word reviews to summaries (#58)

[33mcommit 66a2f93daa153b0471d2d23c558530f2bba75e7a[m[33m ([m[1;33mtag: 1.0.0.257-r66A2F93[m[33m)[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 20 13:27:02 2020 +0000

    GN-41 Add coronavirus message (#57)

[33mcommit 575846a568c7cbdd1b5b3790e4e1dc0311546c35[m[33m ([m[1;33mtag: 1.0.0.255-r575846A[m[33m)[m
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Thu Mar 5 11:30:41 2020 +0000

    GN-29 Update dependencies (#56)
    
    * GN-29 Update dependencies
    
    Update dependencies. but specifically update the Accessible Autocomplete
    component which fixes a long click issue, see https://github.com/alphagov/accessible-autocomplete/releases/tag/v2.0.2
    
    * GN-29 Fix for undefined option on focus
    
    * GN-29 Update deps

[33mcommit 0670562e7d2291a772102013ec23a2a8ebfc661c[m[33m ([m[1;33mtag: 1.0.0.250-r0670562[m[33m, [m[1;33mtag: 1.0.0.245-r0670562[m[33m, [m[1;33mtag: 1.0.0.244-r0670562[m[33m, [m[1;33mtag: 1.0.0.243-r0670562[m[33m)[m
Author: Imran Azad <imranazad@users.noreply.github.com>
Date:   Wed Feb 19 15:55:42 2020 +0000

    GN-37 Track New Typeahead (#52)
    
    * GN-37 Track New Typeahead
    
    * GN-37 Track New TypeAhead
    
    * GN-37 Fixed tracking test
    
    * GN-37 Lower case labels in event tracking
    
    * GN-37 Preserve old tracking
    
    * GN-37 Cleanup window.dataLayer per test
    
    * GN-37 Use truthyness for if statment

[33mcommit f07fb165e1bb82c2a96478d2bbd24aca207383f6[m[33m ([m[1;33mtag: 1.0.0.238-rF07FB16[m[33m)[m
Author: w@rren <warren.keith@nice.org.uk>
Date:   Fri Feb 14 11:03:20 2020 +0000

    GN-36 Print styling (#50)
    
    * GN-36 Print styling
    
    * GN-36 Remove print helper usage
    
    * GN-36 Re-implement env.version for webpack build
    
    * GN-36 Update to nds-12
    
    * GN-36 VSCode settings update

[33mcommit d38b74941e5abbc356a6b1bf189f2900cfa7999e[m[33m ([m[1;33mtag: 1.0.0.224-rD38B749[m[33m)[m
Author: John Williams <John-Williams@users.noreply.github.com>
Date:   Wed Jan 29 13:23:13 2020 +0000

    IDAM-349 Making authentication optional (#51)
    
    * IDAM-349 - fixing global-nav's handling of the auth prop being supplied with a false, preventing the sign in button from displaying.
    
    * IDAM-349 - swapping the condition to be on the accounts component's containing div, to reduce extra markup output.
    
    * IDAM-349 - fixing some very minor formatting problems highlighted by lint.

[33mcommit 13360ebf6293be0d33e40460bd5b5c3cd91a04f0[m[33m ([m[1;33mtag: 1.0.0.207-r13360EB[m[33m)[m
Author: Warren <warren.keith@nice.org.uk>
Date:   Wed Nov 20 09:51:38 2019 +0000

    GN-35 Extend typeahead on mobile (#49)
    
    * OI-76 Add mobile typeahead
    
    * Resolve background missing
    
    * OI-76 Rename vars for updated DS
    
    * OI-76 Typeahead mobile sizing
    
    Also update variables to use new NDS prefix
    
    * GN-35 Use new gutter var in autocomplete mobile
    
    * GN-35 Update nhsevidence to nice-digital
    
    * GN-35 Revert nds prefix
    
    * GN-35 Fix bug with header using wrong font
    
    SCSS variable name was referenced incorrectly
    
    * GN-35 Remove max height for the autocomplete suggestions
    
    Suggestions were running over the containe when there are 'deep' suggestions.
    That is, suggestions that wrap to multiple lines.
    
    * GN-35 Update dependencies
    
    * GN-35 Update supported node version
    
    Upgraded dependencies require Node 8.9+
    (e.g. cross-env and style loader v1)

[33mcommit 9afad701666ebc8c4ca85c5de47505c5bf468848[m[33m ([m[1;33mtag: 1.0.0.195-r9AFAD70[m[33m)[m
Author: John Holland <john.holland@nice.org.uk>
Date:   Mon Nov 11 13:59:21 2019 +0000

    IDAM-248 Identity management update (#33)
    
    * IDAM-248 - Added in provider argument for logged in function
    
    * IDAM-248 - WIP
    
    * IDAM-248 - WIP
    
    * IDAM-248 - WIP
    
    * IDAM-248 - WIP
    
    * IDAM-248 - WIP
    
    * IDAM-248 - WIP
    
    * IDAM-248 - WIP
    
    * IDAM-248 - WIP
    
    * IDAM-248 Removed unused prop
    
    * IDAM-248 - Added snapshot tests and changed sign in link for account
    
    * Update README.md
    
    * IDAM-248 Updated type definitions
    
    * IDAM-248 Updated type definitions
    
    * IDAM-248 - Code review fixes
    
    * Update types.d.ts
    
    * IDAM-248 Removed missing stylesheets
    
    * IDAM-248 Code review fixes
    
    * IDAM-248 Fixed tests
    
    * IDAM-248 Code review fixes

[33mcommit 29385317edb315b0b772da1851a38c299b71039d[m[33m ([m[1;33mtag: 172-r2938531[m[33m, [m[1;33mtag: 171[m[33m, [m[1;33mtag: 170[m[33m, [m[1;33mtag: 168[m[33m, [m[1;33mtag: 1.0.0.192-r2938531[m[33m, [m[1;33mtag: 1.0.0.186-r2938531[m[33m, [m[1;33mtag: 1.0.0.154-r2938531[m[33m, [m[1;33mtag: 1.0.0.153-r2938531[m[33m)[m
Merge: f152640 7acc1b5
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Mon Oct 14 13:20:01 2019 +0100

    Merge pull request #31 from nhsevidence/GN-32
    
    GN-32 Ensure main nav landmark is unique

[33mcommit f152640f4d6fcf2d68234facf56d2389f295445c[m[33m ([m[1;33mtag: 1.0.0.150-rF152640[m[33m)[m
Merge: d8a938d 0316ae1
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Tue Oct 8 15:04:14 2019 +0100

    Merge pull request #30 from nhsevidence/GN-31-Old-IE-message
    
    GN-31 Old IE browser support message

[33mcommit d8a938dfe90ff2aae405d5c5384bcfa6b1b84359[m[33m ([m[1;33mtag: 1.0.0.147-rD8A938D[m[33m)[m
Merge: 431d704 40d1e28
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Tue Oct 8 14:37:15 2019 +0100

    Merge pull request #32 from nhsevidence/GN-33-Problem-With-Top-Search-Bar
    
    GN-33 Implement debounce algorithm to limit network requests

[33mcommit 0316ae1d434fae852ee6bc01a875e971f80fc904[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Oct 8 14:31:44 2019 +0100

    GN-31 Fix search placeholder colour for IE11

[33mcommit 40d1e2849fa20deb71f8101941f07cffcd59338c[m
Author: Imran Azad <imran.azad@nice.org.uk>
Date:   Tue Oct 8 11:20:11 2019 +0100

    GN-33 Change Add method comment

[33mcommit 824f247bb92d33b2ad13ab1ff1949d8d6f93c8fe[m
Author: Imran Azad <imran.azad@nice.org.uk>
Date:   Tue Oct 8 11:18:23 2019 +0100

    Set limit to 300 milliseconds

[33mcommit dbd448c91a6f0605d1838889125f3e3718457208[m
Author: Imran Azad <imran.azad@nice.org.uk>
Date:   Mon Oct 7 15:35:22 2019 +0100

    GN-33 Implement debounce algorithm to limit network requests

[33mcommit 7acc1b5ed2afd8c3ecb88a206c9ca056aedfc754[m
Author: dylan <dylan.riley@nice.org.uk>
Date:   Mon Oct 7 12:27:29 2019 +0100

    GN-32 Ensure main nav landmark is unique

[33mcommit 6137d8ff759389e07cbcdad62c4f71dd05f6de1f[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Oct 7 11:12:26 2019 +0100

    GN-31 Fix spelling mistakes in old IE message

[33mcommit 89f4584ce94eb4b209a1685ef93186dfac816d23[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Oct 7 11:00:52 2019 +0100

    GN-31 Fix Licence spelling

[33mcommit 2b87541848da9792e1b49437141b477cae9406d0[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Sep 20 09:40:22 2019 +0100

    Fix minor styling issue with search bar on guidance pages

[33mcommit 3020c2e0ea685c5a885c95ba78ef3aa3602a003b[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Sep 20 09:39:44 2019 +0100

    GN-31 Add browser support message for old IE
    
    And remove TLS message

[33mcommit 431d704523d7efa9bd9f19be54d71056225b3ee2[m[33m ([m[1;33mtag: 1.0.0.139-r431D704[m[33m)[m
Merge: 9239913 06451e0
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Wed Sep 11 13:46:16 2019 +0100

    Merge pull request #29 from nhsevidence/GN-30-Create-react-app-2
    
    GN-30 Support create react app 2

[33mcommit 06451e08f57eb1403f99be4bf01d63ca3bb32970[m
Author: Jose Hilario Almeida <josealmeida@gmail.com>
Date:   Wed Aug 28 16:48:00 2019 +0100

    GN-30 Add directories section to package.json

[33mcommit 5460b907d6694030fbfc98172e4148fa9487721e[m
Author: Jose Hilario Almeida <josealmeida@gmail.com>
Date:   Wed Aug 28 16:39:07 2019 +0100

    GN-30 Add files section to package.json

[33mcommit 621b77a36917fb0e09d56b050fa93ffed1d2b08d[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 9 18:53:36 2019 +0100

    GN-30 Fix bug with logo icon being too small

[33mcommit 27eebc78f2550d183654f9d684c95e6638627172[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 9 16:30:47 2019 +0100

    GN-30 Fix search tests

[33mcommit 7f95b7c94fa3e07394c08767b44c4ac0ce1bfeb4[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 9 16:24:58 2019 +0100

    GN-30 Fix cookie message tests

[33mcommit 3ea381b2a8f5bd756e9d7772e76f3c411e768839[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 9 15:54:54 2019 +0100

    GN-30 Fix cookie message not rehydrating properly
    
    ...when server rendered

[33mcommit 71ae4d1c0737a21fa7b0aff1c09a2101504d0282[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 9 15:51:41 2019 +0100

    GN-30 Fix bug with logo being too small

[33mcommit 821ab71bbc0f1cf5031d7705f70c165a2f227fd0[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 9 11:57:41 2019 +0100

    Fix header/footer type defs

[33mcommit f12f847db745d38485ef8fdc75d6da4486cb5e37[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 9 11:57:03 2019 +0100

    Fix typeahead throwing but when server rendering
    
    The GOVUK Accessible Autocomplete component tries to access window when
    it renders, which is fine client side but throws an error
    server side when window is not available. This stops us being able to
    use the global nav in Gatsby

[33mcommit 610c8689fc4c025c917bef69110d301607fd1452[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Aug 5 15:56:52 2019 +0100

    GN-30 Fix spacing issue with autocomplete suggestions
    
    Design system has padding round mark tags by default so
    we need to remove them for the suggestions

[33mcommit cdaa42a843859c2f1a067bce9cf865877e739a35[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Aug 5 15:18:21 2019 +0100

    GN-30 Remove fake test prop

[33mcommit 124eb512460aacb84c869fa8e269315e2d967e73[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Aug 5 15:09:38 2019 +0100

    GN-30 Add typescript definitions

[33mcommit 7300c62b18bf8ed5c97c07925667330e3e0a47b2[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Aug 5 10:36:45 2019 +0100

    GN-30 Fix problem with postinstall script

[33mcommit d3188f6cdaa46279d9d6f9a0b65a82e2216ac110[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 2 15:30:17 2019 +0100

    GN-30 Update readme ToC

[33mcommit 63e74fa5c2d7210545d4ffde6daccd4368067942[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 2 15:28:09 2019 +0100

    GN-30 Ignore polyfill folder from being transpiled

[33mcommit 082f0857a6388e20c2c5434c617533836730b284[m
Merge: 9428d2a 9239913
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Aug 2 15:11:42 2019 +0100

    Merge branch 'master' into GN-30-Create-react-app-2
    
    # Conflicts:
    #       README.md
    #       package-lock.json
    #       package.json
    #       src/Footer/Copyright/Copyright.module.scss
    #       src/Footer/Footer.module.scss
    #       src/Footer/Social/Social.module.scss
    #       src/Header/Account/Account.module.scss
    #       src/Header/Header.module.scss
    #       src/Header/Nav/Nav.module.scss
    #       src/Header/Nav/SubNav/SubNav.module.scss
    #       src/Header/Search/Search.module.scss

[33mcommit 923991373a8748a019c2749d99a884ce49d5bae5[m[33m ([m[1;33mtag: 1.0.0.133-r9239913[m[33m)[m
Merge: f3826cb 2dc7784
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Wed Jul 24 09:32:51 2019 +0100

    Merge pull request #28 from nhsevidence/GN-17-Footer
    
    GN-17 Add footer navigation

[33mcommit 2dc7784f259353218a48f475270ca4165a1622c1[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Jul 5 13:57:23 2019 +0100

    GN-17 Add footer into examples

[33mcommit 8f665415ae7efa1610fb730bd250355b2ab75c7a[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Jul 5 13:55:13 2019 +0100

    GN-17 Fix footer rendering even when disabled
    
    And add tests

[33mcommit 834aa121c1f5b3f7402ac522a8236afe9019c03a[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Jul 5 08:55:50 2019 +0100

    GN-17 Remove TODO
    
    And consolidate SASS variable

[33mcommit d5308295fecea289ca3fb271ddd2543e26940a4e[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Jul 5 08:44:36 2019 +0100

    GN-17 Fix TODOs

[33mcommit a70eb3f6c50cda81a21a08aefb9e53e83526d452[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Jul 5 08:44:20 2019 +0100

    GN-17 Add footer props to readme

[33mcommit 6fea01ff417e293c1a60c9588c70aede1568e42e[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jul 4 14:25:47 2019 +0100

    GN-17 Add test for footer components

[33mcommit 57f8c9f573379cde53c9213416b9add71515dc77[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jul 4 14:25:11 2019 +0100

    Ignore polyfills from code coverage report

[33mcommit 775c62dd165351e7d82feccc7f6e3f0162d41c50[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jul 4 13:46:54 2019 +0100

    GN-17 Fix broken test

[33mcommit 47cec3c7e24f090366e2a08545ddc6b8961868b0[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jul 4 13:33:04 2019 +0100

    GN-17 Add tests for tracked link component

[33mcommit c69d9a09a144df9f67e6ff672287caf169cc9887[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jul 4 11:41:09 2019 +0100

    GN-17 Fix broken test
    
    Due to files being moved around

[33mcommit d65480c5a5edb96701e3f309b93d1c85afa3babe[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jul 4 11:39:01 2019 +0100

    GN-17 Tweak spacing after design crit

[33mcommit 5d2892bc960c07b0ec1af6908533937fda25f148[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Jul 3 10:57:13 2019 +0100

    GN-17 Add footer navigation

[33mcommit f3826cbb85cbae23b62cf2ee1d876345e16f3a7b[m[33m ([m[1;33mtag: 1.0.0.129-rF3826CB[m[33m)[m
Merge: 4c775b4 1d33106
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Thu Jun 6 09:48:01 2019 +0100

    Merge pull request #27 from nhsevidence/GN-25-Fix-style-issues-with-global-nav-header-in-NICE-Orchard-Admin-page
    
    GN-25 Added more specificity to a links in menu

[33mcommit 1d33106a0398b0e1367c706e108d80d11d79ec3d[m
Author: colinmazu <colin.mazurkiewicz@nice.org.uk>
Date:   Fri May 31 15:29:48 2019 +0100

    GN-25 Added more useful comment a.link css

[33mcommit 4fbbd87e171711cba3a1e5c262d7123d54122f6c[m
Author: colinmazu <colin.mazurkiewicz@nice.org.uk>
Date:   Fri May 31 15:02:03 2019 +0100

    GN-25 Added more specificity to a links in menu

[33mcommit 4c775b43c4a122863a17688cada47adbe233c4a0[m[33m ([m[1;33mtag: 1.0.0.126-r4C775B4[m[33m)[m
Merge: a9d0f85 b50ff0a
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Thu May 30 11:14:37 2019 +0100

    Merge pull request #26 from nhsevidence/GN-24
    
    GN-24 Evidence Cookie banner issue

[33mcommit b50ff0aeeb9e6c82ceeeb53efd80342441d9deba[m
Author: dbelshaw <david.belshaw@nice.org.uk>
Date:   Thu May 30 09:33:57 2019 +0100

    GN-24 Add assert on the delete cookie

[33mcommit 3024ab3d1515bb07bbec97709b2d35991006e306[m
Author: dbelshaw <david.belshaw@nice.org.uk>
Date:   Thu May 30 09:04:24 2019 +0100

    GN-24 Fix to delete old evidence cookie

[33mcommit a9d0f850baeaf2d50f963f17cf350f257dca18f3[m[33m ([m[1;33mtag: 1.0.0.121-rA9D0F85[m[33m)[m
Merge: d8da586 abad4ac
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Tue May 28 13:47:54 2019 +0100

    Merge pull request #24 from nhsevidence/GN-22-IE8
    
    GN-22 Fix evidence typeahead not working in IE8

[33mcommit abad4ac0e362af5d8899c226dde9f48f3119aa69[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri May 24 16:08:50 2019 +0100

    GN-22 Move IE8 polyfill into head
    
    Fixes an issue where the polyfill seemed to be conflicting with application code for niceorg

[33mcommit 3a98c9b70f1f2dcd13d04d6fe30a7f4a2f824cce[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri May 24 16:07:39 2019 +0100

    GN-22 Fix logo not showing in IE8

[33mcommit 30ec338acf71028b1500a9d94c666a0bcaf023b5[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri May 24 16:07:23 2019 +0100

    GN-22 Add custom polyfills for IE8

[33mcommit d8da58629f8336dd67cbcde41b272193eba090bb[m[33m ([m[1;33mtag: 1.0.0.119-rD8DA586[m[33m, [m[1;33mtag: 1.0.0.118-rD8DA586[m[33m)[m
Merge: d53c43d ead3dc8
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Fri May 24 12:35:03 2019 +0100

    Merge pull request #23 from nhsevidence/GN-21-Skip-links
    
    GN-21 Fix skip link not scrolling window

[33mcommit ead3dc8c2c2d84bfc79381b4a4d33d46abe60811[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu May 23 14:27:40 2019 +0100

    GN-21 Replace var with let

[33mcommit ec789db7fc19235e0dee0a1381525fdf90c08826[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu May 23 13:53:13 2019 +0100

    GN-21 Fix skip link not scrolling window

[33mcommit d53c43d50ca0c23dd8f1c008808c0f3846e5fc04[m[33m ([m[1;33mtag: 1.0.0.115-rD53C43D[m[33m)[m
Merge: ca2ff78 2d190d6
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Wed May 22 16:38:42 2019 +0100

    Merge pull request #19 from nhsevidence/GN-19-OnSearching-IE8
    
    GN-19 Fix onSearching callback not working in IE8

[33mcommit ca2ff780d59f5269ca1e43739d421e86b0d86606[m[33m ([m[1;33mtag: 1.0.0.113-rCA2FF78[m[33m)[m
Merge: e955d79 4cca104
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Wed May 22 10:45:03 2019 +0100

    Merge pull request #22 from nhsevidence/GN-20-Vulnerability
    
    GN-20 Fix tar vulnerability

[33mcommit 4cca10442c6d1451a7dc1e47d192729dfb6071ec[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue May 21 16:11:49 2019 +0100

    GN-20 Fix tar vulnerability

[33mcommit e955d7979c0517251e03334cab98b5a63d4777ee[m
Merge: 2443b00 cc888e5
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue May 21 15:52:43 2019 +0100

    Merge pull request #21 from nhsevidence/query-readme
    
    Add query to readme

[33mcommit cc888e53f9a30cd9e196544fb5b0bf4036f897fd[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue May 21 15:45:34 2019 +0100

    Add query to readme

[33mcommit 2443b000f0ba516fc13dd3e1cb6df1ec4d2d11fe[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu May 16 09:38:14 2019 +0100

    Fix readme setup link

[33mcommit c82dc765db303308bd2558f758faae925c52300e[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu May 16 09:36:40 2019 +0100

    Add badges to readme

[33mcommit 010f4b52b7dce45cb89502d1f23fe90de0c8d86a[m
Merge: 5b79532 6516d73
Author: Claire Hunter <claire.hunter@nice.org.uk>
Date:   Thu May 16 09:02:25 2019 +0100

    Merge pull request #20 from nhsevidence/GN-12-Readme
    
    GN-12 Update readme

[33mcommit 6516d73df6744d27b3c8296566cac0673a36ea94[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 15 16:38:47 2019 +0100

    GN-12 Update readme

[33mcommit 2d190d6b908405475f258117ae1fe446acdaec32[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 15 14:41:05 2019 +0100

    GN-19 Fix onSearching callback not working in IE8

[33mcommit 5b79532064381eea0655279fd2f0a3e4353b3f0e[m[33m ([m[1;33mtag: 1.0.0.105-r5B79532[m[33m)[m
Merge: d78d03e 4683826
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Wed May 15 12:46:30 2019 +0100

    Merge pull request #18 from nhsevidence/GN-18-Fix-IE-autocomplete
    
    GN-18 Fix autocomplete in IE9+

[33mcommit 46838263842d3ec9e92b632381826d154544d6ad[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue May 14 16:47:49 2019 +0100

    GN-18 Fix autocomplete in IE9+

[33mcommit 9428d2a9d555f89bf95593ff388c866169cc2a94[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon May 13 15:50:54 2019 +0100

    Fix linting errors

[33mcommit b07ca8cad7c6ab8f70c0b76559ff533cda357aff[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon May 13 15:50:47 2019 +0100

    Fix sub nav not including design system

[33mcommit 1e94b2961ffbd120b6054ed7a1316580aab7f310[m
Merge: f39f8c9 d78d03e
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon May 13 15:44:16 2019 +0100

    Merge branch 'master' into GN-1-CRA

[33mcommit f39f8c9e5c48d6f06c683e0d4564cfbca3d1b412[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon May 13 15:42:03 2019 +0100

    GN-1 Re-add missing browserslist

[33mcommit 69cf75eb25ab5ac2d180bf9afe274a261bea6f07[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon May 13 15:40:18 2019 +0100

    GN-1 Support Create React App v2

[33mcommit d78d03e1d19f0819a9bc071557ddc0ea23679452[m[33m ([m[1;33mtag: 1.0.0.101-rD78D03E[m[33m)[m
Merge: 2a53925 7279e51
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Fri May 10 13:56:15 2019 +0100

    Merge pull request #5 from nhsevidence/GN-14-Sub-nav
    
    GN-14 Sub navigation

[33mcommit 7279e519dfa58a4fbce3c6485f3ada8facda1ac4[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu May 9 14:52:22 2019 +0100

    Fix small styling bug w/ Pathways my account menu

[33mcommit 958d4794494bec6f5ac987c26ffb7da5da4acdc9[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu May 9 14:26:04 2019 +0100

    GN-14 Add sub nav tracking and onNavigating prop

[33mcommit 7e4e6f507ca95ef63577a5f8c63afd3ebac80e38[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 8 21:59:55 2019 +0100

    GN-14 Fix Pathways example slow to render header

[33mcommit 5beb2beb9bc1331897bd48dd6cf7a3976cb7ab84[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 8 21:47:41 2019 +0100

    GN-14 Fix mobile nav not showing for Pathways

[33mcommit be8e17c6d3dae653d12cadda3e04ee2ce4fd9344[m
Merge: 402779a 2a53925
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 8 21:39:00 2019 +0100

    Merge branch 'master' into GN-14-Sub-nav
    
    # Conflicts:
    #       src/Header/Nav/Nav.jsx
    #       src/Header/Nav/__snapshots__/Nav.test.jsx.snap

[33mcommit 2a53925557bc80875e7be41ae48a31a026ff845b[m[33m ([m[1;33mtag: 1.0.0.95-r2A53925[m[33m)[m
Merge: fb7af1e 7d8b7bf
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Wed May 8 16:04:13 2019 +0100

    Merge pull request #15 from nhsevidence/GN-13-Tracking
    
    GN-13 Add GTM tracking

[33mcommit 7d8b7bf9bad526a7423d99fb27ffe3b449528951[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 8 14:45:20 2019 +0100

    GN-13 Fix mobile account menu tracking

[33mcommit 402779a0b807b0ef957a269145e8b6581922f906[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 8 08:21:06 2019 +0100

    GN-14 Fix tests

[33mcommit a132b27514eb51204ebe55754b9c183c7a39e520[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 8 08:15:31 2019 +0100

    GN-14 Fix bug with IE
    
    Due to lack of support for Array.prototype.find

[33mcommit 1d315275c74abc7d740c07592f82edfd9524c058[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri May 3 16:10:27 2019 +0100

    GN-13 Fix wrong labels for account menu on mobile

[33mcommit a1ee329357b46b7a7f37730044e3e8d064784bda[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri May 3 15:28:16 2019 +0100

    GN-14 Move sub nav into separate component

[33mcommit 840273d94014ab9c7ba2f3ffd0eac676ece0cbb0[m
Merge: 04e3404 fb7af1e
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri May 3 11:07:15 2019 +0100

    Merge branch 'master' of github.com:nhsevidence/global-nav into GN-14-Sub-nav
    
    # Conflicts:
    #       examples/examples.json
    #       src/Header/Nav/Nav.module.scss
    #       webpack.config.js

[33mcommit fb7af1e3021be7f80ad697303e17995e19962460[m[33m ([m[1;33mtag: 1.0.0.91-rFB7AF1E[m[33m)[m
Merge: 6d5d457 8d06b2c
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Wed May 1 16:17:02 2019 +0100

    Merge pull request #14 from nhsevidence/GN-4-Search-hook
    
    GN-4 Add search hook

[33mcommit 8d06b2cc760742f369232e56caefab4e250f0c93[m
Merge: 934efad 3a3a29b
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 1 13:32:47 2019 +0100

    Merge branch 'GN-4-Search-hook' of github.com:nhsevidence/global-nav into GN-4-Search-hook

[33mcommit 934efad150d3bcaf56773efde086179788a30923[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed May 1 13:32:37 2019 +0100

    GN-4 Fix autocomplete URLs on test servers

[33mcommit 3a3a29b4fb384e4c10ef07eb263d51d8a99b5c07[m
Merge: 901934d 6d5d457
Author: David Belshaw <david.belshaw@nice.org.uk>
Date:   Wed May 1 11:39:23 2019 +0100

    Merge branch 'master' into GN-4-Search-hook

[33mcommit 6d5d4576d76950b07e42b9821127480931c06c8d[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 15:41:21 2019 +0100

    Add footer props section to readme

[33mcommit d146d16cc9a61e3571b5d4f5f86d9dd03ea27b03[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 15:31:43 2019 +0100

    Update readme with search.query config option

[33mcommit 27e1e13ad60a2135364ec547224426394c96251a[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 15:17:27 2019 +0100

    GN-13 Add mobile menu tracking

[33mcommit 6e739394ee23af0cf88369f6bec8189958977a94[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 15:08:01 2019 +0100

    GN-13 Add nav event tracking

[33mcommit 2a456e4ddb5277dc43cafd7d67517b83da019b0b[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 14:22:27 2019 +0100

    GN-13 Add tracking and tests for account menu

[33mcommit 4c84f98d3e9555355d552af15c8f30260d3cf959[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 11:38:07 2019 +0100

    GN-13 Add tracking for autocomplete selection

[33mcommit 86fec38eacd01c0b3dcfabddd2f07c2fd4002f71[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 09:37:43 2019 +0100

    GN-13 Add logo tracking

[33mcommit 8feed9718437a6fa6ed6b468ec495124d90bbe4c[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 09:37:32 2019 +0100

    GN-13 Add ability to change location.href in tests

[33mcommit 8dc20d59772158027d4ce4a541b4736a4d3b8985[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 30 08:57:44 2019 +0100

    GN-13 Add GTM tracker

[33mcommit 901934d31422bd293b2753dc13db3769ec8c79d3[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Apr 29 12:44:18 2019 +0100

    GN-4 Fix bug - search suggestions showing on IE9

[33mcommit b4e5583c61f4c305c1a434e7105d4357c8d23ee4[m
Merge: f40a1aa 2ce7bd4
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Apr 26 14:02:44 2019 +0100

    Merge branch 'master' into GN-4-Search-hook
    
    # Conflicts:
    #       examples/example.html

[33mcommit f40a1aa01881350dff0f5a31e56c5177de7d1b2d[m
Merge: c3aa634 264aa63
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Apr 26 13:50:33 2019 +0100

    Merge branch 'master' into GN-4-Search-hook
    
    # Conflicts:
    #       examples/body-html/bnfc.body.html
    #       examples/examples.json

[33mcommit c3aa6340144b7e5cc231b952570d8bf96db34d4e[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Apr 26 13:47:29 2019 +0100

    GN-4 Examples support config as string or object

[33mcommit 9b2795e134dfdf3b17e35125278ac65a4778e45b[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Apr 26 13:46:45 2019 +0100

    GN-4 Add enter key submitting for search form

[33mcommit 2ce7bd4c02f9aa836a5224035ce29e20bae8c18c[m
Merge: 264aa63 fceb5e8
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Thu Apr 25 16:31:53 2019 +0100

    Merge pull request #7 from nhsevidence/GN-7-Fix-IE8
    
    GN-7 Fix IE8 issues

[33mcommit 5827ff05441d6ac2aa349759f8e223aeeb62e5e4[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 25 13:57:43 2019 +0100

    Add tests for onSearching prop

[33mcommit 7f3c01965c0eede9d69a12caf25280108d27bc3a[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 25 13:57:21 2019 +0100

    Add on searching example to BNF/C and CKS

[33mcommit aefab8ceb6126d32bab1c52d4900bcd75e2413fe[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 25 13:57:00 2019 +0100

    Add documentation for new onSearching prop

[33mcommit f8c87a66fd1bcd1ccc3719f1a1fda05f041ad105[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 25 09:49:30 2019 +0100

    Update search snapshot to include new search submit handler

[33mcommit 7ca163b16e5f169f358813e3cd7126e22219cbb6[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 25 09:49:15 2019 +0100

    Remove unnecessary console log

[33mcommit 9320611200d19333c4794ba8ed508487112a3dfe[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 25 09:48:48 2019 +0100

    Update example HTML formatting

[33mcommit fceb5e8d2e67ccc78a4ca8fa45df3ba60c378339[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 24 21:07:00 2019 +0100

    GN-7 Use latest version of nice design system

[33mcommit 04e3404c3cf75aab921c81c7ab7c1a8661ed31df[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 23 14:47:53 2019 +0100

    GN-14 Fix styling issues with Pathways integration

[33mcommit 96b515799bcedee1e3678c548cde60c41969d86c[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 23 14:47:37 2019 +0100

    GN-14 GN-4 Integrate search into Pathways

[33mcommit d7e7f3309285457e4c36c7ac58e052a28fa1c3a1[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 23 14:45:54 2019 +0100

    GN-14 Add sub nav to Pathways

[33mcommit 264aa637817fd95d712309efd875ea7dd31d4616[m
Merge: 088edfa 3a78ef5
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Thu Apr 18 15:01:31 2019 +0100

    Merge pull request #13 from nhsevidence/GN-3-Fix-bnfc-404
    
    GN-3 Fix 404 on BNFc test page

[33mcommit 088edfa09a7513a4deb496b5590ae6d91785f465[m
Merge: eb3ce90 2c60e7b
Author: kavithanice <44166864+kavithanice@users.noreply.github.com>
Date:   Thu Apr 18 15:01:15 2019 +0100

    Merge pull request #12 from nhsevidence/GN-3-Skip-link-example
    
    GN-3 Add skip link example to CKS

[33mcommit 3a78ef569ebdd21c3e79b4af4ac75bf417dba97f[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 18 09:56:42 2019 +0100

    GN-3 Fix 404 on BNFc test page

[33mcommit 8bb6315e9e16db419d2d51d64628fcd7ff5d1fa5[m
Author: colinmazu <colin.mazurkiewicz@nice.org.uk>
Date:   Wed Apr 17 16:03:25 2019 +0100

    GN-4 added search hook

[33mcommit 2c60e7b889d999872616c67944a6a0154405060d[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 17 14:13:29 2019 +0100

    GN-3 Add skip link example to CKS

[33mcommit 1bedc60252164278a7c5af00166701f4dbeafcef[m
Merge: ce593a7 eb3ce90
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 16 16:23:57 2019 +0100

    Merge branch 'master' into GN-7-Fix-IE8
    
    # Conflicts:
    #       examples/example.html

[33mcommit eb3ce903a95114d54f611a45115f398539c9567a[m
Merge: 64114e7 9527808
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Tue Apr 16 11:49:01 2019 +0100

    Merge pull request #10 from nhsevidence/GN-6-Fix-cookie-delete
    
    GN-6 Fix cookie delete button

[33mcommit 64114e739ebed4d97f8c22747037e1901ee7ab61[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Apr 16 08:55:10 2019 +0100

    Fix test

[33mcommit a9bee64bc67f23efbe611e0f8cfe27281ceeac90[m
Merge: 2e6bb44 6c575f2
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Mon Apr 15 15:57:22 2019 +0100

    Merge pull request #6 from nhsevidence/GN-7-TLS-url
    
    GN-7 Change TLS message URL on nice website

[33mcommit 2e6bb4430d6ff43e474fa7b318cd22a39031462b[m
Merge: b51451f e9ff9f8
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Mon Apr 15 15:56:38 2019 +0100

    Merge pull request #8 from nhsevidence/GN-6-Cookie-copy
    
    GN-6 Update copy to match card

[33mcommit b51451f6a275c036749e6b6639f07bab3ee99821[m
Merge: d20c166 5822f18
Author: lizaadebowale <liza.adebowale@nice.org.uk>
Date:   Mon Apr 15 15:54:33 2019 +0100

    Merge pull request #9 from nhsevidence/GN-5-HotJar
    
    GN-5 Add HotJar snippet

[33mcommit 9527808f43766bc41c83e0f2deb3a493cf686bcc[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Apr 15 15:45:14 2019 +0100

    GN-6 Fix cookie delete button

[33mcommit 5822f18c6650c4f50bcd2eb0ffbeae912fba24cc[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Apr 15 14:19:50 2019 +0100

    GN-5 Add HotJar snippet

[33mcommit e9ff9f82c3ed3ed1b20127bb5a4bf2212fb095de[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Apr 15 12:08:13 2019 +0100

    GN-6 Update copy to match card

[33mcommit ce593a79f0de8f4f0a9473daf2cb66d8937ec41c[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Apr 15 11:26:54 2019 +0100

    Fix IE8 issues
    
    There seems to be a problem with the order in which scripts are loaded, so load global nav first

[33mcommit 6c575f29532c11fe223aaabe10a2cfa8ebcf715b[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 11 11:15:54 2019 +0100

    GN-7 Change TLS message URL on nice website

[33mcommit d20c166fbb2a1dc815334f7f0ea40c437168e113[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 11 11:02:18 2019 +0100

    Update readme

[33mcommit 4c264e1706d9afd5ef76cd0a463f73d880271a6e[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Apr 11 09:03:39 2019 +0100

    Change createRef to document.getElementById
    
    Nerv didn't play nicely with createRef, so we've changed to use
    document.getElementById instead

[33mcommit 3f4b88798c7298c2b2661ba74c99da8dfa186c55[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 10 21:22:16 2019 +0100

    GN-14 Add sub navigation

[33mcommit 7e1b40b47e2ed237463281d71d2e4ac017c658e0[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 10 20:46:25 2019 +0100

    Compress CSS output

[33mcommit 8153991f06e1eb82876248cda2a89d26b18c31bf[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 10 16:21:26 2019 +0100

    Support custom version number argument in webpack

[33mcommit 970cc7fc42d2cf197780ee186586c38f45f0fce7[m
Merge: d89c873 b5c9331
Author: Ian Routledge <ian@ediblecode.com>
Date:   Wed Apr 10 14:32:21 2019 +0100

    Merge pull request #4 from nhsevidence/GN-05-AccountsIntegration
    
    GN-5 NICE Accounts integration

[33mcommit b5c93319f2402dc65d0cddba4dbdff585886a70a[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 10 14:31:02 2019 +0100

    GN-5 Minor readme amends

[33mcommit ba48306c6105671f7b5f86bfb5dfaca668828df4[m
Merge: fde5de7 d89c873
Author: dylan <dylan.riley@nice.org.uk>
Date:   Wed Apr 10 11:55:57 2019 +0100

    Merge branch 'master' into GN-05-AccountsIntegration

[33mcommit fde5de70e3366c56ae972f7ff8f4f17773e1e6f1[m
Author: dylan <dylan.riley@nice.org.uk>
Date:   Wed Apr 10 11:52:22 2019 +0100

    GN-05 Update README.md

[33mcommit d89c87336d8312133ea588ccbef17b96c2a5ef81[m
Merge: 33ea5bb 5cd80d6
Author: 1996dylanriley <dylan.riley@nice.org.uk>
Date:   Wed Apr 10 10:43:02 2019 +0100

    Merge pull request #3 from nhsevidence/GN-6-Cookie-banner
    
    GN-6 Add cookie banner

[33mcommit d20c909695c014447992afb2e389c076fd2eca8a[m
Author: 1996dylanriley <dylan.riley@nice.org.uk>
Date:   Tue Apr 9 15:16:41 2019 +0100

    GN-05 Update Readme

[33mcommit 1e83117b6512e287158a5f319026eaafa584ebd1[m
Author: dylan <dylan.riley@nice.org.uk>
Date:   Tue Apr 9 14:41:32 2019 +0100

    GN-05 Make authentication configurable

[33mcommit dbd9ad813b9a008d6b40865983f2a6779fc2e42a[m
Author: dylan <dylan.riley@nice.org.uk>
Date:   Tue Apr 9 14:40:50 2019 +0100

    GN-05 Fix red BNFC links in preview

[33mcommit 5cd80d647133ae95a2e8c58954a9c13e39496d03[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Apr 5 14:18:17 2019 +0100

    GN-6 Fix typo

[33mcommit e35199d94a8e9d08bcbf6bac264311f6f8a8d4c9[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 3 16:31:29 2019 +0100

    GN-6 Add cookie prop to readme

[33mcommit a0bad00ca8f7b07ddbdd7b580f045fa3368e9e7f[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Apr 3 16:27:50 2019 +0100

    GN-6 Add cookie banner

[33mcommit 33ea5bbf2a48b0a1bbb2d93eb8c18677beabfd88[m
Merge: ebf7fd9 b5b7f99
Author: Ian Routledge <ian@ediblecode.com>
Date:   Mon Apr 1 16:00:32 2019 +0100

    Merge pull request #2 from nhsevidence/GN-3-Skip-links
    
    GN-3 Add skip links

[33mcommit b5b7f997ee63fabb93f7d8fcbbed437a7b82f957[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Mar 20 21:19:30 2019 +0000

    GN-3 Add skip links

[33mcommit ebf7fd97a7980a57f87a1a447636f09b2e6ec450[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Mar 20 16:34:56 2019 +0000

    Fix CKS topics.txt route in local dev

[33mcommit 62183b525c3c381c667ab2f288a457b5de343cf8[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Mar 20 16:28:32 2019 +0000

    GN-5 Use escape to close account menu

[33mcommit efd41759c4b3fa1fb3a2498378d90477ec259177[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Mar 20 16:26:55 2019 +0000

    Update header with correct aria attributes

[33mcommit 6b2f0632c9831360a9a6a7edcc0e3f6e7abc32e5[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Mar 20 16:25:21 2019 +0000

    GN-5 Add keyboard access to accounts menu

[33mcommit 2b81dae58343cff76136cc838b2325df0df64dff[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 15 16:48:44 2019 +0000

    GN-5 Add accounts tests

[33mcommit 78497b0e69ae58d8d210ecf2cc3bac566dff622a[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 15 15:57:02 2019 +0000

    GN-7 Add copy and tests for TLS message

[33mcommit bbae1d4d323531f1bca8aa8079498dfe26732ea0[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 15 15:37:27 2019 +0000

    Add example pages for each service

[33mcommit 7a26e30ef8afad0d4c702cf5dc6c2259864cb002[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 15 15:34:52 2019 +0000

    Add site header label
    
    Axe core highlights that there should be a single header landmark per page.
    Or at least that multiple landmarks should have be labelled.

[33mcommit 6a3c7805f285a938812412924ec53e72db99decd[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 15 14:13:51 2019 +0000

    Change background to pure white
    
    The NICE Design System has a slightly off-white background, so we change to pure white
    to give a higher contrast for navigation elements

[33mcommit dc972a5567b288bc7841140d033325df9a4ca690[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 15 12:32:28 2019 +0000

    Fix styles that conflict with NICE.bootstrap

[33mcommit 82ffd5297c15161ca4e491de3d5cac50999e6671[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 15 12:23:26 2019 +0000

    Ignore stackdump files

[33mcommit e339eb4d11583b9896d17143e8f69136787fa02b[m
Merge: a8156ee 097bf24
Author: Ian Routledge <ian@ediblecode.com>
Date:   Fri Mar 15 08:42:33 2019 +0000

    Merge pull request #1 from nhsevidence/GN-4
    
    GN-4 Search and autocomplete

[33mcommit 097bf240dba6fdf522cb92043e39b760b94d8741[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 11 14:20:43 2019 +0000

    GN-4 Update label to match placeholder

[33mcommit c7840cfbc1aab6a1f618335533d2b8cedabea980[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 11 14:16:00 2019 +0000

    GN-4 Add HotJar whitelist attributes to search

[33mcommit b18d9ddcb64277133bf9be58f59c62f32dfa05f2[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 11 13:30:14 2019 +0000

    GN-4 Add fetch ponyfill

[33mcommit c45fa0f9406b19714b900c9f0f991dc0c0b4a0d6[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 11 13:30:02 2019 +0000

    GN-4 Fix conditional comment in IE9

[33mcommit 5af60ffaabde2adfd903aa5e7256dc57a48fa56b[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 11 13:27:32 2019 +0000

    GN-4 Change arrows to normal functions for IE9 support

[33mcommit 1cba0abea6ee3b7f70fe9fb440a3e2804d90670c[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 11 11:11:59 2019 +0000

    GN-4 Tweak design of search and autocomplete

[33mcommit 397afbe87dc8dc72be9fc4ed0c0220ac6dccf527[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Mar 11 11:11:23 2019 +0000

    GN-4 Fix failing test

[33mcommit 0d021bf7dd5c140283885e40028feedaaf74853e[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 16:40:21 2019 +0000

    GN-4 Add tests around autocomplete fallback

[33mcommit e74905c5b5f8a682d108dacc1457a968a760d6fb[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 16:36:21 2019 +0000

    Enable overriding useragent in tests

[33mcommit bbba88aca65e812a5a301802b345e8ae2315ae35[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 15:38:05 2019 +0000

    GN-4 Hide autocomplete from IE8

[33mcommit a8d331aa4f16c86f5ba588f13d0afc8a15b873d1[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 15:27:34 2019 +0000

    GN-4 Add options for loading autocomplete suggestions from the server

[33mcommit 70c019a2afeb3db3feefaccaebff8854e11271dd[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 15:04:44 2019 +0000

    GN-4 Add docs around remote autocomplete response

[33mcommit b99554eac754369d7c15dd7ab9c73f4d55653212[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 14:58:01 2019 +0000

    GN-4 Add suggestion engine

[33mcommit 63675d7451c44407698dd38f7cbed81d8edb08ce[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 14:57:47 2019 +0000

    GN-4 Add documentation for autocomplete options

[33mcommit f454641650dad648373c337a81b1fdc5783a177a[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 14:41:44 2019 +0000

    Update packages

[33mcommit 762b3af74a1ee8298b6b831bc190523bd29c84f8[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Mar 8 14:41:12 2019 +0000

    GN-4 Minor autocomplete styling tweaks

[33mcommit 73168a12799b32766fe662da2db1f63f0ff43396[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 28 16:54:57 2019 +0000

    Change arrow functions to normal functions to support IE8

[33mcommit 2318196f08299a50086870b6974fdefdcb5ae28d[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 28 16:54:38 2019 +0000

    Add fallback styles for IE8

[33mcommit 853518c8448fb50858806b6d3ae08ad5851729e3[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 28 16:53:44 2019 +0000

    GN-4 Search component IE8 fallbacks

[33mcommit 794d0d40d68274cfad3bad8fe2bdd0dda01fa22b[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 28 13:18:45 2019 +0000

    GN-7 Initial TLS copy

[33mcommit afbd2e5c9281fc9ab6cda80c955589bffb776a32[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 28 13:16:37 2019 +0000

    Add HTML5 shiv for IE8

[33mcommit 9f00cfddd7b8f0b813411f56388de55c50d6f7d8[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 28 10:46:58 2019 +0000

    GN-4 Fix search tests

[33mcommit 46872aa6c6190ff86022e45d349ca1c109dcb0be[m
Merge: f00792f c28f07e
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 27 21:29:32 2019 +0000

    Merge branch 'GN-4' of github.com:nhsevidence/global-nav into GN-4

[33mcommit f00792f8fb27f4afcbba16e20b5ce3a9393e2741[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 27 21:29:01 2019 +0000

    Swap out react hot loader for IE8 support

[33mcommit a7e8900c57959d982008b428346d30f52ab4acb1[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 27 21:22:09 2019 +0000

    Change webpack to always alias react to nerv in production

[33mcommit f6891720e141c730979f43b136dcb8b36cc20aa2[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 27 21:20:45 2019 +0000

    Remove border from fallback image in IE8

[33mcommit 6e0d29200553af6e867ab6ac82aa013bcd4de1ec[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 27 21:19:32 2019 +0000

    Add fallback PNG logo for IE8

[33mcommit d9732b1f9bed17ce709f88bd896b1f4abd7e341f[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 27 21:17:12 2019 +0000

    GN-4 Fix search button fallback for IE8

[33mcommit 9cbe863688e5d76981a0303b1b210227b59e4d08[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 27 15:48:17 2019 +0000

    Ignore dist folder from git

[33mcommit c28f07e589daae19b7f9b0673715a9bf91a71e85[m
Author: iazadas <iazad@IMT-07639>
Date:   Tue Feb 26 17:42:30 2019 +0000

    Added footer

[33mcommit eeccd4ae72c844f284b8c3de24258cd870764ccf[m
Author: iazadas <iazad@IMT-07639>
Date:   Tue Feb 26 17:41:20 2019 +0000

    Refactor tests to be more specific regarding expectations

[33mcommit e06d42af4a632741229144d9c59b5b1c44073f7b[m
Author: iazadas <iazad@IMT-07639>
Date:   Tue Feb 26 17:40:27 2019 +0000

    Update readme

[33mcommit cb6b5d0b7096fab98786205ea9e63b18016999a9[m
Author: Ian Routledge <ian@ediblecode.com>
Date:   Mon Feb 25 16:07:28 2019 +0000

    GN-4 Fix webpack entry point

[33mcommit eb9d5491e3e220b6282794a36196bd9380d216c7[m
Author: Ian Routledge <ian@ediblecode.com>
Date:   Mon Feb 25 16:05:57 2019 +0000

    GN-4 Add tests and documentation for props and config

[33mcommit 0e0540abe32d9043551563e295fd22d8f59d801c[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 22 16:51:16 2019 +0000

    GN-4 Add layout for search bar

[33mcommit 5413d82e9fcaec17ed5354dc159e3da8ad075e0a[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 22 16:50:25 2019 +0000

    Return null from footer when disabled

[33mcommit 9e09026ce3f73101299da238e8a11371c68ac305[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 22 15:19:33 2019 +0000

    Add proper hot module reloading

[33mcommit 91ae37ee8a0a09148c921840c83658184039e817[m
Author: iazadas <iazad@IMT-07639>
Date:   Fri Feb 22 10:03:32 2019 +0000

    First commit

[33mcommit a8156ee01abb59563bfdcc5456edcfeaeeca7bfd[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 13 16:10:27 2019 +0000

    Add navigation states

[33mcommit 9556f89a50a6f39fad242f82e3f52c6c50f232b2[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 13 14:01:05 2019 +0000

    Add nav link states

[33mcommit 90247fd7b821fe338a6cfb106dbe1db6de0cfc56[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Feb 12 12:37:29 2019 +0000

    Bump commit to test signing

[33mcommit 4eb3fff7583997b737828dddde791cfb0accb860[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Feb 12 12:33:30 2019 +0000

    Add readme placeholder for CSS modules

[33mcommit b23b8a9fc847d7840179395b96223e19eb3e7ea1[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 8 14:39:29 2019 +0000

    Add tests for mobile menu button

[33mcommit efe129b37d8629229b62703431b846740bcb44dc[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 8 14:39:16 2019 +0000

    Hide folders from vscode

[33mcommit 226abab9d4aa85756bc3f98e023d7b10e9686590[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 8 10:33:35 2019 +0000

    Add initial header tests

[33mcommit 8fc777e58d345faae75ee87164999678281f4773[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 8 09:06:26 2019 +0000

    Add test for aria-current=page for navigation

[33mcommit fca0ac201973ea0cd92325246e8a19d174d3850b[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 8 09:05:12 2019 +0000

    Add skip to getting started link in readme

[33mcommit d89fe5765a277b0da5c5150b97cb84dbc8bd5d9f[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 8 08:56:36 2019 +0000

    Add default URL for Jest tests

[33mcommit 7687beff384b80e8b0bf7ce09722f10b7d024efe[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 8 08:56:04 2019 +0000

    Add docs about running single test file/test

[33mcommit 930d6dae0d1deafe795897c73a99411bf0405723[m
Merge: 5385543 3329d5f
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 7 16:40:33 2019 +0000

    Merge branch 'master' of github.com:nhsevidence/global-nav

[33mcommit 5385543d44fa0da506c56123276ea5b0afbaf033[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Feb 7 16:40:19 2019 +0000

    Add tests to nav component

[33mcommit 3329d5f4bccbd38966e1836cc00faff3820caf28[m
Author: Imran Azad <imranazad@users.noreply.github.com>
Date:   Wed Feb 6 12:57:59 2019 +0000

    Fixed typos

[33mcommit 312ab84d007429783c4377121ce4f69eef02cd45[m
Author: Imran Azad <imranazad@users.noreply.github.com>
Date:   Wed Feb 6 12:43:10 2019 +0000

    Update README.md

[33mcommit 9c8304fad80499a96e5ac0cbf82e13d7c74d6829[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 6 12:40:13 2019 +0000

    Add Lato bold to demo html

[33mcommit b70902112224203e606432d5048c960dec806830[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 6 10:24:50 2019 +0000

    Fix nav highlight states for focus and active

[33mcommit 8e575480ecfa241392d653a3e1ccc8bf27e890e1[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Wed Feb 6 10:06:21 2019 +0000

    Add bottom border to header on mobile

[33mcommit 9119d2c38a4b387f2fe2491c24cb4f65cf62ec43[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Feb 5 15:34:56 2019 +0000

    Add NuGet package metadata

[33mcommit d2fc19325ac0f75a76d5610dde27f2577f3845ce[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Feb 5 11:24:01 2019 +0000

    Add cross-platform projects for building NuGet packages

[33mcommit 7a5abddc9df2b0661533c5a02e91e400404a7ff5[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Feb 5 09:18:50 2019 +0000

    Fix post css loader not working properly
    
    Loaders were in the wrong order - so swapped post css and sass loaders

[33mcommit 008b36ea84296a1d9599f67f7e296810fc9a56f7[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 15:52:02 2019 +0000

    Collect coverage on TeamCity

[33mcommit d08c506be2ac758ec11088fee08f575cd71d1ef4[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 15:51:53 2019 +0000

    Fix tests

[33mcommit 051b4943303590c0b6b8e302ab971893c19de3c3[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 15:10:59 2019 +0000

    Add initial deployment nuspec files

[33mcommit bf44b3afb51c698baf1f79ba1c7b2b795d495726[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 14:22:13 2019 +0000

    Add initial nice accounts integration

[33mcommit 76914f3738a96330f8a70384fafeb53cad6cb32c[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 09:50:11 2019 +0000

    Move footer components into sub folders

[33mcommit 85330aa6451dbd3abd88cfb72d8b65fe69994e84[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 09:44:47 2019 +0000

    Container styling for header and nav

[33mcommit 88b25df8cbfbe7d775b3d48f50d2ec017d21367c[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 09:44:36 2019 +0000

    Add logo to header

[33mcommit a968bce2636678fc13c5894fa59eaf943f26f2eb[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 09:36:55 2019 +0000

    Add ID for all services within nav

[33mcommit 655288a63c2497eb83dc0f7784c853b127af9d27[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 09:33:46 2019 +0000

    TLS message setup

[33mcommit 7996c438974d039c288fd89cfb5cec08e4165f46[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 09:22:47 2019 +0000

    Add placeholder account styling

[33mcommit f9ff51543df86426d93174743bb024db9137956e[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Mon Feb 4 09:16:31 2019 +0000

    Add dev principles and Nerv rationale to readme

[33mcommit bf3c0805b70179f36d27b4cdcd10f6a34ad4388f[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 16:29:02 2019 +0000

    Fix build command

[33mcommit 0ab1fbba98d72bda2c44352c44ae8b58dea1a90c[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 16:17:55 2019 +0000

    Add jest and enzyme

[33mcommit db4b604658e25cf7ee51f0320f2b39aed39a693d[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 15:04:11 2019 +0000

    Pass correct props to header for enabling and disabling

[33mcommit ef3c6b0c4c25305438e7bf47551dcd7632280f42[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 15:03:33 2019 +0000

    Add footer config options to readme

[33mcommit 8a5e6082592f8b64c9feca809704e685b65732d7[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 14:27:11 2019 +0000

    Add ability to disable footer

[33mcommit 4ad63efe6af14d5b9992cb2d95f34ff25a8dff68[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 12:10:46 2019 +0000

    Add header callback functions and enabled option

[33mcommit 1378662cc9f19757a713d924b0b493c3e4a92758[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 11:27:19 2019 +0000

    Remove flow type plugins

[33mcommit b3a63ed470eb31c7a9548a3329784e6a31c8edd4[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 11:22:14 2019 +0000

    Improve manin nav focus style

[33mcommit e70cfe1468345be7fa0e7c7472e2b27674536f8d[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 11:18:46 2019 +0000

    Stop non-stylelint linters for CSS in vscode

[33mcommit 294be3dcc4e122e09ea1ae45097e01776fe3c776[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 11:18:11 2019 +0000

    Add missing dependencies

[33mcommit 874dde702fe26d4dd6a9052fea79dacce05c701e[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 11:17:46 2019 +0000

    Add property ordering to stylelint

[33mcommit 027a281b2dc0468691be279627171192f5fa12fd[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 11:00:13 2019 +0000

    Add header prop types

[33mcommit 4b7e56d5947989f54974ef92a40f524673d5e9f5[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 10:58:37 2019 +0000

    Add readme details including tech stack, setup steps etc

[33mcommit 4bcf60913a8a10bad90d9e22d14cf1163c8bfd08[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Fri Feb 1 10:32:46 2019 +0000

    Add print style to hide header

[33mcommit 8458535da4a1e259892efcb37a11a7209625ca10[m
Author: Claire Hunter <claire.hunter@nice.org.uk>
Date:   Thu Jan 31 16:14:12 2019 +0000

    GN-2 header navigation - initial bits

[33mcommit 53d744d2d7def782df77af87fd5c646f400f16b3[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jan 31 09:57:39 2019 +0000

    Force lf line endings

[33mcommit 69d01e15f6e61f292c0111aafa4615fa9452a951[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Thu Jan 31 09:45:26 2019 +0000

    Add git attributes for auto line endings

[33mcommit 1cd6f1f32933a5baa1592997aec0935923a69a1d[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Jan 29 12:30:15 2019 +0000

    Add readme placeholders

[33mcommit fc8bd25e70245f963c2e0921808a3b38788736d5[m
Author: Ian Routledge <ian.routledge@nice.org.uk>
Date:   Tue Jan 29 12:17:59 2019 +0000

    Initial commit

[33mcommit 35eca7f976b059e68f646e27ec58d19f9e3dfc08[m
Author: Ian Routledge <ian@ediblecode.com>
Date:   Tue Jan 29 09:34:27 2019 +0000

    Initial commit
