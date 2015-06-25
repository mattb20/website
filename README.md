# site-mvp

[ ![Codeship Status for makersacademy/site-mvp](https://codeship.com/projects/e5781160-fcad-0132-3d45-5a06a30fe976/status?branch=master)](https://codeship.com/projects/87550)

Main site version 0.2

To deploy, simply push to master and CI will handle deployment

Website reveal video: https://www.youtube.com/watch?v=rOlXg-kwz2w

For the moment the only documentation is on the [elements page](http://beta.makersacademy.com/elements/), we'll add [in more in the next sprint](https://waffle.io/makersacademy/engineering/cards/558bdc3e8518ae1d0098d780).

## Margins/Padding

Here's the deal: padding-top, margin-bottom. Ignore this at your peril.

## Header Layout 

* `h1` is used once per page, for the main page headline. For example, 'Learn to Code in 12 weeks' on the homepage. It is a large red header in caps.
* `h2` is used for section headers. For example, 'our graduates'. It is a smaller red header in caps.
* `h2.subheader` is used for in-body headers. For example, 'who are our hiring partners?' in partners.html.haml. It is a smaller **gray** header in caps.
* `h3.leader` is used for leaders to larger titles. These look just like `h2.subheader` but have adjusted margins. For example, 'Our' on the homepage.
* `h3.subheader` is used for subheaders to larger titles. These look just like `h3.leader` but have adjusted margins. For example, job titles on the 'team' page.
