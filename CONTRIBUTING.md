# Our process for adding a new feature/fixing a bug on one of our engineering repos

1. Create a Github issue in the relevant repository relating to the feature/bug if it has not been created already. You will see it appear on our [scrum board](http://waffle.io/makersacademy/engineering) in the backlog. You can also create issues directly in [Waffle](https://www.waffle.io), just make sure they belong to the correct repo.
2. When you are ready to work on the story (normally as part of a sprint - it will be moved in the to-do column during the sprint kick-off meeting), create a branch that begins with the issue number and then explains the task at hand, e.g. `295-dates-on-apply-page`. Note if you now push your new branch to origin, waffle will automatically mark it as in progress
3. When you are done, create a pull request from your branch to `develop` - put the ticket number in the PR comment, e.g. "closes #295" so Waffle will know to link it to the appropriate ticket.
4. Get another member of the team to review your PR. 
5. When you get a thumbsup, merge your PR. 
6. Push up to staging, do some visual QA.
7. When you're happy, rebase/merge onto `master` and push to origin immediately. CI will deploy automatically. 
8. Do some more visual QA.
9. Highfive someone/something.

## Example

An example command line workflow using [hub](https://github.com/github/hub) to create pull requests on the command line, the headers correspond to the stage the story will automatically move to in waffle

### In Progress
```
git checkout -b 295-dates-on-apply-page
git push -u origin 295-dates-on-apply-page
```

### QA
```
git checkout 295-dates-on-apply-page
git commit -am "Adds dates on apply page. Closes #295"
git push
git pull-request -b develop
```

Once you've got the thumbs up:

```
git checkout develop
git merge 295-dates-on-apply-page
git push
git push staging develop:master
```

### Done
```
git checkout master
git merge develop
git push
```
