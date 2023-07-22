import * as book from './book-imgs.js'

/*    understand/
 * main entry point into our program
 */
function main() {
  const opts = {
    backgroundColor: "#FFFFFF",
    width: 1200,
    height: 800,
  }
    const pages = [
        '/assetes/pages/pages-01.png',
        '/assetes/pages/pages-02.png',
        '/assetes/pages/pages-03.png',
        '/assetes/pages/pages-04.png',
        '/assetes/pages/pages-05.png',
        '/assetes/pages/pages-06.png',
        '/assetes/pages/pages-07.png',
        '/assetes/pages/pages-08.png',
        '/assetes/pages/pages-09.png',
        '/assetes/pages/pages-10.png',
        '/assetes/pages/pages-11.png',
        '/assetes/pages/pages-12.png',
        '/assetes/pages/pages-13.png',
        '/assetes/pages/pages-14.png',
        '/assetes/pages/pages-15.png',
        '/assetes/pages/pages-16.png',
        '/assetes/pages/pages-17.png',
        '/assetes/pages/pages-18.png',
        '/assetes/pages/pages-19.png',
        '/assetes/pages/pages-20.png',
      ];

  const next = $('.next')
  const prev = $('.prev')
  console.log(prev)
  console.log(next)
  book.init(pages, (err, book) => {
    if(err) console.error(err)
    else flipbook.init(book, 'app', opts, (err, viewer) => {
      if(err) console.error(err)

      viewer.on('seen', n => {
        if(n == 1 ||prev.first().hasClass('deactivated')) prev.toggleClass('deactivated')
        if(n == 20 ||next.first().hasClass('deactivated')) next.toggleClass('deactivated')
      })
      
      next[0].onclick = () => viewer.flip_forward();
      prev[0].onclick = () => viewer.flip_back();
    })
  })

}

main()