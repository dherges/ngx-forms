import { Component } from '@angular/core'

@Component({
  selector: 'badges-nav',
  template: `
  <div class="mt-1 d-lg-block d-md-none d-sm-none ">
    <iframe id="twitter-widget-0"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            class="twitter-hashtag-button twitter-hashtag-button-rendered twitter-tweet-button"
            title="Twitter Tweet Button"
            src="https://platform.twitter.com/widgets/tweet_button.9384f3649360e38a7002082a80b92414.en.html#button_hashtag=ngxPlus&amp;dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=https%3A%2F%2Fng-bootstrap.github.io%2F%23%2Fcomponents%2Faccordion%2Fapi&amp;size=l&amp;text=I%27m%20checking%20out%20@ngx-plus%20Advanced%20Angular%20Modules%20&amp;time=1502482900204&amp;type=hashtag&amp;url=https%3A%2F%2Fngx-plus.github.io"
            style="position: static; visibility: visible; width: 155px; height: 28px; line-height: 28px;"
            data-hashtag="ngxPlus">
    </iframe>
    <iframe allowtransparency="true"
            scrolling="no"
            frameborder="0"
            src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fngx-plus%2Fngx-forms&amp;aria-label=Star%20ngx-plus%2Fngx-forms%20on%20GitHub&amp;data-text=Star&amp;data-size=large&amp;data-show-count=true"
            style="border: none; width: 113px; height: 28px; line-height: 28px;">
    </iframe>
  </div>
  `,
})
export class BadgesNavComponent {}
