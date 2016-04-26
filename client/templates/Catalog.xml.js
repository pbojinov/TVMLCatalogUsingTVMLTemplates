/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A catalog template allows you to display groupings of related items, such as genres of movies or TV shows. View the list of groupings on the left and focus on one to see its items on the right.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
      .whiteText {
        color: rgb(255, 255, 255);
      }
      </style>
    </head>
    <catalogTemplate>
      <banner>
        <title>Title</title>
      </banner>
      <list>
        <section>
          <header>
            <title>Section Header</title>
          </header>
          <listItemLockup>
            <title>Title 1</title>
            <decorationLabel>6</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
                    <title class="whiteText">Title 1</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
                    <title class="whiteText">Title 2</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="308" height="308" />
                    <title class="whiteText">Title 3</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_4.lcr" width="308" height="308" />
                    <title class="whiteText">Title 4</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_5.lcr" width="308" height="308" />
                    <title class="whiteText">Title 5</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_6.lcr" width="308" height="308" />
                    <title class="whiteText">Title 6</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>Title 2</title>
            <decorationLabel>8</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
                    <title class="whiteText">Title 1</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
                    <title class="whiteText">Title 2</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="308" height="308" />
                    <title class="whiteText">Title 3</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_4.lcr" width="308" height="308" />
                    <title class="whiteText">Title 4</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_5.lcr" width="308" height="308" />
                    <title class="whiteText">Title 5</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_6.lcr" width="308" height="308" />
                    <title class="whiteText">Title 6</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_7.lcr" width="308" height="308" />
                    <title class="whiteText">Title 7</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
                    <title class="whiteText">Title 8</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>Title 3</title>
            <decorationLabel>12</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
                    <title class="whiteText">Title 1</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
                    <title class="whiteText">Title 2</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="308" height="308" />
                    <title class="whiteText">Title 3</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_4.lcr" width="308" height="308" />
                    <title class="whiteText">Title 4</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_5.lcr" width="308" height="308" />
                    <title class="whiteText">Title 5</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_6.lcr" width="308" height="308" />
                    <title class="whiteText">Title 6</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_7.lcr" width="308" height="308" />
                    <title class="whiteText">Title 7</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
                    <title class="whiteText">Title 8</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
                    <title class="whiteText">Title 9</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="308" height="308" />
                    <title class="whiteText">Title 10</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_4.lcr" width="308" height="308" />
                    <title class="whiteText">Title 11</title>
                  </lockup>
                  <lockup>
                    <img src="${this.BASEURL}resources/images/music/music_5.lcr" width="308" height="308" />
                    <title class="whiteText">Title 12</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
