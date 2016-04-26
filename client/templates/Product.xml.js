/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A product template promotes movies, TV shows, or other products. It typically includes a product image, background, and descriptive information. A shelf below the product content displays related products and the user can scroll down to bring up more information, like cast and crew listings, ratings, or reviews.

Consider image and text colors carefully when customizing the background. By default, the background displays a blurred copy of your product image, producing a nice, complementary visual effect. If you decide to customize the background, make sure it doesn’t clash with your other content.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .whiteBadge {
      tv-tint-color: rgb(255, 255, 255);
    }
    .shelfLayout {
      padding: 20 90 50;
    }
    </style>
  </head>
  <productTemplate theme="light">
    <background>
      <audio>
        <asset src="${this.BASEURL}resources/audio/Building_Blocks.mp3" />
      </audio>
    </background>
    <banner>
      <heroImg src="${this.BASEURL}resources/images/italy/italy_9_square.jpg" />
      <infoList>
        <info>
          <header>
            <title>Header</title>
          </header>
          <text>Text 1</text>
          <text>Text 2</text>
          <text>Text 3</text>
        </info>
      </infoList>
      <stack>
        <title>Title</title>
        <row>
          <text>Text 1</text>
          <text>Text 2</text>
          <text>Text 3</text>
        </row>
        <description allowsZooming="true" template="${this.BASEURL}templates/AlertWithDescription.xml.js" presentation="modalDialogPresenter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</description>
        <row>
          <buttonLockup>
            <badge src="resource://button-remove" class="whiteBadge" />
            <title>Title 1</title>
          </buttonLockup>
          <buttonLockup>
            <badge src="resource://button-add" class="whiteBadge" />
            <title>Title 2</title>
          </buttonLockup>
          <buttonLockup>
            <badge src="resource://button-cloud" class="whiteBadge" />
            <title>Title 3</title>
          </buttonLockup>
        </row>
      </stack>
    </banner>
    <shelf>
      <header>
        <title>Shelf Header</title>
      </header>
      <section>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_1.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 1</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_2.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 2</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_3.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 3</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_4.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 4</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_5.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 5</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_6.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 6</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_7.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 7</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_1.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 8</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_2.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 9</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_3.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 10</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_4.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 11</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_5.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 12</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_6.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 13</title>
        </lockup>
        <lockup>
          <img src="${this.BASEURL}resources/images/movies/movie_7.lcr" width="150" height="226" />
          <title class="showTextOnHighlight">Title 14</title>
        </lockup>
      </section>
    </shelf>
    <shelf>
      <header>
        <title>Title</title>
      </header>
      <section>
        <reviewCard>
          <badge src="resource://button-checkmark" />
          <title>Title 1</title>
          <subtitle>Subtitle 1</subtitle>
        </reviewCard>
        <reviewCard>
          <badge src="resource://button-artist" />
          <title>Title</title>
          <description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</description>
        </reviewCard>
        <reviewCard>
          <badge src="resource://button-follow" />
          <subtitle>Subtitle</subtitle>
          <description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</description>
        </reviewCard>
      </section>
    </shelf>
    <shelf class="shelfLayout">
      <header>
        <title>Title</title>
      </header>
      <section>
        <monogramLockup>
          <monogram firstName="Adam" lastName="Gooseff" />
          <title>Adam Gooseff</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Ailish" lastName="Kimber" />
          <title>Ailish Kimber</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Allen" lastName="Buchinski" />
          <title>Allen Buchinski</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Dave" lastName="Elfving" />
          <title>Dave Elfving</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Ethan" lastName="Izzarelli" />
          <title>Ethan Izzarelli</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Euna" lastName="Kwon" />
          <title>Euna Kwon</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Fritz" lastName="Ogden" />
          <title>Fritz Ogden</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Gilbert" lastName="Solano" />
          <title>Gilbert Solano</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Jamie" lastName="Wong" />
          <title>Jamie Wong</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Joyce" lastName="Sihn" />
          <title>Joyce Sihn</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Vivian" lastName="Li" />
          <title>Vivian Li</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Paul" lastName="Cashman" />
          <title>Paul Cashman</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Stephanie" lastName="Vidal" />
          <title>Stephanie Vidal</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Yumi" lastName="Asai" />
          <title>Yumi Asai</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Rachel" lastName="Roth" />
          <title>Rachel Roth</title>
        </monogramLockup>
        <monogramLockup>
          <monogram firstName="Mike" lastName="Stern" />
          <title>Mike Stern</title>
        </monogramLockup>
      </section>
    </shelf>
  </productTemplate>
</document>`
}
