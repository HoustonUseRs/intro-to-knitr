# knitr

[HRUG Meetup](http://www.meetup.com/houstonr/events/227950530/)

# Why Knitr
* results need to be reproducible
* Documentation of code
  * easier to read and understand later on to extend
* Great for making reports as well
* Sharing results leads to facilitating discussion

# History
## Donald Knuth
  * On literate programming:
    * ..."consider programs to be works of literature"
    * comprehensible programs --> better programs
  * Also, because he's badass, made Tex for proper typesetting.

Some neat trivia
  * version number [approaches PI](http://www.tex.ac.uk/FAQ-TeXfuture.html)
  * use to send people a [byte of money ($2.56)](https://en.wikipedia.org/wiki/Knuth_reward_check) for finding bugs

## DK made WEB
  * WEB takes source file (of code and text)
  * has 2 main functions
    * Tangle
      * compiles to an executable code file
    * Weave
      * compiles to documentation

## markdown rose to prevalence
  * translates to HTML
  * clear, concise
    * at the cost of being somewhat restrictive
  * almost as readable as the rendered HTML

## [pandoc](http://pandoc.org/)
  * can convert between MANY different formats

**markdown + pandoc + Sweave leads to Knitr**

# In Use

Knitr runs in a separate environment

If you use markdown
  * Can include things like videos, etc. using HTML

Can also use [LaTex](http://kbroman.org/knitr_knutshell/pages/latex.html), and others as input

The rest of the talk is in reference to using Knitr with [Rmarkdown](http://rmarkdown.rstudio.com/)

Like [markdown](http://rmarkdown.rstudio.com/#markdown-basics) syntax except
  * hyphens up top delineate [frontmatter/metadata in YAML](http://rmarkdown.rstudio.com/#output-options)
    * for output options mostly
  * [Codeblocks](http://rmarkdown.rstudio.com/authoring_rcodechunks.html) can be passed options

Shortcut for codeblock in RStudio
  * <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>i</kbd>
  * <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>i</kbd>

# Neat Tips:

## As code gets longer
  * make separate R files
  * source them in the Knitr.

## Use things like [stargazer package](https://cran.r-project.org/web/packages/stargazer/index.html)

## can run a chunk
  * By highlighting and <kbd>ctrl</kbd> + <kbd>enter</kbd> to run as with other code in RStudio

## can comment out
  * using HTML commenting

  ```
  <!-- any markdown including mix of text and codeblocks here -->
  ```

## Caching
  * cache option, if true
    * doesn't re-eval itself if previous chunks has updated
    * re-evals if changed within chunk

## Name code blocks
  * can see in RStudio and use as navigation
  * can reference code blocks elsewhere in document

## Can write [knitr hooks](http://yihui.name/knitr/hooks/)
  * extra customization!

# Examples

* [stackoverflow](http://health.stackexchange.com/questions/4413/how-much-of-the-difference-in-brain-size-is-attributable-to-gender-not-physical)
  * learned about caching

* For taking code from an explanation to use
  * ```knitr('filename.Rmd', tangle=TRUE)``` will extract the code chunks and return 'filename.R' with just the R Code

* slides, with `ioslides_presentation`


## What are some workflows that include Knitr when doing analysis in R?

* whole workflow in Rmd
* do in RStudio first, then go to Rmarkdown
* sourcing a lot of R code chunks
  * source one big file that sources other things

## Is there a way to do interactive Rmarkdown editing online?

[Shiny](http://rmarkdown.rstudio.com/authoring_shiny.html)

## Good Practices and reports generation

### Why use Rmarkdown for report generation?
* Excel/Word with macros == sucked
  * brittle, any small change = broken
* Rmarkdown is cleaner
* get to leverage the power of R
  * for analysis
  * for plots, graphs, etc
* easy to re-run anlysis and keep report in sync
* easier to publish online

### Downsides

* Difficult to have exact control over styles
* Lack of good `.ppt` generation for some audiences

## Workflow

* load.R, cleanup.R, figs.R, main.R
* source main that loads all
* custom ggplot theme
* customization can mean getting into css/html

# Other things!

Beamer for slides, and there are cool beamer themes

[Brew](https://learnr.wordpress.com/2009/09/09/brew-creating-repetitive-reports/) is another way to do things like we saw with Knitr
  * Takes more up front set up though

you can make knitr to mark new page `\newpage`
 * `\newpage` is a feature of TeX

[Reproducible Research](https://cran.r-project.org/web/views/ReproducibleResearch.html)
  * "places knitr in context with functions and packages it plays nice with, and some alternatives"