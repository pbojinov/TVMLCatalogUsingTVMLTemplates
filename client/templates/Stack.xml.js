/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A stack template shows stacked rows of items beneath a banner, such as movies, TV shows, or products. The user can navigate through the rows and products to focus on one.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .imageWithGradient {
      tv-tint-color: linear-gradient(top, 0.33, transparent, 0.66, rgba(0,64,0,0.7), rgba(0,64,0,1.0));
    }
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .scrollTextOnHighlight {
      tv-text-highlight-style: marquee-on-highlight;
    }
    .showAndScrollTextOnHighlight {
      tv-text-highlight-style: marquee-and-show-on-highlight;
    }
    </style>
  </head>
  <stackTemplate>
    <collectionList>
      <carousel>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/carousel/carousel_3.lcr" width="1740" height="500" />
            <overlay>
              <title>Title 1</title>
              <subtitle>Subtitle 1</subtitle>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/carousel/carousel_1.lcr" width="1740" height="500" />
            <overlay>
              <title>Title 2</title>
              <subtitle>Subtitle 2</subtitle>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/carousel/carousel_2.lcr" width="1740" height="500" />
            <overlay>
              <title>Title 3</title>
              <subtitle>Subtitle 3</subtitle>
            </overlay>
          </lockup>
        </section>
      </carousel>
      <shelf>
        <header>
          <title>Shelf title</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_1.lcr" width="332" height="500" />
            <title class="scrollTextOnHighlight">Title 1</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_2.lcr" width="332" height="500" />
            <title class="showAndScrollTextOnHighlight">Title 2</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_3.lcr" width="332" height="500" />
            <title class="showTextOnHighlight">Title 3</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_4.lcr" width="332" height="500" />
            <title class="showTextOnHighlight">Title 4</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_5.lcr" width="332" height="500" />
            <title class="showTextOnHighlight">Title 5</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_6.lcr" width="332" height="500" />
            <title class="showTextOnHighlight">Title 6</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/movies/movie_7.lcr" width="332" height="500" />
            <title class="showTextOnHighlight">Title 7</title>
          </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title class=" showTextOnHighlight">Row 1</title>
        </header>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_1_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 1</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_12_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 2</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_3_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 3</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_4_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 4</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_5_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 5</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_6_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 6</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_7_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 7</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_8_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 8</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_10_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 9</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/iceland/iceland_11_square.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Title 10</title>
          </lockup>
        </section>
      </shelf>
      <shelf>
        <section>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_1.jpg" width="578" height="260" aspectFill="1" />
            <title class="showTextOnHighlight">Title 1</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_2.jpg" width="578" height="260" aspectFill="1" />
            <title class="showTextOnHighlight">Title 2</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_3.jpg" width="578" height="260" aspectFill="1" />
            <title class="showTextOnHighlight">Title 3</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_4.jpg" width="578" height="260" aspectFill="1" />
            <title class="showTextOnHighlight">Title 4</title>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/italy/italy_5.jpg" width="578" height="260" aspectFill="1" />
            <title class="showTextOnHighlight">Title 5</title>
          </lockup>
        </section>
      </shelf>
      <grid>
        <header>
          <title>Row 2</title>
        </header>
        <section>
          <lockup>
            <img class="imageWithGradient" src="${this.BASEURL}resources/images/iceland/iceland_8.jpg" width="1024" height="414" />
            <overlay>
              <title>Title</title>
              <subtitle>Subtitle</subtitle>
            </overlay>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
            <title>Title</title>
            <subtitle>Subtitle</subtitle>
            <subtitle>Subtitle 2</subtitle>
          </lockup>
          <lockup>
            <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
            <title>Title</title>
            <subtitle>Subtitle</subtitle>
            <subtitle>Subtitle 2</subtitle>
          </lockup>
        </section>
      </grid>
    </collectionList>
  </stackTemplate>
</document>`
}
