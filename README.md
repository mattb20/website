# Makers Academy Site

[ ![Codeship Status for makersacademy/site-mvp](https://codeship.com/projects/e5781160-fcad-0132-3d45-5a06a30fe976/status?branch=master)](https://codeship.com/projects/87550)

Our new-look website, currently viewable at [http://www.makersacademy.com](http://www.makersacademy.com).

## Why are we open sourcing our website?

Here at Makers Academy we believe in practising what we preach - which means both open-sourcing code wherever possible and writing code that we're proud to showcase to the world. We wanted our new website to be open so people can both see the principles that drive our code, and as a learning tool for students and graduates alike.

## Setting up the site locally

* Clone the repo
* Run `bundle` to install gems
* Create a **.env** file - you can copy the [.env.example file](https://github.com/makersacademy/site-mvp/blob/master/.env.example) provided as an example to get you started
* Start the server with `middleman s`
* Go to __http://localhost:4567__ to view the site in your browser

## Deploying

* Make sure you have submitted a pull request and had it approved following our [contributing guidelines](https://github.com/makersacademy/site-mvp/blob/master/CONTRIBUTING.md)
* Merge the pull request into master
* Once our [CI server](https://codeship.com/projects/87550) has passed the tests, it will automatically deploy to Github Pages by using the `rake publish` command provided by the [Middleman GitHub pages extension](https://github.com/neo/middleman-gh-pages). This builds a Middleman site and pushes the built repo onto a gh-pages branch.

## Technologies used

* [Ruby](https://www.ruby-lang.org/en/) as our server side language
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[jQuery](http://jquery.com/) for client side scripts
* [Middleman](https://middlemanapp.com/) for compiling our code into a static website we can host on [GitHub pages](https://pages.github.com/)
* [RSpec](http://rspec.info/) for testing
* [Bower](http://bower.info/) for installing shared assets
* [Sass](http://sass-lang.com/) to help write our CSS
* [Bourbon](http://bourbon.io/)/[Neat](http://neat.bourbon.io/)/[Bitters](http://bitters.bourbon.io/) as a framework for our CSS
* [Typekit](http://typekit.com) for typefaces

## Adding images

Our images are stored on the [makers assets GitHub repo](https://github.com/makersacademy/makers-assets) - we've split them out to a seperate repository to keep the size of this repository down. All assets from that repository can be accessed from http://assets.makersacademy.com.

When adding a new image, add it to the [images directory](https://github.com/makersacademy/makers-assets/tree/gh-pages/images) of the [makers assets GitHub repo](https://github.com/makersacademy/makers-assets), and make sure that the image has been compressed using [image optim](https://imageoptim.com/) and are good quality images that fit the look and feel of the site.

## Publishing to Bower

We use Bower to share our assets across the various Makers Academy websites. If
you need to update the assets here so a newer version can be made available to
our other sites, just run `rake publish:bower`, and enter a [semantic versioning
number](http://semver.org/).

The latest SASS changes will be compiled into CSS and a new version of the styles will be published to Bower.

## Versioning

We use [semantic versioning](http://semver.org) when creating new releases using
tags. This is used both for Bower (see above) and for tracking changes in
Mixpanel so we can compare how different versions of the website perform.

A few things to bear in mind:

- If you are only creating a release to update Bower with some style changes,
  just release a PATCH version
- If you have made a change that is important enough to be tracked in Mixpanel,
  release a MINOR version or if it's a huge change a MAJOR
- Make sure that when releasing a MAJOR or MINOR version (e.g. upgrading from 2.1.3 to 2.2.0) you:
  1. change in `config.rb` the `website_version` number - this number is sent to Mixpanel, **please don't forget to do this!**
  2. run `rake publish:bower` with the new version number to ensure that the **bower.json** file has the correct version
