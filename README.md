
Next TODO - branch 'slides-from-slideshadow'
- how hard to move to workspace and new theme plugin (gatsby-theme-slides?)

Another TODO - PWA Slides from this 'starter'


## Steps for Building Slides from Blog Theme

Gastby now supports modifying a 'theme' by 'shadowing' files from the 
npm package for that theme.  This project was created from the starter
for the official Gatsby Blog Theme (see original README below) and
then various files were shadowed to build a starter slide show app.

## What is 'Shadowing'

Shadowing is the concept of building a partial source directory
with the same basic directory structure of the theme npm plugin
and replacing files from that plugin.

I did that in this project to convert a blog site to a simple
slideshow site.  I hope to outline how I did this and why I 
shadowed the various files.  Overall, I had to shadow around 10
files that were not already shadowed.  

## My Steps

### "Secret" Purpose

I have volunteered to give a talk on PWAs (Progressive Web Applications).  From my limited experience, it is MUCH easier to build
one of those from a Gatby project.  I hope to finish this starter
to the point I can build my slides for that talk as a PWA...and
hopefully surprise the audience at the end.

### Getting Original

I could have gone to the Github site for gatsby-blog-theme to view
and copy the original files, but instead I chose to grab them from
the installed node_modules directory for 'gatsby-blog-theme'.  In
order to keep them around for reference, I added them under the 
directory 'theme-originals'.

### Step 1 - Replace Bio Contents

The bio-contents.js file was already shadowed as a example.  This
was changed to use it as the 'Table of Contents' label.

### Step 2 - Modify Dark Mode Switch

I wanted to simplify the Dark Mode switch and make it less prominant.
Such as remove the sun and moon icons and dim the whole thing.

The switch is defined in header.js, so this was shadowed and the icons
were commented out and a div with low opacity was added around the
switch.

:warning:  Replacing the header.js file required changing some of the
import statements to reference the other source files installed
in node_modules.  For example:

```
// import Switch from "./switch"
import Switch from "../../../node_modules/gatsby-theme-blog/src/components/switch"
```

### Step 3 - Remove Social Links from Home Page

I wanted to remove the links to twitter etc from the bottom of the
page.  These are added in 2 files: home-footer.js and post-footer.js.

I first tried removing the siteMetadata.social items in gatsby-config.js, but this didn't work.  home-footer.js was shadowed
and the section to display those links was commented out.

I also tried shadowing the post-footer.js file and commenting out
where it adds the social links, but that didn't work.  The next
section will describe why.

### Step 4 - 'Shadow' gatstby-node.js

After some investigation, I determined that the post-footer.js is
only used from the template/post.js file, which intern is used by
the gatsby-node.js tool.  

I don't think the Theme authors consider copy this build tool as
a theme 'shadow', but to fix the post footer and some other things
like changing the order of posts (or now 'slides'), this will
be neccessary.

gatsby-node.js was copied to the top level of this project (not in
the src/gatsby-theme-blog like the other files).

The templates for post.js and posts.js were also shadowed.

There are several changes to the gatsby-node.js tool:

- change path to newly shadowed templates
- changed the graphql object 'BlogPost' to 'BlogPostShadow'.  This was needed because the original gatsby-node.js tool is still being run.
- changed the query response order from DESC to ASC (blogs was newest first, slides will use oldest first)
- changed logic that links slides
- minor change to size of preview of post/slide on home page.

template/posts.js was modified to use a class 'pageContext' rather
than 'postContext', to clear a deprication warning.

There were some other minor style changes.

:warning:  At this point the slides are in the ascending date order,
technically mis-using date as a 'slide' number.

### Step 5 - Fix Big Whitespace, shadow layout.js

At this point everything seems to function, but there is a lot of
vertical space between 'Table of Contents' and the first slide
description on the home page.  I couldn't figure out a clever way
tp override the css-in-js within layour.js, so this was also
shadowed.

### Step 6 - Link last->next and first->prev to TOC

Want slides to cycle back to Table of contents.  Slight change to shadowed 
components/post.js.

### Step 7 - Rename all 'Post' to 'Slide'

To complete the transformation, we need to move content/posts to content/slides
and rename internal variables.


## How to Use this Starter

The first step is to generate your own site from this starter:

```
gatsby new my-super-duper_slides https://github.com/alpiepho/gatsby-starter-slides-theme
```

The second step is to change the siteMetadata.title in your local gatsby-config.js file.

Third, optionally, change the colors in the shadowed colors.js (./src/gatsby-theme-blog/gatsby-plugin-theme-ui/colors.js)

Fourth, run the site:
```
yarn install
yarn start
```

Finally, start modifying the content/slides/slide*.mdx files.






<p></p>
<br/>
<hr/>
<p></p>
<br/>
Original from:

```
gatsby new gatsby-starter-slides-theme https://github.com/gatsbyjs/gatsby-starter-blog-theme
```


<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Starter for the official Gatsby blog theme
</h1>

Quickly get started using the Gatsby blog theme! This starter creates a new Gatsby site that is preconfigured to work with the [official Gatsby blog theme](https://www.npmjs.com/package/gatsby-theme-blog).

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog theme starter.

    ```sh
    # create a new Gatsby site using the blog theme starter
    gatsby new my-themed-blog https://github.com/gatsbyjs/gatsby-starter-blog-theme
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-themed-blog/
    gatsby develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:8000`!

    To get started, check out the guide to [using the Gatsby blog theme starter](http://gatsbyjs.org/docs/themes/using-a-gatsby-theme), or the longer, [more detailed tutorial](http://gatsbyjs.org/tutorial/using-a-theme).

## 🧐 What's inside?

Here are the top-level files and directories you'll see in a site created using the blog theme starter:

```
gatsby-starter-blog-theme
├── content
│ ├── assets
│ │ └── avatar.png
│ └── posts
│ ├── hello-world.mdx
│ └── my-second-post.mdx
├── src
│ └── gatsby-theme-blog
│ ├── components
│ │ └── bio-content.js
│ └── gatsby-theme-ui
│ └── colors.js
├── .gitignore
├── .prettierrc
├── gatsby-config.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

1.  **`/content`**: A content folder holding assets that the theme expects to exist. This will vary from theme to theme -- this starter is set up to get you started with the blog theme, which expects an image asset for your avatar, and blog post content. Replace the avatar image file, delete the demo posts, and add your own!

2.  **`/src`**: You will probably want to customize your site to personalize it. The files under `/src/gatsby-theme-blog` _shadow_, or override, the files of the same name in the `gatsby-theme-blog` package. To learn more about this, check out the [guide to getting started with using the blog theme starter](http://gatsbyjs.org/docs/themes/using-a-gatsby-theme).

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This file tells [Prettier](https://prettier.io/) which configuration it should use to lint files.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. When using themes, it's where you'll include the theme plugin, and any customization options the theme provides.

6.  **`LICENSE`**: Gatsby is licensed under the MIT license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/).

Here are some places to start:

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.org/docs/themes/).

### General

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Reference Guides_ and _Gatsby API_ sections in the sidebar.
